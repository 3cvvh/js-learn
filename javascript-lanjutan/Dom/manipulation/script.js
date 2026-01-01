// // let judul = document.getElementById('judul')
// // judul.innerHTML = '<center><i>Muhammad Aqil Fatahilah</i></center>'
// // let section1 = document.getElementsByTagName('section')
// // section1[0].innerHTML = 'hello world'
// // section1[1].innerHTML = 'hellow 2'
// let judul = document.querySelector('section#a a')

// //manipulation element
// //fungsi berhubungan dengan class
// judul.classList.add('socialMedia') //menambahkan atribute class yang berisi social media
// judul.classList.add('aqil') //menambahkan value di class bernama aqil
// judul.classList.remove('aqil')// menghapus value aqil di class
// judul.classList.toggle('aqil')//menambahkan class aqil jika tidak ada
// judul.classList.toggle('aqil')// menghapus clss aqil jika ada
// let cek = judul.classList.contains('aqil') //akan berisi tipe data boolean, akan true jika class nya ada dan false jika tidak ada
// console.log(cek)
// judul.classList.replace('socialMedia','socialMediaAxyl') //akan mencarii class social media dan diganti dengan social media axyl
// //manipulation node
// //appends
// let elemen = document.createElement('p')
// elemen.appendChild(document.createTextNode('paragraf ke 4'))
// console.log(elemen)
// document.getElementById('a').appendChild(elemen)
// //insert
// let linew = document.createElement('li')

// let ul = document.querySelector('#b ul')
// let li = ul.querySelectorAll('li:nth-child(2)')[0]
// linew.appendChild(document.createTextNode('list 4'))
// console.log(linew)
// console.log(li)
// ul.insertBefore(linew,li)
// console.log(li)
// //hapus child
// const section1 = document.getElementById('a')
// section1.removeChild(document.querySelector('#a a'))
// let section2 = document.getElementById('b')
// let H1baru = document.createElement('h1')
// H1baru.append(document.createTextNode('judul'))
// section2.replaceChild(H1baru,section2.getElementsByTagName('p')[0])