//1.splice
//berguna untuk menyisipkan elemen pada array
var i = ["1","2","3"]
i.splice(1,2,"33",'12') //splice(mulai dari index berapa,ada yang mau di delete?,elemen array) //elemen yng disisipkan tidak mempunyai batas
console.log(i.join('-') )
//2.slice
//berguna untuk memisahkan array tertentu
var ikan = ["mujaer","emas",'hiu','octopus','gurita'] //saya ingin memisahkan octopus dan gurita dan menjadikan nya array sendiri
var tentakel = ikan.slice(3,5) //dimulai dari index octopus dan akhir nya index gurita +1 jadi 5
console.log(tentakel.join(' - '))
