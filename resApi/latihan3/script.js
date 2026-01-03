let fetchData = (vids,endpoint,...params) => {
    let endpoints = `${endpoint}`
    endpoints  += params.map(e => {
       return  e
    }).join("&")
    console.log(endpoints)
fetch(endpoints)
.then(respone => respone.json())
.then(respone => {
 const snippet = respone.items[0].snippet
 const statistics = respone.items[0].statistics
 document.body.innerHTML = `<center>
 <img src="${snippet.thumbnails.default.url}"<br>
 <h1>title:${snippet.title}</h1>
 <h1>sub:${statistics.subscriberCount}</h1>
 <h1>view:${statistics.viewCount}</h1>
 <iframe src="https://i.ytimg.com/vi/EHfg_St4wdY/default.jpg" height="65" width="200"></iframe>
 </center>>`   
})
}
fetchData(() => {
    console.log("hello")
},"https://www.googleapis.com/youtube/v3/channels?","key=AIzaSyCoPCRkIXJwZhk1gRQkh87GWO20i3yzR9I","id=UCCa89YH7x58VDlhih74SY6A","part=snippet,statistics")