

//bai2
function tinhGiaTri(x, y, z) {
    const giaTri = 3 * Math.pow(x, 2) - 5 * x * y + Math.pow(z, 4);
    return giaTri;
}
const x = 5;
const y = 1;
const z = 2;
const ketQua = tinhGiaTri(x, y, z);
console.log("Giá trị của biểu thức là: " + ketQua);

//bai3

let arr = [5, 1, 4, 2, 7];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//bai4

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log(sum)