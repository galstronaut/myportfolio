/**
 * PORTFOLIO DATA (MULTILINGUAL)
 */

const projectsData = [
  {
    id: "gis-1",
    category: "gis",
    date: "Agustus 2025",
    heroImg: "images/gis/tsunami/profil.webp",
    tools: ["ArcGIS Pro", "DEMNAS", "QGIS", "Cost Distance"],
    titles: {
      id: "Pemodelan Inundasi & Mitigasi Tsunami Pangandaran",
      en: "Pangandaran Tsunami Inundation & Mitigation Modeling",
      ja: "パンガンダラン津波浸水・減災モデリング",
      ko: "팡안다란 쓰나미 침수 및 완화 모델링",
      ru: "Моделирование затопления и защиты от цунами в Пангандаране"
    },
    excerpts: {
      id: "Pemodelan inundasi tsunami metode Berryman (2006) berbasis DEM, lereng, tutupan lahan, dan koefisien kekasaran permukaan di pesisir Pangandaran.",
      en: "Tsunami inundation modeling using Berryman (2006) method based on DEM, slope, land cover, and surface roughness coefficients.",
      ja: "DEM、傾斜、土地被覆、表面粗度係数に基づくBerryman（2006）手法を用いた津波浸水モデリング。",
      ko: "DEM, 경사도, 토지 피복 및 표면 거칠기 계수를 기반으로 한 Berryman(2006) 방식의 쓰나미 침수 모델링.",
      ru: "Моделирование затопления цунами по методу Берримана (2006) на основе ЦМР, уклона и шероховатости поверхности."
    },
    categoryTags: {
      id: "PROJECT / GIS & SPASIAL",
      en: "PROJECT / GIS & SPATIAL",
      ja: "PROJECT / GIS・空間分析",
      ko: "PROJECT / GIS & 공간",
      ru: "PROJECT / ГИС & КАРТЫ"
    },
    cardMetric: {
      value: "63%",
      highlight: {
        id: "High Risk Area",
        en: "High Risk Area",
        ja: "High Risk Area",
        ko: "High Risk Area",
        ru: "High Risk Area"
      },
      label: {
        id: "Total Inundation Potential",
        en: "Total Inundation Potential",
        ja: "Total Inundation Potential",
        ko: "Total Inundation Potential",
        ru: "Total Inundation Potential"
      }
    },
    slides: [
      {
        img: "images/gis/tsunami/inundasi.webp",
        titles: {
          id: "Pemodelan Inundasi Tsunami",
          en: "Tsunami Inundation Modeling",
          ja: "津波浸水モデリング",
          ko: "쓰나미 침수 모델링",
          ru: "Моделирование затопления цунами"
        },
        descs: {
          id: "Hasil pemodelan inundasi menyimpulkan bahwa Kecamatan Pangandaran memiliki tingkat kerawanan tsunami yang sangat tinggi dengan total potensi genangan mencapai 2.202,26 Ha. Area berisiko tinggi mencakup 63% (1.391,88 Ha) yang didominasi kawasan padat permukiman dan pusat kegiatan wisata.",
          en: "Inundation modeling concludes that Pangandaran District exhibits a very high tsunami hazard with an inundation zone reaching 2,202.26 ha. High-risk zones cover 63% (1,391.88 ha), predominantly encompassing dense residential areas and coastal tourism centers.",
          ja: "浸水モデリングの結果、パンガンダラン地区は津波危険度が極めて高く、総浸水想定区域は2,202.26ヘクタールに達すると結論付けられました。高リスク地域は63％（1,391.88ヘクタール）を占め、密集居住地や観光活動の中心地が集中しています。",
          ko: "침수 모델링 결과 팡안다란 지역은 총 침수 예상 구역이 2,202.26ha에 달해 매우 높은 쓰나미 취약성을 갖는 것으로 분석되었습니다. 고위험 지역은 63%(1,391.88ha)로 밀집 주거지 및 해안 관광 중심지가 포함됩니다.",
          ru: "Моделирование затопления показало, что район Пангандаран обладает чрезвычайно высоким уровнем уязвимости к цунами с потенциальной площадью затопления 2 202,26 га. Зона высокого риска охватывает 63% (1 391,88 га), угрожая плотным жилым кварталам и центрам туризма."
        }
      },
      {
        img: "images/gis/tsunami/klalsifikasi.webp",
        titles: {
          id: "Klasifikasi Kerawanan Tsunami",
          en: "Tsunami Hazard Classification",
          ja: "津波危険度分類",
          ko: "쓰나미 취약도 분류",
          ru: "Классификация опасности цунами"
        },
        descs: {
          id: "Peta ini menunjukkan tiga tingkat kerawanan tsunami di Kecamatan Pangandaran: rendah (hijau), sedang (kuning), dan tinggi (merah). Batas desa serta kecamatan turut ditampilkan agar pola risiko di setiap wilayah lebih mudah dibaca.",
          en: "Tsunami hazard classification map for Pangandaran District categorized into 3 levels according to the map legend: Low (green), Moderate (yellow), and High (red), along with village and district administrative boundaries.",
          ja: "地図の凡例に基づくパンガンダラン地区の津波危険度分類マップ：低（緑）、中（黄）、高（赤）の3段階評価、ならびに村および地区の行政境界を表示。",
          ko: "지도 범례에 따른 팡안다란 지역 쓰나미 취약도 분류 지도: 낮음(녹색), 보통(노란색), 높음(빨간색) 3단계 구분 및 마을·지역 행정 경계 표시.",
          ru: "Карта классификации уровней опасности цунами в районе Пангандаран по легенде карты: Низкий (зеленый), Средний (желтый) и Высокий (красный), а также границы деревень и районов."
        }
      },
      {
        img: "images/gis/tsunami/amatan.webp",
        titles: {
          id: "Peta Sebaran Indeks Kerawanan Tsunami",
          en: "amatan",
          ja: "amatan",
          ko: "amatan",
          ru: "amatan"
        },
        descs: {
          id: "Peta ini memperlihatkan sebaran indeks kerawanan tsunami di Kecamatan Pangandaran melalui gradasi warna. Area merah menunjukkan nilai kerawanan tertinggi, lalu berangsur ke kuning dan hijau pada area yang lebih rendah. Batas desa dan kecamatan membantu membaca persebaran risikonya.",
          en: "Observed tsunami hazard map displaying the continuous vulnerability index based on the map legend: High at 1 (red) to Low at 0.271812 (green), alongside village and district boundaries.",
          ja: "地図凡例に基づく津波災害脆弱性観測マップ：High（1、赤）からLow（0.271812、緑）までの連続インデックス分布、および村・地区の行政境界を表示。",
          ko: "지도 범례에 따른 쓰나미 관측 취약성 지도: High 1(빨간색)부터 Low 0.271812(녹색)까지의 연속 위험 지수 분포 및 마을·지역 경계 표시.",
          ru: "Карта наблюдаемой опасности цунами с непрерывным градиентом индекса по легенде: от High: 1 (красный) до Low: 0,271812 (зеленый), с границами деревень и районов."
        }
      },
      {
        img: "images/gis/tsunami/hasil.webp",
        titles: {
          id: "Hasil Perhitungan Tingkat Kerawanan",
          en: "Hazard Level Calculation Results",
          ja: "危険度レベル別計算結果",
          ko: "위험 등급별 계산 결과",
          ru: "Результаты расчетов по уровням опасности"
        },
        descs: {
          id: "Hasil perhitungan luas area tiap tingkat kerawanan tsunami: Rendah seluas 404,91 Ha (18%), Sedang seluas 405,47 Ha (18%), dan Tinggi seluas 1.391,88 Ha (63%) dari total area kajian 2.202,26 Ha (100%). Area paling berisiko tinggi mencakup lokasi permukiman warga dan pusat kegiatan wisata.",
          en: "Calculation results of area per tsunami hazard level: Low covers 404.91 ha (18%), Moderate covers 405.47 ha (18%), and High covers 1,391.88 ha (63%) out of a total study area of 2,202.26 ha (100%). The highest risk zone predominantly impacts settlements and coastal tourism.",
          ja: "津波危険度レベル別の面積計算結果：低 404.91 ha（18%）、中 405.47 ha（18%）、高 1,391.88 ha（63%）、調査総面積 2,202.26 ha（100%）。最もリスクの高いエリアは住宅地および観光活動の中心地に集中しています。",
          ko: "쓰나미 위험 등급별 면적 계산 결과 요약: 낮음 404.91ha(18%), 보통 405.47ha(18%), 높음 1,391.88ha(63%), 총 2,202.26ha(100%). 고위험 구역은 주로 거주 지역 및 해안 관광 중심지에 집중되어 있습니다.",
          ru: "Краткие результаты расчетов площади по уровням опасности цунами: Низкий — 404,91 га (18%), Средний — 405,47 га (18%), Высокий — 1 391,88 га (63%) из общей площади 2 202,26 га (100%). Наиболее опасная зона охватывает жилые кварталы и туристические центры."
        }
      }
    ]
  },
  {
    id: "gis-2",
    category: "gis",
    date: "Sep - Okt 2025",
    heroImg: "images/gis/znt/profil.webp",
    tools: ["ArcGIS", "Avenza Maps", "GPS Garmin", "Geodatabase"],
    titles: {
      id: "Survei & Pemetaan Zona Nilai Tanah (ZNT) NTT",
      en: "Land Value Zone (ZNT) Survey & Mapping NTT",
      ja: "東ヌサ・トゥンガラ州 土地評価額ゾーン (ZNT) 調査・マッピング",
      ko: "NTT 토지 가치 구역(ZNT) 조사 및 매핑",
      ru: "Съемка и картирование зон стоимости земли (ZNT) в NTT"
    },
    excerpts: {
      id: "Survei lapangan dan pemetaan Zona Nilai Tanah (ZNT) untuk Program Strategis Nasional ATR/BPN mencakup 61 desa pada 6 kecamatan di NTT.",
      en: "Field survey and Land Value Zone (ZNT) mapping for National Strategic Program ATR/BPN covering 61 villages across 6 sub-districts in East Nusa Tenggara.",
      ja: "東ヌサ・トゥンガラ州の6郡61村を対象とした国家戦略プログラム（ATR/BPN）の土地評価ゾーン（ZNT）現地調査とマッピング。",
      ko: "동누사텡가라 6개 구역 61개 마을을 대상으로 한 국가 전략 프로그램(ATR/BPN) 토지 가치 구역(ZNT) 현장 조사 및 매핑.",
      ru: "Полевые съемки и картирование зон стоимости земли (ZNT) для национальной программы ATR/BPN в 61 деревне провинции NTT."
    },
    categoryTags: {
      id: "PROJECT / ZNT (ATR/BPN)",
      en: "PROJECT / LAND VALUATION (ATR/BPN)",
      ja: "PROJECT / 土地評価 (ATR/BPN)",
      ko: "PROJECT / 토지 평가 (ATR/BPN)",
      ru: "PROJECT / ОЦЕНКА ЗЕМЛИ (ATR/BPN)"
    },
    cardMetric: {
      value: "61",
      highlight: {
        id: "Villages Map",
        en: "Villages Map",
        ja: "Villages Map",
        ko: "Villages Map",
        ru: "Villages Map"
      },
      label: {
        id: "Comprehensive Coverage",
        en: "Comprehensive Coverage",
        ja: "Comprehensive Coverage",
        ko: "Comprehensive Coverage",
        ru: "Comprehensive Coverage"
      }
    },
    slides: [
      {
        img: "images/gis/znt/zona.webp",
        titles: {
          id: "Pemetaan Awal Zona Nilai Tanah (ZNT) Kabupaten Timor Tengah Selatan Provinsi NTT",
          en: "Land Value Zone (ZNT) East Nusa Tenggara",
          ja: "東ヌサ・トゥンガラ州 土地評価額ゾーン (ZNT)",
          ko: "동누사텡가라주 토지 가치 구역 (ZNT)",
          ru: "Зоны стоимости земли (ZNT) в провинции NTT"
        },
        descs: {
          id: "Melakukan digitasi dan delineasi awal Zona Nilai Tanah (ZNT) dengan membagi wilayah menjadi zona pertanian dan nonpertanian, serta Subzona 1, 2, dan 3 berdasarkan jarak dari jalan utama. Hasil pemetaan ini digunakan sebagai acuan dalam penentuan titik sampel survei dan plotting ZNT.",
          en: "Land Value Zone (ZNT) spatial mapping for the Ministry of Agrarian Affairs & Spatial Planning across 61 villages in 6 sub-districts of East Nusa Tenggara.",
          ja: "校正されたGPSとモバイルGISを使用して、NTT州の6郡61村を対象に実施された現地調査と空間評価マッピング。",
          ko: "보정된 GPS와 모바일 GIS를 사용하여 NTT의 6개 구역 61개 마을을 대상으로 실시한 현장 조사 및 공간 평가 매핑.",
          ru: "Картирование стоимости земли в 61 деревне провинции NTT с использованием мобильных ГИС и пространственных баз данных."
        }
        },
      {
        img: "images/gis/znt/d2.webp",
        titles: {
          id: "Koordinasi Setiap Kantor Desa",
          en: "Parcel Verification & Surveyor Team Collaboration",
          ja: "筆界検証 & 測量チーム連携",
          ko: "필지 검증 및 측량팀 협업",
          ru: "Полевая верификация и работа геодезической группы"
        },
        descs: {
          id: "Melakukan koordinasi dan pengumpulan informasi pada setiap kantor desa sebagai data pendukung dalam kegiatan survei dan pemetaan ZNT.",
          en: "Technical coordination with the KJSB surveyor team and local land office personnel under the ILASPP 2025 national program.",
          ja: "ILASPP 2025国家プログラムにおける測量チームおよび現地土地局職員との技術調整。",
          ko: "ILASPP 2025 국가 프로그램에 따른 측량팀 및 현지 토지국 직원과의 기술 조율.",
          ru: "Координация с геодезической группой и специалистами земельного ведомства в рамках национальной программы ILASPP 2025."
        }
         },
      {
        img: "images/gis/znt/d1.webp",
        titles: {
          id: "Survei Lapangan & Pengukuran Titik Batas",
          en: "Field Boundary Survey & Coordinate Measurement",
          ja: "現地境界測量 & 座標計測",
          ko: "현장 경계 측량 및 좌표 측정",
          ru: "Полевые геодезические измерения и съемка границ"
        },
        descs: {
          id: "Pelaksanaan survei lapangan langsung di NTT untuk mengumpulkan titik sampel nilai pasar tanah wajar dan validasi batas pemilikan bidang tanah.",
          en: "Direct field survey operations across NTT to collect ground truth land market value sample points and validate land parcel boundaries.",
          ja: "適正な土地市場価値サンプルの収集と筆界検証のための現地直接調査の実施。",
          ko: "적정 토지 시장 가치 표본 수집 및 필지 경계 검증을 위한 현장 직접 조사 수행.",
          ru: "Проведение полевых измерений в NTT для сбора эталонных точек рыночной стоимости земли и проверки границ."
        }
      },
      {
        img: "images/gis/znt/data.webp",
        titles: {
          id: "Plotting Titik Sampel ZNT",
          en: "Cadastral Boundary & Base Data Plotting",
          ja: "地籍境界 & 座標プロット",
          ko: "지적 경계 및 좌표 플로팅",
          ru: "Нанесение координат и границы участков"
        },
        descs: {
          id: "Melakukan plotting titik sampel hasil survei dari Avenza Maps ke ArcGIS, kemudian mengolah dan menggabungkan data serta memberikan atribut pada setiap titik koordinat/sampel.",
          en: "Real-time field parcel boundary coordinate acquisition and synchronization into ArcGIS Desktop for geometric topology standardization and tabular validation.",
          ja: "幾何学的トポロジ編集のためのリアルタイム現地筆界座標取得とArcGIS Desktopへの同期。",
          ko: "기하학적 토폴로지 편집을 위한 실시간 현장 필지 경계 좌표 획득 및 ArcGIS Desktop 동기화.",
          ru: "Сбор координат границ участков в реальном времени и синхронизация в ArcGIS Desktop для топологического редактирования."
        }
      }
    ]
  },
  {
    id: "gis-3",
    category: "gis",
    date: "Juli - Des 2024",
    heroImg: "images/gis/komoditas/profil.webp",
    tools: ["ArcGIS", "QGIS", "Landsat 8", "Google Earth Pro"],
    titles: {
      id: "Updating Tutupan Lahan & Komoditas Unggulan",
      en: "National Land Cover & Commodity Updating",
      ja: "全国土地被覆 & 主要産物マッピング更新",
      ko: "국가 토지 피복 및 주요 작물 데이터 갱신",
      ru: "Обновление данных о растительности и сельхозугодьях"
    },
    excerpts: {
      id: "Delineasi dan updating tutupan lahan seluas 344.768 Ha serta pemetaan komoditas unggulan 1.562.418 Ha di Kalimantan Timur, Sumatera, dan Jawa.",
      en: "Delineation and updating of 344,768 ha of land cover and 1,562,418 ha of agricultural commodities across East Kalimantan, Sumatra, and Java.",
      ja: "東カリマンタン、スマトラ、ジャワにおける344,768ヘクタールの土地被覆および1,562,418ヘクタールの主要農産物の境界画定と更新。",
      ko: "동칼리만탄, 수마트라, 자바 전역에서 344,768ha의 토지 피복 및 1,562,418ha의 주요 농작물 구획 갱신 및 매핑.",
      ru: "Делимитация и обновление 344 768 га растительного покрова и 1 562 418 га сельхозугодий на Калимантане, Суматре и Яве."
    },
    categoryTags: {
      id: "PROJECT / TUTUPAN LAHAN",
      en: "PROJECT / LAND COVER UPDATING",
      ja: "PROJECT / 土地被覆更新",
      ko: "PROJECT / 토지 피복 갱신",
      ru: "PROJECT / КАРТЫ ПОКРОВА"
    },
    cardMetric: {
      value: "344K+",
      highlight: {
        id: "Hectares",
        en: "Hectares",
        ja: "Hectares",
        ko: "Hectares",
        ru: "Hectares"
      },
      label: {
        id: "Mapped & Standardized",
        en: "Mapped & Standardized",
        ja: "Mapped & Standardized",
        ko: "Mapped & Standardized",
        ru: "Mapped & Standardized"
      }
    },
    slides: [
      {
        img: "images/gis/komoditas/komoditasxtuplah.webp",
        titles: {
          id: "Updating Tutupan Lahan dan Komoditas Unggulan",
          en: "Regional Scale Land Cover Updating",
          ja: "広域土地被覆データ更新",
          ko: "광역 토지 피복 데이터 갱신",
          ru: "Региональное обновление данных о растительности"
        },
        descs: {
          id: "Persebaran tutupan lahan dan komoditas unggulan di sebagian wilayah Kalimantan Timur.",
          en: "Visual interpretation of Landsat 8 multispectral imagery updating 1,881 land cover polygons (344,768.05 ha) across East Kalimantan, Sumatra, and Java.",
          ja: "東カリマンタン、スマトラ、ジャワにわたる1,881の土地被覆ポリゴン（344,768.05 ha）を更新するためのLandsat 8マルチスペクトル画像の視覚的判読。",
          ko: "동칼리만탄, 수마트라, 자바 전역의 1,881개 토지 피복 폴리곤(344,768.05 ha)을 갱신하기 위한 Landsat 8 다중 스펙트럼 영상의 시각적 판독.",
          ru: "Визуальное дешифрирование снимков Landsat 8 с обновлением 1 881 полигона покрова (344 768,05 га)."
        }
          },
      {
        img: "images/gis/komoditas/tuplah.webp",
        titles: {
          id: "Pemetaan Sebaran Tutupan Lahan",
          en: "Satellite Imagery & Land Cover Delineation",
          ja: "衛星画像 & 土地被覆境界画定",
          ko: "위성 영상 & 토지 피복 구획",
          ru: "Делимитация покрова по спутниковым снимкам"
        },
        descs: {
          id: "Delineasi dan klasifikasi sebaran tutupan lahan di sebagian wilayah Kalimantan Timur.",
          en: "Landsat 8 band composite integration to accurately distinguish natural vegetation, water bodies, built-up areas, and agricultural estates.",
          ja: "自然植生、水域、市街地、農園を高精度で分離するためのLandsat 8バンド合成の統合。",
          ko: "자연 식생, 수역, 시가지, 농원을 정확하게 구분하기 위한 Landsat 8 밴드 합성 통합.",
          ru: "Использование спектральных комбинаций Landsat 8 для точного разделения растительности, вод, застройки и плантаций."
        }
      },
         {
        img: "images/gis/komoditas/tuplahdata.webp",
        titles: {
          id: "Jumlah Tutupan Lahan",
          en: "Satellite Imagery & Land Cover Delineation",
          ja: "衛星画像 & 土地被覆境界画定",
          ko: "위성 영상 & 토지 피복 구획",
          ru: "Делимитация покрова по спутниковым снимкам"
        },
        descs: {
          id: "Hasil updating tutupan lahan menunjukkan terdapat 13 kelas tutupan lahan dengan total luas 1.562.418,67 ha. Tutupan lahan didominasi oleh Primary Forest seluas 894.716,94 ha (57,27%), diikuti Secondary Forest seluas 354.647,21 ha (22,70%). Kondisi tersebut menunjukkan bahwa kawasan berhutan masih menjadi tutupan lahan utama di wilayah kajian, sementara Plantation Class mencakup 97.436,34 ha (6,24%).",
          en: "Landsat 8 band composite integration to accurately distinguish natural vegetation, water bodies, built-up areas, and agricultural estates.",
          ja: "自然植生、水域、市街地、農園を高精度で分離するためのLandsat 8バンド合成の統合。",
          ko: "자연 식생, 수역, 시가지, 농원을 정확하게 구분하기 위한 Landsat 8 밴드 합성 통합.",
          ru: "Использование спектральных комбинаций Landsat 8 для точного разделения растительности, вод, застройки и плантаций."
        }
      },
      {
        img: "images/gis/komoditas/komoditas.webp",
        titles: {
          id: "Pemetaan Sebaran Komoditas Unggulan",
          en: "Plantation & Commodity Vector Mapping",
          ja: "農園・主要産物ベクトルマッピング",
          ko: "농원 및 주요 작물 벡터 매핑",
          ru: "Векторное картирование плантаций и культур"
        },
        descs: {
          id: "Delineasi dan klasifikasi sebaran komoditas unggulan di sebagian wilayah Kalimantan Timur.",
          en: "Delineation and classification of 4,333 commodity polygons encompassing 1,562,418.67 ha validated with ground survey photos.",
          ja: "現地調査写真で検証された1,562,418.67ヘクタール（4,333ポリゴン）に及ぶ主要農産物ポリゴンの境界画定と分類。",
          ko: "현장 조사 사진으로 검증된 1,562,418.67ha(4,333개 폴리곤)에 달하는 주요 농작물 폴리곤 구획 및 분류.",
          ru: "Классификация 4 333 полигонов сельхозкультур площадью 1 562 418,67 га с наземной фотовалидацией."
        }
      },
      {
        img: "images/gis/komoditas/komoditasdata.webp",
        titles: {
          id: "Jumlah Komoditas Unggulan",
          en: "Spatial Database Architecture & Tabular Summary",
          ja: "空間データベース構造 & 属性集計",
          ko: "공간 데이터베이스 구조 및 속성 집계",
          ru: "Структура пространственной БД и сводные атрибуты"
        },
        descs: {
          id: "Hasil updating menunjukkan terdapat empat komoditas utama, yaitu pulpwood, rubber, oil palm plantation (company), dan oil palm plantation (smallholder), dengan total luas 344.768 ha. Perkebunan kelapa sawit perusahaan menjadi komoditas dengan luasan terbesar, yaitu 257.656 ha (74,73%), sedangkan kelapa sawit rakyat memiliki jumlah sebaran terbanyak dengan 1.630 titik. Hal ini menunjukkan bahwa kelapa sawit menjadi komoditas yang paling dominan dalam pemanfaatan lahan perkebunan.",
          en: "Field attribute standardization, clean geometry topology validation, and area tabular reporting complying with PT. Mitra Geotama Indonesia SOP.",
          ja: "PT. Mitra Geotama IndonesiaのSOPに準拠した属性標準化、クリーンジオメトリ検証、面積集計テーブルの作成。",
          ko: "PT. Mitra Geotama Indonesia의 표준 절차에 맞춘 필드 표준화, 클린 지오메트리 검증 및 면적 집계 보고서 작성.",
          ru: "Стандартизация атрибутов, топологическая очистка геометрии и сводные таблицы площадей по стандартам PT. MGI."
        }
      }
    ]
  },
  {
    id: "design-1",
    category: "design",
    date: "2024 - 2026",
    heroImg: "images/design/profil2.webp",
    tools: ["Adobe Illustrator", "Photoshop", "CorelDraw", "Figma"],
    titles: {
      id: "Morvethic",
      en: "Morvethic",
      ja: "Morvethic — ブランドアイデンティティ",
      ko: "Morvethic — 브랜드 아이덴티티",
      ru: "Morvethic — Фирменный стиль"
    },
    excerpts: {
      id: "Perancangan identitas visual Morvethic, brand fashion gothic modern dengan moto “The Final Journey That Never Ends.” Sistem visual dibangun melalui karakter yang tegas, gelap, dan kontemporer.",
      en: "Visual identity design for Morvethic, a modern gothic fashion brand built around the motto “The Final Journey That Never Ends.” The system uses a bold, dark, contemporary visual character.",
      ja: "「The Final Journey That Never Ends」をモットーに掲げるモダンゴシックファッションブランド、Morvethicのビジュアルアイデンティティ設計。力強く、ダークで、現代的なビジュアルを構築しています。",
      ko: "“The Final Journey That Never Ends”를 모토로 한 모던 고딕 패션 브랜드 Morvethic의 비주얼 아이덴티티 디자인입니다. 강렬하고 어두우며 현대적인 시각 언어를 구축했습니다.",
      ru: "Визуальный стиль Morvethic — современного готического модного бренда с девизом «The Final Journey That Never Ends». Система строится на смелом, тёмном и современном характере."
    },
    categoryTags: {
      id: "PROJECT / BRAND IDENTITY",
      en: "PROJECT / BRAND IDENTITY",
      ja: "PROJECT / ブランド設計",
      ko: "PROJECT / 브랜드 아이덴티티",
      ru: "PROJECT / БРЕНД-ДИЗАЙН"
    },
    slides: [
      {
        img: "images/design/morvethic/morvethic.webp",
        titles: {
          id: "Morvethic — Brand Identity System",
          en: "Morvethic Brand Identity System",
          ja: "Morvethic — ブランドアイデンティティシステム",
          ko: "Morvethic — 브랜드 아이덴티티 시스템",
          ru: "Morvethic — Система фирменного стиля"
        },
        descs: {
          id: "Sistem identitas Morvethic dirancang untuk membangun arah visual fashion gothic modern. Komposisi logo, tipografi, dan elemen grafis disusun sebagai bahasa merek yang konsisten dengan moto “The Final Journey That Never Ends.”",
          en: "The Morvethic identity system establishes a modern gothic fashion direction. Its logo, typography, and graphic elements form a consistent brand language around the motto “The Final Journey That Never Ends.”",
          ja: "ロゴ、タイポグラフィ、グラフィック要素を通してモダンゴシックファッションの方向性を築くアイデンティティシステム。ブランドのモットーに沿った一貫した言語として設計されています。",
          ko: "로고, 타이포그래피, 그래픽 요소를 통해 모던 고딕 패션의 방향성을 구축한 아이덴티티 시스템입니다. 브랜드의 모토에 맞는 일관된 언어로 설계되었습니다.",
          ru: "Система формирует современное готическое направление через логотип, типографику и графические элементы, создавая единый язык вокруг девиза бренда."
        }
      },
      {
        img: "images/design/morvethic/mockup.webp",
        titles: {
          id: "Morvethic — Mockup Application",
          en: "Product Mockup",
          ja: "Morvethic — アパレルアプリケーション",
          ko: "Morvethic — 어패럴 적용",
          ru: "Morvethic — Применение в одежде"
        },
        descs: {
          id: "Penerapan identitas Morvethic pada apparel, aksesori, dan materi pendukung merek. Visual yang gelap dan berstruktur menjaga karakter gothic modern tetap terbaca pada setiap media aplikasi.",
          en: "Application of the Morvethic identity across apparel, accessories, and supporting brand materials. A dark, structured visual direction preserves its modern gothic character across every format.",
          ja: "アパレル、アクセサリー、ブランド補助素材へのアイデンティティ展開。ダークで構造的なビジュアルにより、すべての媒体でモダンゴシックのキャラクターを保ちます。",
          ko: "어패럴, 액세서리, 브랜드 보조 소재에 적용한 아이덴티티입니다. 어둡고 구조적인 비주얼로 모든 매체에서 모던 고딕의 특성을 유지합니다.",
          ru: "Применение стиля в одежде, аксессуарах и сопутствующих материалах. Тёмная структурная визуальная система сохраняет современный готический характер на всех носителях."
        }
      },
      {
        img: "images/design/morvethic/mvt.webp",
        titles: {
          id: "Morvethic — Primary Logo Mark",
          en: "Typography & Logo Geometry Exploration",
          ja: "Morvethic — プライマリロゴマーク",
          ko: "Morvethic — 프라이머리 로고 마크",
          ru: "Morvethic — Основной логотип"
        },
        descs: {
          id: "Menghidupkan kembali estetika gothic ke dalam era kontemporer. Kombinasi simbol tombak sebagai instrumen keberanian menembus kegelapan dan kepakan sayap sebagai pendorong untuk terus melangkah, membentuk pilar identitas yang mempertegas filosofi perjalanan Morvethic melintasi zaman.",
          en: "The primary logo combines the letter M, wings, and a spear. The spear represents resolve as a weapon, while the wings symbolize movement and journey—together forming Morvethic’s symbol of an ongoing path.",
          ja: "文字M、翼、槍を組み合わせたロゴ。槍は武器としての意志を、翼は歩みと旅を象徴し、進み続けるMorvethicの道を表現します。",
          ko: "문자 M, 날개, 창을 결합한 로고입니다. 창은 무기로서의 결의를, 날개는 걸음과 여정을 상징하며 계속 나아가는 Morvethic의 길을 표현합니다.",
          ru: "Логотип объединяет букву M, крылья и копьё. Копьё выражает решимость как оружие, а крылья символизируют шаг и путь — знак непрерывного движения Morvethic."
        }
      }
    ]
  },
  {
    id: "design-2",
    category: "design",
    date: "2024 - 2026",
    heroImg: "images/design/galfik/profil.webp",
    tools: ["Adobe Illustrator", "Photoshop", "Figma", "CorelDraw"],
    titles: {
      id: "Galfiks Accessories",
      en: "Galfiks Accessories",
      ja: "Galfiks Accessories",
      ko: "Galfiks Accessories",
      ru: "Galfiks Accessories"
    },
    excerpts: {
      id: "Perancangan logo dan identitas visual Galfiks, toko aksesori pantai yang menghadirkan kerang, gelang batu dan kerang, kalung, tas, gantungan, serta berbagai cendera mata bernuansa pesisir.",
      en: "Logo and visual identity design for Galfiks, a beach-accessories shop offering shells, stone and shell bracelets, necklaces, bags, keychains, and other coastal keepsakes.",
      ja: "貝、石や貝のブレスレット、ネックレス、バッグ、キーホルダーなどを扱うビーチアクセサリーショップ、Galfiksのロゴとビジュアルアイデンティティデザイン。",
      ko: "조개, 스톤 및 조개 팔찌, 목걸이, 가방, 키링 등을 선보이는 비치 액세서리숍 Galfiks의 로고 및 비주얼 아이덴티티 디자인.",
      ru: "Дизайн логотипа и фирменного стиля Galfiks — магазина пляжных аксессуаров с ракушками, браслетами, ожерельями, сумками и брелоками."
    },
    categoryTags: {
      id: "PROJECT / BRAND IDENTITY",
      en: "PROJECT / BRAND IDENTITY",
      ja: "PROJECT / ブランド設計",
      ko: "PROJECT / 브랜드 아이덴티티",
      ru: "PROJECT / БРЕНД-ДИЗАЙН"
    },
    slides: [
      {
        img: "images/design/galfik/profil.webp",
        titles: {
          id: "Mockup Toko & Signage Eksterior",
          en: "Storefront Mockup & Exterior Signage",
          ja: "店舗モックアップ & 外観サイネージ",
          ko: "매장 목업 및 외관 사이니지",
          ru: "Мокап магазина и наружная вывеска"
        },
        descs: {
          id: "Mockup penerapan identitas Galfiks pada fasad toko. Signage utama dan blade sign memperlihatkan bagaimana logo hadir sebagai penanda ruang yang mudah dikenali bagi toko aksesori pantai.",
          en: "A mockup of Galfiks visual identity on the storefront. The primary signage and blade sign show how the logo becomes a recognizable marker for the beach-accessories shop.",
          ja: "店舗ファサードにおけるGalfiksアイデンティティのモックアップ。メインサインとブレードサインが、ビーチアクセサリーショップの認識しやすい目印としてロゴを表現します。",
          ko: "매장 파사드에 적용한 Galfiks 아이덴티티 목업입니다. 메인 사인과 블레이드 사인은 로고를 비치 액세서리숍의 인지하기 쉬운 표식으로 보여줍니다.",
          ru: "Мокап фирменного стиля Galfiks на фасаде магазина. Главная вывеска и консольный знак делают логотип узнаваемым ориентиром пляжного магазина аксессуаров."
        }
      },
      {
        img: "images/design/galfik/gk2.webp",
        titles: {
          id: "Poster",
          en: "Brand Guidelines, Typography & Patterns",
          ja: "ブランドガイドライン、タイポグラフィ & パターン",
          ko: "브랜드 가이드ライン, 타이포그래피 & 패턴",
          ru: "Руководство по стилю, типографика и паттерны"
        },
        descs: {
          id: "Poster toko yang menerjemahkan karakter Galfiks ke dalam komunikasi promosi: ringan, elegan, dan dekat dengan suasana pesisir serta koleksi aksesori yang ditawarkan.",
          en: "A store poster translating the Galfiks character into promotional communication: light, elegant, and close to the coastal atmosphere and accessory collection.",
          ja: "セリフ体とスクリプト体のタイポグラフィ階層、カラーパレット（#0A2E50、#FFFFFF、#E1EBF5）、モノグラムロゴ、大理石およびリボンのシームレスパターンを含む包括的ガイドライン。",
          ko: "세리프 및 스크립트 타이포그래피 위계, 컬러 팔레트(#0A2E50, #FFFFFF, #E1EBF5), 모노그램 조합, 럭셔리 대리석 및 패키징 패턴을 규정한 브랜드 가이드라인.",
          ru: "Комплексное руководство по стилю: иерархия шрифтов, палитра цветов (#0A2E50, #FFFFFF, #E1EBF5), варианты логотипа и бесшовные упаковочные паттерны."
        }
      },
      {
        img: "images/design/galfik/gk3.webp",
        titles: {
          id: "Logo Galfiks — Kupu-Kupu, Bulan & Gelombang",
          en: "Primary Logomark & Monogram",
          ja: "プライマリロゴマーク & モノグラム",
          ko: "기본 로고마크 및 모노그램",
          ru: "Основной логотип и монограмма"
        },
        descs: {
          id: "Logo minimalis, simpel, dan elegan yang menggambarkan kupu-kupu sedang hinggap pada bulan atau gelombang. Bentuknya mencerminkan keindahan, nuansa pesisir, dan karakter Galfiks yang lembut.",
          en: "A minimal, simple, elegant logo depicting a butterfly resting on a moon or wave. It reflects beauty, a coastal mood, and the soft character of Galfiks.",
          ja: "洗練されたアクセサリーラインのために高級感と現代的な優雅さを表現した、ツインスターが輝く『GK』モノグラムのプライマリロゴマーク。",
          ko: "독점 액세서리 라인을 위해 고급스러움과 현대적인 우아함을 전하는 트윈 스타 악센트의 'GK' 모노그램 기본 로고마크 디자인.",
          ru: "Дизайн основного логотипа с монограммой «GK» и акцентом в виде сияющих звезд, отражающий роскошь и элегантность эксклюзивных аксессуаров."
        }
      }
    ]
  },
  {
    id: "photo-1",
    category: "photo",
    date: "2024 - 2026",
    heroImg: "images/fotografi/profil.webp",
    tools: ["Sony Alpha", "Lightroom Classic", "DJI Drone", "CPL Filter"],
    titles: {
      id: "Through My Lens & A World in Frames",
      en: "Landscape & Aerial Topography Series",
      ja: "風景 & 航空地形写真シリーズ",
      ko: "풍경 및 항공 지형 사진 시리즈",
      ru: "Серия пейзажной и аэросъемки рельефа"
    },
    excerpts: {
      id: "Dokumentasi visual lanskap pesisir laut, tebing karst, dan pegunungan Indonesia dengan komposisi pencahayaan natural yang memukau.",
      en: "Visual documentation of coastal seascapes, karst cliffs, and Indonesian mountains captured with natural lighting compositions.",
      ja: "自然の光の構図で捉えたインドネシアの海岸風景、カルスト崖、山脈の視覚的ドキュメンテーション。",
      ko: "자연 채광 구도로 담아낸 인도네시아 해안 풍경, 카르스트 절벽, 산맥의 시각적 기록.",
      ru: "Фотодокументация морских побережий, карстовых скал и горных массивов Индонезии."
    },
    categoryTags: {
      id: "PROJECT / FOTOGRAFI",
      en: "PROJECT / PHOTOGRAPHY",
      ja: "PROJECT / 写真",
      ko: "PROJECT / 사진",
      ru: "PROJECT / ФОТОГРАФИЯ"
    },
    slides: [
      {
        img: "images/fotografi/ocean/f1.webp",
        titles: {
          id: "Coastal Karst Cliffs & Ocean Topography",
          en: "Coastal Karst Cliffs & Ocean Topography",
          ja: "海岸カルスト崖 & 海洋地形",
          ko: "해안 카르스트 절벽 & 해양 지형",
          ru: "Прибрежные карстовые скалы и морской рельеф"
        },
        descs: {
          id: "Dokumentasi bentang alam pesisir dan tebing karst tropis Indonesia, menyoroti tekstur batuan geologi purba dan dinamika ombak laut biru.",
          en: "Visual exploration of tropical karst topography highlighting ancient geological textures and pristine turquoise waters.",
          ja: "太古の地質学的質感と原生的なターコイズブルーの海を強調した熱帯カルスト地形の視覚的探求。",
          ko: "고대 지질학적 질감과 청록색 바다를 강조한 열대 카르스트 지형의 시각적 탐색.",
          ru: "Визуальное исследование тропического карстового рельефа, подчеркивающее древнюю текстуру пород и океан."
        }
      }
    ]
  },
  {
    id: "video-1",
    category: "video",
    date: "2025",
    heroImg: "images/photo/Evenement Y3_octobre 2025.webp",
    tools: ["Premiere Pro", "CapCut", "Sony Alpha", "Color Grading"],
    titles: {
      id: "Dokumentasi Video & Cerita Visual",
      en: "Video Documentation & Visual Storytelling"
    },
    excerpts: {
      id: "Dokumentasi video dengan ritme edit, komposisi, dan pewarnaan yang membangun cerita visual yang kuat.",
      en: "Video documentation using editing rhythm, composition, and color grading to build a strong visual story."
    },
    categoryTags: {
      id: "PROJECT / VIDEOGRAFI",
      en: "PROJECT / VIDEOGRAPHY"
    },
    slides: [
      {
        img: "images/photo/Evenement Y3_octobre 2025.webp",
        titles: {
          id: "Video Dokumentasi Kreatif",
          en: "Creative Video Documentation"
        },
        descs: {
          id: "Pengembangan dokumentasi video dengan fokus pada pengambilan gambar, penyuntingan, dan warna untuk menyampaikan suasana secara sinematik.",
          en: "Video documentation developed through framing, editing, and color work to communicate atmosphere with a cinematic feel."
        }
      }
    ]
  },
  {
    id: "outfit-1",
    category: "outfit",
    date: "2025 - 2026",
    heroImg: "images/outfit/model2.webp",
    tools: ["Adobe Illustrator", "Photoshop", "Clo3D", "Tech Pack"],
    titles: {
      id: "Morvethic Apparel Collection",
      en: "Morvethic Apparel Collection"
    },
    excerpts: {
      id: "Eksplorasi desain apparel teknikal dengan garis kontur, fungsi outdoor, dan identitas visual Morvethic.",
      en: "Technical apparel exploration combining contour lines, outdoor function, and Morvethic visual identity."
    },
    categoryTags: {
      id: "PROJECT / DESAIN OUTFIT",
      en: "PROJECT / OUTFIT DESIGN"
    },
    slides: [
      {
        img: "images/outfit/model2.webp",
        titles: {
          id: "Morvethic Apparel",
          en: "Morvethic Apparel Concept"
        },
        descs: {
          id: "Apparel menjadi salah satu bagian dari perjalanan Morvethic yang tidak memiliki titik akhir. Setiap grafis dan elemen visual dikembangkan sebagai perpanjangan dari identitas brand, membawa gagasan tentang perjalanan, eksplorasi, dan pencarian ke dalam bentuk yang dapat dikenakan. Koleksi ini menjadi bagian dari proses Morvethic dalam terus membentuk dan mengembangkan bahasanya sendiri.",
          en: "An apparel concept featuring topographic contour graphics as its visual identity, paired with functional silhouettes for urban and outdoor activity."
        }
      },
      {
        img: "images/outfit/model3.webp",
        titles: {
          id: "Morvethic Apparel",
          en: "Collection Visual Direction"
        },
        descs: {
          id: "Apparel menjadi salah satu bagian dari perjalanan Morvethic yang tidak memiliki titik akhir. Setiap grafis dan elemen visual dikembangkan sebagai perpanjangan dari identitas brand, membawa gagasan tentang perjalanan, eksplorasi, dan pencarian ke dalam bentuk yang dapat dikenakan. Koleksi ini menjadi bagian dari proses Morvethic dalam terus membentuk dan mengembangkan bahasanya sendiri.",
          en: "Exploration of composition, material direction, and campaign visuals for the Morvethic apparel collection."
        }
      }
    ]
  }
];

