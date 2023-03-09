const array = []
for(let i = 0; i <= 100; i++){
     array.push(i)}

const filterArray = array.filter(item => item % 2 == 0)
.map(item => item * 2)
.filter(item => item < 18)
.toString()
console.log(filterArray) 