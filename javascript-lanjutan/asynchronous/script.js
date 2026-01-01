//konsep yang haru dimengerti sebelum masuk
//1.thread
/*thread adalah urutan eksekusi kode yang dapat dilakukan secara bebad
/independet satu sama lain
ada dua jenis thread yaitu: single theard dan multithread
single thread
bisa mengeksekusi task atau line code secara beruturan dari atas kebawah
multi thread
bisa menjalankan task/kode secara bersamaan bisa dibagi task nya ke thread yang berbeda beda
*/
//blocking
/*
blocking adalah ketika suatu task misal nya search kan lama tu maka harus nunggu dlu search nya baru bisa masuk ke next
task.
non blocking
non blocking bisa melewati task contoh nya console.log(1) setTimeout(() => {
    console.log
    (2)
    },5000)
    console.log(3) maka akan nge skip console.log 3 karna harus menunggu selama 5detik dan akan lansung ke console log ke tiga
*/ 
//synchronous dan asynchronous
/*
synchronous itu berjalan seperti biasa contoh nya task 1 dikerjakan terus task 2 terus task 3 berurutan
kalo asynchronous itu bisa mengerjakan task ke 2 walaupun task ke 1 belum selesai
asynchronous single thread kira kira seperti itu
kalo asynchronous multi thread bisa mengerjakan semua secara bersamaan
async singglee th disebut concurrency kalo multi parerelism
*/