// Certificates Data
const certsData = [
  {
    id: "cert-1",
    issuer: "Esri / Geospatial Competency",
    icon: "fa-solid fa-map-location-dot",
    titles: {
      id: "ArcGIS & Spatial Analyst Specialist",
      en: "ArcGIS & Spatial Analyst Specialist",
      ja: "ArcGIS Pro & 空間分析スペシャリスト",
      ko: "ArcGIS Pro & 공간 분석 전문가",
      ru: "Специалист по ArcGIS Pro и пространственному анализу"
    }
  },
  {
    id: "cert-2",
    issuer: "Spatial Planning",
    icon: "fa-solid fa-city",
    titles: {
      id: "Urban & Regional Planning",
      en: "Urban & Regional Planning",
      ja: "都市・地域計画",
      ko: "도시 및 지역 계획",
      ru: "Городское и региональное планирование"
    },
    images: [
      "images/sertifikat/pwk/Galih_5201511004_page-0001.webp",
      "images/sertifikat/pwk/5201511004-galih_page-0001.webp"
    ],
    items: [
      {
        tabLabel: "Data Engineering Professional",
        icon: "fa-solid fa-database",
        title: "Data Engineering Professional Certification",
        issuer: "RapidMiner (Altair Company)",
        img: "images/sertifikat/pwk/Galih_5201511004_page-0001.webp",
        status: "Kredensial Resmi / Terverifikasi",
        descs: {
          id: "Sertifikasi kompetensi profesional resmi dari RapidMiner (Altair) dalam bidang Data Engineering. Menguji keahlian pengolahan data, ekstraksi, integrasi multi-dataset tabular dan spasial, penyusunan pivot table, serta pembersihan data untuk persiapan pemodelan geospasial dan analisis perencanaan wilayah.",
          en: "Official professional certification from RapidMiner (Altair) in Data Engineering. Demonstrates expertise in data access, basic transformations, multi-dataset joining, pivot tables, and dataset preprocessing for spatial planning analysis."
        }
      },
      {
        tabLabel: "Machine Learning Professional",
        icon: "fa-solid fa-brain",
        title: "Machine Learning Professional Certification",
        issuer: "RapidMiner (Altair Company)",
        img: "images/sertifikat/pwk/5201511004-galih_page-0001.webp",
        status: "Kredensial Resmi / Terverifikasi",
        descs: {
          id: "Sertifikasi kompetensi profesional tingkat lanjut dari RapidMiner (Altair) dalam bidang Machine Learning. Menguji keahlian implementasi algoritma prediktif, klasifikasi, regresi, scoring model, validasi data hold-out, korelasi fitur penting, serta clustering spasial untuk mendukung perencanaan wilayah berbasis sains data.",
          en: "Advanced professional certification from RapidMiner (Altair) in Machine Learning. Validates skills in classification models, regression, model scoring, hold-out validation, spatial clustering, and feature importance for data-driven planning."
        }
      }
    ],
    status: {
      id: "Kredensial Resmi / Terverifikasi",
      en: "Official Credential / Verified"
    },
    descs: {
      id: "Sertifikasi profesional resmi dari RapidMiner (Altair) pada bidang Data Engineering dan Machine Learning, mendukung pemrosesan data analitik dan pemodelan cerdas dalam perencanaan wilayah.",
      en: "Official professional certifications from RapidMiner (Altair) in Data Engineering and Machine Learning, supporting data analytics and smart spatial planning."
    }
  },
  {
    id: "cert-3",
    issuer: "GIS Mapping Practice",
    icon: "fa-solid fa-draw-polygon",
    titles: {
      id: "Cartography & Spatial Data",
      en: "Cartography & Spatial Data",
      ja: "製図 & 空間データ",
      ko: "지도 제작 & 공간 데이터",
      ru: "Картография и пространственные данные"
    }
  },
  {
    id: "cert-4",
    issuer: "Creative Design Academy",
    icon: "fa-solid fa-palette",
    titles: {
      id: "Creative Suite & Graphic Design",
      en: "Graphic Design & Creative Suite Masterclass",
      ja: "グラフィックデザイン & クリエイティブマスタークラス",
      ko: "그래픽 디자인 & 크리에이티브 스위트 마스터클래스",
      ru: "Мастер-класс по графическому дизайну и Creative Suite"
    }
  }
];

