let bintangnaik = '';    
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        bintangnaik += '* ';
        }
        bintangnaik += '\n';
    }
   
console.log(bintangnaik);

let bintangturun = '';
for (let i = 0; i < 5; i++) {
    for (let j = 5; j > i; j--) {
        bintangturun += '* ';
    }
    bintangturun += '\n';
}
console.log(bintangturun)

let array = [1,2,3,4,5,6]
let newArray = []

for(i in array){
    if(array[i] % 2 == 0){
        console.log('Genap')
        newArray.push('Genap');
    }else
        console.log(array[i])
        newArray.push(array[i]);
        
}
console.log(newArray);
