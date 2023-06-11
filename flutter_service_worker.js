'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ebe60533e874ac95d2129fe7bbe2d831",
"splash/img/light-2x.png": "b29f582f7264854307f9d9077b5f77b7",
"splash/img/dark-4x.png": "1e78168fbf8f4b53008ffb1483adb41d",
"splash/img/light-3x.png": "603e9c7cac767443256b6a33cefc5ad7",
"splash/img/dark-3x.png": "603e9c7cac767443256b6a33cefc5ad7",
"splash/img/light-4x.png": "1e78168fbf8f4b53008ffb1483adb41d",
"splash/img/dark-2x.png": "b29f582f7264854307f9d9077b5f77b7",
"splash/img/dark-1x.png": "fcfd3c2269f468386a859508a5f16341",
"splash/img/light-1x.png": "fcfd3c2269f468386a859508a5f16341",
"splash/style.css": "c25974a5ca58d3d7e325316acaf85d98",
"index.html": "be66bfa39cb4e03d69d955277f806338",
"/": "be66bfa39cb4e03d69d955277f806338",
"main.dart.js": "e3ebbff7ea626ef73f930408eeed4fe6",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f84ad3d55d033cc6b17463b44f72fc0c",
"assets/AssetManifest.json": "28d7145fe885e3e2aa0566515ce33516",
"assets/NOTICES": "10d912cf38062d0713cad92993bcd820",
"assets/FontManifest.json": "99b30ed5eeabb1e4303b04039f224f1f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "927a38c4f46624106e1c4e2979891c21",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/Arjun_Krishna.jpg": "1b8b29b567eece6386f089444795ee38",
"assets/assets/images/Draupadi.png": "ef0832c758b6368c416e26a59e6f6c89",
"assets/assets/images/Dhritarashtra.png": "4f6329d26e3e5094b2259f32cf01aaff",
"assets/assets/images/Book.png": "1196d632b807af764342a595a14178fc",
"assets/assets/images/Dronacharya.png": "21c6c0e0d757462c5670e5b70bab64ea",
"assets/assets/images/Arjun.png": "f70a1113b9080f3ee30c7c95834eb748",
"assets/assets/images/Bheem.png": "1cf313832a1d59b863f2b32c2c543933",
"assets/assets/images/Bhishma.png": "89e3f997fa86dc959a67830002a19ef3",
"assets/assets/images/translationHindi.png": "cc7931c7be008fe40315561e59493c78",
"assets/assets/images/translationEnglish.png": "e0c0a8292819aa6e161949229d26158f",
"assets/assets/images/MorPankh.jpg": "f7bd22e53625cc7211ff25f0a0761fc7",
"assets/assets/images/shrikrushnaArjun.jpg": "73d793c13d261fb15f37180db3b3aef1",
"assets/assets/images/mai_hoon_arjun_logo.png": "8dc0f68ac2f1bc4fe75c3e405feef794",
"assets/assets/images/Karn.png": "d801a21cf7de90d3fc1b50a1c70dbfd2",
"assets/assets/images/Duryodhan.png": "4e04ef4c723ccb20ff80f1f52bbfd82c",
"assets/assets/images/Shakuni.png": "e9c33fa7cee83d1ad2398463849970d7",
"assets/assets/images/Geeta.jfif": "fd760a132b1dc87e4cbdac71ad34ad5b",
"assets/assets/images/gridViewIcon.png": "b20118f83a37f032e02ca6154ebda483",
"assets/assets/images/ShriKrushnaArjun.jpeg": "96e846e0bc1c85ada93cef48cd37686f",
"assets/assets/lottie/eyeOpenClose.json": "ce3fc802c836833e9e8077bbbef7ae51",
"assets/assets/lottie/EmailVerified.json": "b8b9f3704e892ee85ac1b6897e9c6d91",
"assets/assets/lottie/loading.json": "833ed03370f440a4db376c6952d83d1a",
"assets/assets/lottie/mobile_tap.json": "8d4e799def70974eec9d6dd543ccea91",
"assets/assets/lottie/book_reading.json": "496e81ba8a05e10482c290d610f6ad98",
"assets/assets/lottie/verify_loading.json": "d66106f4104cfb641ba485b5d50b9c1e",
"assets/assets/lottie/empty_list.json": "c3d69c2b24500d6a95dcfe491809cf44",
"assets/assets/lottie/reading_a_book.json": "60d0f69d7e5cb7500f78729d864d0175",
"assets/assets/lottie/done.json": "b678358535074ceed1af4fa37500a5e5",
"assets/assets/lottie/signout_namaste.json": "1a1dfc8f726ff55596d461ad95f52003",
"assets/assets/lottie/HandWave.json": "83c174ed0f885a334310cdd3f32efa9b",
"assets/assets/fonts/Hind/Hind-Light.ttf": "33567bfb40d8eec31f8741db766e4e27",
"assets/assets/fonts/Hind/Hind-Bold.ttf": "786594cd27171ba61ac3ce39af3d60b1",
"assets/assets/fonts/Hind/Hind-Regular.ttf": "22e75ef63d50d11ec065e22a05284fdd",
"assets/assets/fonts/Hind/Hind-Medium.ttf": "9a351fddab28ea3df574284d38516b42",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
