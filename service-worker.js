const cacheName = "sampleCache";
const cacheList = [
    './', './index.html', './manifest.json', '/android-chrome-512x512.png'
]

self.addEventListener("install",function(event){
    console.log("install");
    event.waitUntil(
        caches.open(cacheName)
            .then(c => {
                return c.addAll(cacheList);
            })
    )
})