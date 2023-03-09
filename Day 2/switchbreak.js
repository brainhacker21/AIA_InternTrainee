const kelamin = 'Laki'
console.log(kelamin === 'Laki' ? 'A': kelamin === 'Perempuan' ? 'B' : 'C')
switch (kelamin) {
    case 'Laki-laki':
    console.log('L')
         break;
        case 'Perempuan':
        console.log('P')
        break;
        default:
        console.log('tidak diketahui kelaminnya')
        break;}