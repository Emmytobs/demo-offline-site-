// Register my service worker
if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('./sw_cached_pages.js')
            .then(reg => console.log('Service Worker: Registered'))
            .catch(err => console.log(`Service Worker: Error: ${err}`))
    })
}


// const fetchPage = (callback) => {
//     fetch('/index.html')
//     .then(res => {
//         callback(res);
//     })
// }

// fetchPage(async (response) => {
//     const cache = await caches.open('v2');
//     await cache.put('/me.html', response.clone());
    
//     const match = cache.keys()
//     console.log(match)
// })