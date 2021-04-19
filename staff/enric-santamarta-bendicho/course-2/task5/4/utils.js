const cachedFetch = (url, options) => {
    // Use the URL as the cache key to localStorage
    let cacheKey = url
    let cached = localStorage.getItem(cacheKey)
    if (cached !== null) {
      // it was in sessionStorage! Yay!
      let response = new Response(new Blob([cached]))
      return Promise.resolve(response)
    }
  
    return fetch(url, options).then(response => {
      // let's only store in cache if the content-type is 
      // JSON or something non-binary
      if (response.status === 200) {
        let ct = response.headers.get('Content-Type')
        if (ct && (ct.match(/application\/json/i) || ct.match(/text\//i))) {
          // There is a .json() instead of .text() but 
          // we're going to store it in sessionStorage as 
          // string anyway.
          // If we don't clone the response, it will be 
          // consumed by the time it's returned. This 
          // way we're being un-intrusive. 
          response.clone().text().then(content => {
            localStorage.setItem(cacheKey, content)
          })
        }
      }
      return response
    })
  }
  
  
  