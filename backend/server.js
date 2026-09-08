// Lightweight persistence API for photo likes and comments.
// Run with: node server.js
const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");
const { randomUUID } = require("node:crypto");

const PORT = Number(process.env.PORT || 8787);
const dataFile = path.join(__dirname, "data", "interactions.json");
const allowedOrigin = process.env.ALLOWED_ORIGIN || "*";

async function readStore() {
  try { return JSON.parse(await fs.readFile(dataFile, "utf8")); }
  catch (error) { if (error.code === "ENOENT") return { photos: {} }; throw error; }
}
async function writeStore(store) {
  await fs.mkdir(path.dirname(dataFile), { recursive: true });
  const temporary = `${dataFile}.tmp`;
  await fs.writeFile(temporary, JSON.stringify(store, null, 2));
  await fs.rename(temporary, dataFile);
}
function send(res, status, value) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8", "Access-Control-Allow-Origin": allowedOrigin });
  res.end(JSON.stringify(value));
}
function blankPhoto() { return { likesByClient: {}, comments: [] }; }
function publicPhoto(photo, clientId) {
  return { likes: Object.keys(photo.likesByClient || {}).length, liked: Boolean(clientId && photo.likesByClient?.[clientId]), comments: photo.comments || [] };
}
function validPhotoId(value) { return /^[a-z]+-\d{2}$/.test(value || ""); }
async function body(req) {
  const parts = [];
  for await (const chunk of req) { parts.push(chunk); if (Buffer.concat(parts).length > 12_000) throw new Error("Request too large"); }
  return JSON.parse(Buffer.concat(parts).toString("utf8") || "{}");
}

http.createServer(async (req, res) => {
  if (req.method === "OPTIONS") { res.writeHead(204, { "Access-Control-Allow-Origin": allowedOrigin, "Access-Control-Allow-Methods": "GET,POST,PUT,OPTIONS", "Access-Control-Allow-Headers": "Content-Type" }); return res.end(); }
  const match = new URL(req.url, `http://${req.headers.host}`).pathname.match(/^\/api\/photos\/([a-z]+-\d{2})(?:\/(like|comments))?$/);
  if (!match || !validPhotoId(match[1])) return send(res, 404, { error: "Not found" });
  const [, photoId, action] = match;
  try {
    const store = await readStore();
    const photo = store.photos[photoId] ||= blankPhoto();
    if (req.method === "GET" && !action) return send(res, 200, publicPhoto(photo, new URL(req.url, `http://${req.headers.host}`).searchParams.get("clientId")));
    const input = await body(req);
    if (req.method === "PUT" && action === "like") {
      if (!/^[a-z0-9-]{16,80}$/i.test(input.clientId || "") || typeof input.liked !== "boolean") return send(res, 400, { error: "Invalid like request" });
      if (input.liked) photo.likesByClient[input.clientId] = true; else delete photo.likesByClient[input.clientId];
      await writeStore(store); return send(res, 200, publicPhoto(photo, input.clientId));
    }
    if (req.method === "POST" && action === "comments") {
      const name = String(input.name || "").trim().replace(/\s+/g, " ");
      const text = String(input.text || "").trim();
      if (!name || name.length > 48 || !text || text.length > 240) return send(res, 400, { error: "Name and comment are required" });
      photo.comments.push({ id: randomUUID(), author: name, text, createdAt: new Date().toISOString() });
      await writeStore(store); return send(res, 201, publicPhoto(photo, input.clientId));
    }
    return send(res, 405, { error: "Method not allowed" });
  } catch (error) { return send(res, 500, { error: "Could not save interaction" }); }
}).listen(PORT, () => console.log(`Photo API listening on http://localhost:${PORT}`));
