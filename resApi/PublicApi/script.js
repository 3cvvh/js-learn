const searchInp = document.getElementById("searchInput")
const moviesGrid = document.getElementById("moviesGrid")
console.log(searchInp)
searchInp.addEventListener('keyup', e => {
if(e.key == "Enter"){
    fetch(`http://www.omdbapi.com/?s=${searchInp.value}&apikey=9d0ed2de`)
    .then(respone => respone.json())
    .then(respone => {
        let search = respone.Search
        console.log(respone.Response)
        if(respone.Response == "False"){
            document.getElementById('moviesGrid').innerHTML = `<h1 style="text-center">${respone.Error}</h1>`,500
        }
        
        // search.forEach(e => {
        //     html += `<article class="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden dark:bg-gray-800 dark:text-gray-100">
        //         <img class="w-full h-48 object-cover bg-gray-100 dark:bg-gray-700" src="${e.Poster}" alt="poster">
        //         <div class="p-4">
        //             <p class="text-xs text-gray-500 mt-1 dark:text-gray-400">${e.Year}</p>
        //             <h3 class="text-sm font-semibold text-gray-900 dark:text-gray-100">${e.Title}</h3>
        //         </div>
        //     </article>`
        // })
        console.log(respone)
            moviesGrid.innerHTML = search.map(e => {
                 return `<article class="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden dark:bg-gray-800 dark:text-gray-100">
                     <img class="w-full h-48 object-cover bg-gray-100 dark:bg-gray-700" src="${e.Poster}" alt="poster">
                     <div class="p-4">
                         <h3 class="text-sm font-semibold text-gray-900 dark:text-gray-100">${e.Title}</h3>
                         <p class="text-xs text-gray-500 mt-1 dark:text-gray-400">${e.Year}</p>
                   <button data-id=${e.imdbID} id="openModalBtn" class="mt-2 px-3 py-1.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300" type="button">
                        Detail
                    </button>
                     </div>
                 </article>`
             }).join('')
             
    
    })
}
})
moviesGrid.addEventListener('click',key => {
    console.log(key.target)
if(key.target.id == 'openModalBtn'){
console.log(key.target.getAttribute('data-id'))
fetch(`http://www.omdbapi.com/?i=${key.target.getAttribute('data-id')}&apikey=9d0ed2de`)
.then(res => res.json())
.then(res => console.log(res))
}
})