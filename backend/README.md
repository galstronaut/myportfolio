# Photo interaction backend

This service persists photo likes and comments in `backend/data/interactions.json`.

Run it locally with `node server.js`, then open the portfolio locally. For the public GitHub Pages site, deploy this folder to a Node.js host (for example Render, Railway, or a VPS), set `ALLOWED_ORIGIN=https://galstronaut.github.io`, and set `window.PHOTO_API_URL` in `js/config.js` to the deployed URL plus `/api`.

Likes are limited to one per browser. Comments require a display name and are stored with the comment.