// Collaboration Companies Data
const collaborationsData = [
  {
    id: "collab-geotama",
    name: "PT. Mitra Geotama Indonesia",
    logo: "images/perusahaan/mgi.webp",
    mapUrl: "https://maps.google.com/?q=PT+Mitra+Geotama+Indonesia+Yogyakarta",
    location: "D.I. Yogyakarta, Indonesia",
    documentation: [
      { img: "images/perusahaan/pengalaman/mgi/dokumentasi1.webp", caption: "Dokumentasi kerja tim spasial PT. Mitra Geotama Indonesia." },
      { img: "images/perusahaan/pengalaman/mgi/kerjapraktik-1.webp", caption: "Sertifikat Kerja Praktik PT. Mitra Geotama Indonesia (Juli–September 2024)." },
      { img: "images/perusahaan/pengalaman/mgi/magang-1.webp", caption: "Sertifikat Magang Mandiri PT. Mitra Geotama Indonesia (Oktober–Desember 2024)." }
    ],
    period: "Juli 2024 - Des 2024",
    tags: {
      id: "Perusahaan Konsultan Geospasial",
      en: "Geospatial & Surveying Consulting Firm",
      ja: "地理空間・測量コンサルティング企業",
      ko: "공간정보 및 측량 컨설팅 전문 기업",
      ru: "Консалтинговая компания в области ГИС и геодезии"
    },
    roles: {
      id: "Operator GIS (Internship)",
      en: "GIS Operator (Internship)",
      ja: "GISオペレーター (インターン)",
      ko: "GIS 오퍼레이터 (인턴)",
      ru: "ГИС-оператор (Стажировка)"
    },
    descs: {
      id: "Sebagai Operator GIS magang, saya memperbarui tutupan lahan dan komoditas unggulan dari citra Landsat 8 untuk Kalimantan Timur, Sumatera, dan Jawa. Pekerjaan mencakup interpretasi citra, digitasi, editing poligon, pengisian atribut, QC di QGIS, serta survei titik instalasi dan manhole IPAL di Yogyakarta.",
      en: "As a GIS Operator intern, I updated land-cover and commodity data from Landsat 8 imagery across East Kalimantan, Sumatra, and Java. The work covered digitising, polygon editing, attribute updates, QGIS quality control, and IPAL manhole surveys in Yogyakarta. East Kalimantan datasets included 1,881 land-cover areas (344,768.05 ha) and 4,333 commodity areas (1,562,418.67 ha).",
      ja: "インドネシア有数の地理空間測量およびGISコンサルティング企業。Landsat 8衛星画像に基づく大規模な土地被覆更新（344,768 ha）と主要産物マッピング（1,562,418 ha）、およびジョグジャカルタ市の下水処理施設マンホール網調査を担当。",
      ko: "인도네시아의 선도적인 공간정보 측량 및 GIS 컨설팅 기업. Landsat 8 영상을 활용한 광역 토지 피복 갱신(344,768 ha) 및 주요 작물 매핑(1,562,418 ha), 욕야카르타시 하수처리시설 맨홀 네트워크 현장 조사 수행.",
      ru: "Ведущая компания в сфере геодезии и ГИС в Индонезии. Совместные проекты: обновление карт покрова (344 768 га) и культур (1 562 418 га) по снимкам Landsat 8, а также съемка городской сети канализации в Джокьякарте."
    }
  },
  {
    id: "collab-kso",
    name: "KJSB Muchamad Masykur dan Rekan (KSO)",
    logo: "images/perusahaan/kso.webp",
    mapUrl: "https://maps.google.com/?q=Kementerian+Agraria+dan+Tata+Ruang+Badan+Pertanahan+Nasional+Jakarta",
    location: "Nusa Tenggara Timur, Indonesia",
    documentation: [
      { img: "images/perusahaan/pengalaman/kso/d1.webp", caption: "Survei lapangan dan plotting titik koordinat ZNT NTT." },
      { img: "images/perusahaan/pengalaman/kso/d2.webp", caption: "Koordinasi teknis tim surveyor pemetaan Zona Nilai Tanah." },
      { img: "images/perusahaan/pengalaman/kso/d3.webp", caption: "Verifikasi lapangan bersama tim ATR/BPN & KJSB Muchamad Masykur." }
    ],
    period: "Sep 2025 - Okt 2025",
    tags: {
      id: "Kantor Jasa Surveyor Berlisensi (KSO)",
      en: "Licensed Cadastral Surveyor Office (KSO)",
      ja: "認定測量士事務所 (KSO)",
      ko: "공인 지적 측량 사무소 (KSO)",
      ru: "Лицензированное бюро кадастровых инженеров (KSO)"
    },
    roles: {
      id: "Surveyor (Program ILASPP 2025)",
      en: "Field Surveyor (ILASPP 2025 Program)",
      ja: "現地測量士 (ILASPP 2025プログラム)",
      ko: "현장 측량사 (ILASPP 2025 프로그램)",
      ru: "Полевой геодезист (Программа ILASPP 2025)"
    },
    descs: {
      id: "Sebagai Surveyor Program ILASPP 2025, saya memetakan Zona Nilai Tanah (ZNT) untuk Kementerian ATR/BPN melalui KJSB Muchamad Masykur dan Rekan (KSO). Saya mengumpulkan koordinat bidang tanah dan melakukan plotting dengan Avenza Maps di 61 desa pada 6 kecamatan di Nusa Tenggara Timur, kemudian mengedit bidang dan atributnya di ArcGIS.",
      en: "As a Field Surveyor for the ILASPP 2025 programme, I mapped Land Value Zones (ZNT) for the Ministry of Agrarian Affairs and Spatial Planning through KJSB Muchamad Masykur (KSO). I collected parcel coordinates and plotted 61 villages across six districts in East Nusa Tenggara using Avenza Maps, then edited the survey data in ArcGIS.",
      ja: "国家戦略プログラムILASPP 2025において現地測量士として従事。東ヌサ・トゥンガラ州の6郡61村において筆界調査および土地評価ゾーン（ZNT）マッピングを実施。",
      ko: "국가 전략 프로그램 ILASPP 2025 현장 측량사로 참여하여 동누사텡가라 6개 구역 61개 마을의 필지 경계 조사 및 토지 가치 구역(ZNT) 매핑 수행.",
      ru: "Полевой геодезист в рамках национальной программы ILASPP 2025. Съемка границ земельных участков и картирование зон стоимости земли (ZNT) в 61 деревне провинции NTT."
    }
  },
  {
    id: "collab-uty",
    name: "Universitas Teknologi Yogyakarta",
    logo: "images/perusahaan/uty.webp",
    mapUrl: "https://maps.google.com/?q=Universitas+Teknologi+Yogyakarta+Kampus+1",
    location: "Sleman, D.I. Yogyakarta",
    documentation: [
      { img: "images/perusahaan/pengalaman/uty/d1.webp", caption: "Dokumentasi riset akademik dan analisis spasial PWK UTY." },
      { img: "images/perusahaan/pengalaman/uty/d2.webp", caption: "Sidang tugas akhir dan presentasi hasil pemodelan geospasial." },
      { img: "images/perusahaan/pengalaman/uty/d3.webp", caption: "Dokumentasi kelulusan Sarjana Perencanaan Wilayah & Kota UTY." }
    ],
    period: "2020 - 2025",
    tags: {
      id: "Institusi Pendidikan Tinggi & Riset",
      en: "Higher Education & Research Institution",
      ja: "高等教育 & 研究機関",
      ko: "고등 교육 및 연구 기관",
      ru: "Высшее учебное и исследовательское заведение"
    },
    roles: {
      id: "Sarjana Perencanaan Wilayah & Kota",
      en: "Bachelor of Urban & Regional Planning",
      ja: "都市・地域計画学士 (PWK)",
      ko: "도시 및 지역 계획 학사",
      ru: "Бакалавр городского и регионального планирования"
    },
    descs: {
      id: "Menempuh pendidikan Sarjana Perencanaan Wilayah dan Kota di Universitas Teknologi Yogyakarta pada 2020-2025 dengan IPK 3,66/4,00. Skripsi berjudul Analisis Tingkat Kerawanan Bencana Tsunami dan Mitigasi Bencana pada Kawasan Pesisir di Kecamatan Pangandaran memodelkan inundasi tsunami dengan metode Berryman (2006) menggunakan DEM, kemiringan lereng, garis pantai, penggunaan lahan, serta koefisien kekasaran permukaan. Kajian seluas 2.202,26 ha ini mengidentifikasi kerawanan tinggi seluas 1.391,88 ha (63%) dan menghasilkan peta serta rekomendasi mitigasi struktural dan non-struktural.",
      en: "Academic alma mater for Bachelor degree in Urban & Regional Planning, graduating with a 3.66/4.00 GPA. Research focused on spatial modeling of coastal tsunami vulnerability and disaster mitigation in Pangandaran based on Berryman (2006) method.",
      ja: "都市・地域計画学部学士課程（GPA 3.66/4.00）。研究テーマはBerryman（2006）手法に基づくパンガンダラン沿岸の津波脆弱性モデリングおよび空間防災計画。",
      ko: "도시 및 지역 계획 학사 과정(GPA 3.66/4.00 졸업). Berryman(2006) 모델을 기반으로 한 팡안다란 해안 쓰나미 취약성 모델링 및 공간 재난 완화 연구 수행.",
      ru: "Окончил бакалавриат по городскому планированию с GPA 3.66/4.00. Научная работа: пространственное моделирование защиты побережья от цунами по методу Берримана (2006)."
    }
  }
];
