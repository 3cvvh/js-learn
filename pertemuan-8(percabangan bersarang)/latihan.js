var s = '';
for(var i = 10; i > 0; i--){
    for(var n = 0; n < i; n++){
    s += '*'
    }
    s += '\n'
}
for(var i = 0; i < 10; i++){
    for(var n = 0; n <= i; n++){
    s += '*'
    }
    s += '\n'
}
console.log(s)