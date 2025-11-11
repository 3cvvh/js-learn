var underpants = ["sans","toriel","asgore",""]
var angka = [1,2,3,4,5,6,7,8,9]
var underpants2 =  underpants.find(function(e){ //berbeda dengan filter find hanya mengembalikan 1 nilai yang di temukan terlebih dahulu
   return e == "sans"
})
var angka2 = angka.filter(function(i){ //filter angka yang lebih besar dari 2 akan dikembalikan dalam bentuk array
    return i > 2
})
console.log(angka2.join(" - "))
console.log(underpants2)