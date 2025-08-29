alert('mulai')
var konfirm = confirm('ingi yang mana?');
if(konfirm == true){
    for(var i = 0; i < 4; i++){
        alert('ok ke:'+i)
    }
}else{
        for(var i = 0; i < 4; i++){
            alert('cancel ke:' + i)
        }
    }
    alert('selesai')