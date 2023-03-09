function bintang1(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j <= i; j++) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(bintang1(5));

function bintang2(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = panjang; j > i; j--) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(bintang2(5));

function ganjilgenap(){
    let array = [1,2,3,4,5,6]
    let newArray = []

    for(i in array){
        if(array[i] % 2 == 0){
            newArray.push("Genap");
        }else
            newArray.push(array[i])
    }
    console.log(newArray);
}
ganjilgenap()