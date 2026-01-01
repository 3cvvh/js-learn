//destructure assigment adalah metode untuk memecah array/object menjadi sebuah variable

//array
// let [a,b,c,d,e = 12] = [1,2,3,1] //seperti ini //bisa dikasih nilai default kek php
//bisa juga hanya untuk mengambil salahsatu atau yang diningin kan
// let [a, , , d] = [1,2,3,1] //hanya mengambil 1
//sama kalo semisal gak tau nanti bakal ada berapa value di array bisa juga pake arg
// let [a,b, ...arg] = [1,2,3,4,5,6,7,8]
// console.log(arg[0]) //yang lebih dari 2 akan masuk lagi ke arguments dan dijadikan sebuah array
//rest parameter
// console.log(a,b)
//swap item(menukar value dari variabel)
// let a = 10;
// let b = 20;
// console.log(a,b);
// [a, b] = [b, a] //setiap mau menukar pastikan line code di atas nya pake ;
// console.log(a)
//bisa juga menangkap array dari return function dan memecah nya
// let coba = () => [1,2,3,4,5];
// [a,b,c,e,f] = coba()
// console.log(a,b,c,e,f)

//object assignment 
// let obj1 = {
//     id:1,
//     name:"AQIL",
//     email:"example@gmail.com",
//     password:"password",
// }
// const {id,name,email,password} = obj1 //harus sama dengan key yang ada di object
// console.log(id,name,email,password)
//assignment without declaration object
// const {id,nama,email} = {id: 1,nama: 'aqil',email: 'example@gmail.com'}
// console.log(nama)
//fetch only id 
let any = {
    id: 1,
    name: 'aqil'
}
// function getId({id}){
//     return id
// }
let getId = ({id,name}) => name
console.log(getId(any))

