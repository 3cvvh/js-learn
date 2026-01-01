const formatRupiah = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0, // Menghilangkan desimal jika tidak ada
  maximumFractionDigits: 0, // Menghilangkan desimal jika tidak ada
});
let data = fetch('../json/pizza.json')
.then(respone => respone.json() )
.then(respone => {
    let menu = respone.menu
    document.querySelector('ul').innerHTML = menu.map((el) => {
        return `<li class="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
                    <img src="../img/pizza/${el.gambar}" alt="${el.nama}" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h2 class="text-xl font-semibold text-gray-800">${el.nama}</h2>
                        <p class="text-gray-600 text-sm mt-2">${el.deskripsi}</p>
                        <div class="mt-4 flex items-center justify-between">
                            <span class="text-lg font-bold text-green-700">${formatRupiah.format(el.harga)}</span>
                            <button class="inline-flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                                <i class="fas fa-shopping-cart"></i>
                                Add
                            </button>
                        </div>
                    </div>
                </li>`
    }).join(``)
})
const btnFilter = document.querySelector('header')
btnFilter.addEventListener("click",Element => {
if(Element.target.classList.contains('choice')){
let last = document.querySelectorAll('p')
last.forEach(c => {
    if(c.classList.contains('bg-gray-400')){
        c.classList.remove('bg-gray-400')
    }
})
Element.target.classList.add("bg-gray-400")
}})