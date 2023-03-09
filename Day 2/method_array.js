// Push (Menambahkan item ke dalam index terakhir)
const temansebangku = ["River", "Rizal", "Stefani", "Benigi", "Farrel"]
temansebangku.push("Adam")
console.log(temansebangku)

// Pop (Mengeluarkan item ke dalam index terakhir)
temansebangku.pop()
console.log(temansebangku)

// Shift (Mengeluarkan item ke dalam index awal) kebalikan arah pop
temansebangku.shift()
console.log(temansebangku)

// Unshift ((Menambahkan item ke dalam index awal) kebalikan arah Push)
temansebangku.unshift("Patrick")
console.log(temansebangku)

// forEach (cara singkat melakukan perulangan didalam array dalam bentuk new line)
temansebangku.forEach(function(items){
    console.log(items)
})

// Filter (Menyaringkan nilai-nilai tertentu)
const filteritem = temansebangku.filter((temansebangku) => temansebangku == 'Rizal');
console.log(filteritem);

// Map (memanipulasi isi di dalam array tanpa mengubah array aslinya)
const mutatedItems = temansebangku.map(function(i){
    return 'Rizal' 
});
console.log(mutatedItems)

// Concat (menggabungkan beberapa array menjadi satu array)
const temanbaru = ["jesen","affan","bryan"]
const kelas = temansebangku.concat(temanbaru)
console.log(kelas)