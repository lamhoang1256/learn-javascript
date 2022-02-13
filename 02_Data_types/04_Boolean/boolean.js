// Falsy values
// -> 0, "", null, undefined, NaN, false, The boolean false
// Truthy values
// -> tất cả các số trừ 0, tất cả chuỗi trừ "", The boolean true

// Undefined vs Null
// undefined là việc khai báo biến mà không gán giá trị
let firstName;
console.log(firstName); // undefined
// null là nghĩa là không có giá trị
let empty = null;
console.log(empty); //null
// So sánh == vs So sánh ===
// == so sánh 2 giá trị không quan tâm kiểu dữ liệu
console.log("1" == 1); // -> true
console.log("01" == 1); // -> Number("01") -> 01=1 true
console.log(true == "true"); // -> false
// === so sánh 2 giá trị đồng thời so sánh luôn kiểu dữ liệu
console.log("999" === 999); // false
console.log("null" === null); //false
// Ép kiểu khi dùng toán tử
console.log(10 + "1"); // 101
console.log(typeof +"1"); //number
// Toán tử &&
console.log(true && true); // true
console.log(false && true); // false
console.log(false && false); // false
// Toán tử ||
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false
// Toán tử so sánh
console.log(1 > 3); // false
console.log(6 >= 1); // true
console.log(0 >= 0); // true
console.log(0 < 5); // true
// Toán tử ! (không bằng, ngược lại kiểu giá trị boolean)
console.log(!true); // false
console.log(3 !== 3); // false
