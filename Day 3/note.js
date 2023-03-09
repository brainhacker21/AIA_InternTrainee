let a = 1 == "1"; //true
let b = 1 === "1"; //false

let c = !!1;

//buat variable yang berisi data jenis kelamin A kemudian bandingkan apabila data jenis kelamin tersebut A maka tampilkan A selain itu B

let x = "B";

function checkParameter(gender) {
  gender === "A"
    ? console.log("Jenis Kelamin A")
    : gender === "C"
    ? console.log("Jenis Kelamin C")
    : console.log("Jenis Kelamin B");
}
function checkB(gender) {
  {
    gender === "C" ?? console.log("Jenis Kelamin B");
  }
}

function checkBSwitchVersion(gender) {
  switch (gender) {
    case "A":
      console.log("Jenis Kelamin A");
      break;
    case "B":
      console.log("Jenis Kelamin B");
      break;
    case "C":
      console.log("Jenis Kelamin C");
      break;
  }
}
function tambah(a, ...b) {
  console.log(b);
}
// checkBSwitchVersion(x);
// tambah(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// checkParameter(x);
// checkB(x);

// //buat 3 function function 1 berisi base fetch menggunakan promise
// // function 2 berfungsi memanggil daftar pokemon di pokeApi.co
// // function 3 berguna untuk mengambil apapun yang dimau dari daftar pokemon resource list

setTimeout(() => {
  console.log("Hello World");
}, 6000);
let intervalCount = 1;
setInterval(() => {
  if (intervalCount <= 5) {
    console.log("Hi");
    intervalCount++;
  } else {
    clearInterval();
  }
}, 1000);
