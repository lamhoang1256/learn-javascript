// 2) Number (Kiểu số)
// VD: 12, 0 , 4.5, 3.99
console.log(typeof 12); // number
// Kiểm tra dữ liệu có thuộc kiểu Number hay ko
// -> Number.isFinite(value) -> trả về true nếu value có kiểu Number
// -> isNaN(value) -> Not a Number -> trả về false tức là thuộc kiểu số
console.log(Number.isFinite(123)); // true
console.log(Number.isFinite("123")); // false
console.log(isNaN("hello with string")); // true
console.log(isNaN(999)); // false
console.log(Number.isNaN(999)); // false
console.log(isNaN("999")); // = isNaN(999) -> false
console.log(isNaN("999 + 1")); // true
// Chuyển kiểu String sang kiểu Number
// -> Number("strNumber")
// -> nếu chuỗi cần chuyển là số nguyên -> parseInt("strNumber")
// -> nếu chuỗi cần chuyển là số thập phân -> parseFloat("strNumber")
console.log(Number("34.5")); // 64.5
console.log(Number("666")); // 666
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number(false)); // 0
console.log(Number("")); // 0
console.log(Number(NaN)); // NaN
console.log(parseInt("5")); // 5
console.log(parseInt("199")); // 199
console.log(parseFloat("4.99")); // 4.99
console.log(parseInt("495.5")); // 495.5
// Thao tác với Math
// Trị tuyệt đối
// -> Math.abs(num)
console.log(Math.abs(5)); // 5
console.log(Math.abs(-5)); // 5
// Làm tròn số
// -> làm tròn xuống (floor: sàn nhà) -> Math.floor(num)
// -> làm tròn lên (ceil: trần nhà) -> Math.ceil(num)
// -> làm tròn gần nhất -> Math.round(num)
// -> làm tròn xuống nếu là số dương, làm tròn lên nếu là số âm -> Math.trunc(num)
console.log(Math.floor(4.99)); // 4
console.log(Math.floor(4.01)); // 4
console.log(Math.ceil(4.01)); // 5
console.log(Math.ceil(4.99)); // 5
console.log(Math.round(4.499)); // 4
console.log(Math.round(4.5)); // 5 (dưới 4.5 làm tròn xuống từ 4.5 trở lên làm tròn lên)
console.log(Math.round(4.501)); // 5
console.log(Math.trunc(4.4)); // 4
console.log(Math.trunc(-4.4)); // -4
// Lấy bao nhiêu số thập phân sau dấu .
// -> num.toFixed(count)
console.log(parseFloat(9.79453).toFixed(2)); // 9.79
// Tìm số lớn nhất
// -> Math.max(num1, num2, ... , numN)
console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.max(4, 3, 2, 4.99)); // 4.99
// Tìm số nhỏ nhất
// -> Math.min(num1, num2, ... , numN)
console.log(Math.min(1, 2, 3, 4, 5)); // 1
console.log(Math.min(4, 3, 2, 4.99)); // 2
// Lập phương
// -> Math.pow(num, số mũ) = num ** số mũ
console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(3, 2)); // 9
// Căn bậc 2
// -> Math.sqrt(num)
console.log(Math.sqrt(100)); // 10
console.log(Math.sqrt(2)); //1.4142135623730951
// Random tạo số ngẫu nhiên
// -> Math.random() -> random number between 0-1 -> 0 -> 0.999999
console.log(Math.random());
