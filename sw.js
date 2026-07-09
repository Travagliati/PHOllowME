const CACHE="phollowme-v1";
const ASSETS=["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png","./icon-180.png"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(ASSETS);}).then(function(){return self.skipWaiting();}));});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim());});
self.addEventListener("fetch",function(e){
  if(e.request.method!=="GET"){return;}
  e.respondWith(caches.match(e.request).then(function(r){
    return r || fetch(e.request).then(function(resp){
      var copy=resp.clone(); caches.open(CACHE).then(function(c){c.put(e.request,copy);}); return resp;
    }).catch(function(){ return caches.match("./index.html"); });
  }));
});