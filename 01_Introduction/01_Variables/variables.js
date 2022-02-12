// Chương 1: Biến và các kiểu dữ liệu thường gặp
// Bài 1: Biến (Variables)

// 1) Delcare variable: Khai báo biến
// * Khai báo biến với const và let (ES6): không hỗ trợ hoisting
// - const: dùng để khai báo hằng số hoặc các biến không thay đổi giá trị -> nếu cố ý thay đổi thì sẽ gây lỗi
// - let: dùng để khai báo biến có thể thay đổi được giá trị, không được khai báo biến cùng tên trong cùng 1 scope

// * Khai báo biến với var: có hỗ trợ hoisting, nếu khai báo biến cùng tên sẽ gán lại giá trị của biến trước;
// VD hoisting:
var a;
console.log(a); //Undefined
a = 10;
console.log(a); //10

// Bài 2: Các kiểu dữ liệu cơ bản
// * Data Types: Number, String, Boolean, Undefined
// * Để kiểm tra kiểu của biến ta dùng typeof -> console.log(typeof variable)
