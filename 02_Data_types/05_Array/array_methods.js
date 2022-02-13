// 5) Array (Mảng)
// Cách tạo mảng array
// const nameArray = ['value1', 'value2',... , 'valueN'];
// const nameArray = new Array('value1', 'value2',... , 'valueN')
console.log(["sony", "samsung", "toshiba", "oppo"]);
//(4) ['sony', 'samsung', 'toshiba', 'oppo']
console.log(new Array("sony", "samsung", "toshiba", "oppo"));
//(4) ['sony', 'samsung', 'toshiba', 'oppo']

// THAO TÁC CƠ BẢN VỚI ARRAY
// Đếm số lượng phần tử có trong mảng
// -> arr.length
console.log(["cam", "xoài", "bưởi"].length); // 3
// Mảng bắt đầu có index = 0, để truy xuất phần tử bất kỳ trong mảng ta dùng cú pháp
// -> arr[index] với index là vị trí của phần tử trong mảng
// trick để lấy phần tử cuối trong mảng ta dùng arr[arr.length -1]
console.log(["mercedes", "toyota", "vinfast"][1]); // toyota
// Thêm phần tử vào cuối mảng
let family = ["father", "mother", "sister"];
family.push("me");
console.log(family); //(4) ['father', 'mother', 'sister', 'me']
// Xóa phần tử cuối mảng
let family2 = ["father", "mother", "sister"];
family2.pop();
console.log(family2); // (2) ["father", "mother"];
// Thêm phần tử vào đầu mảng
let family3 = ["father", "mother", "sister"];
family3.unshift("aunt");
console.log(family3); //(4) ['aunt','father', 'mother', 'sister']
// Xóa phần tử cuối mảng
let family4 = ["father", "mother", "sister"];
family4.shift();
console.log(family4); // (2)  ["father","mother"];

// THAO TÁC NÂNG CAO THÊM
// Đảo ngược các phần tử trong mảng
// -> arr.reverse()
console.log(["mercedes", "toyota", "vinfast"].reverse());
//(3) ['vinfast', 'toyota', 'mercedes']
// Nối các phần tử trong mảng thành chuỗi dựa theo kí tự truyền vào
// -> arr.join('character')
console.log(["this", "is", "the", "first", "time"].join("-"));
// this-is-the-first-time
console.log(["this", "is", "the", "first", "time"].join(" "));
//this is the first time
// Kiểm tra 1 phần tử nào đó có tồn tại trong mảng không
console.log(["nam", "minh", "tài"].includes("nam")); // true
console.log(["nam", "minh", "tài"].includes("tùng")); // false
// Sao chép mảng dựa theo vị trí truyền vào
// -> arr.slice(startIndex, lastIndex);
console.log(["dog", "cat", "fish", "lion"].slice());
// (4) ['dog', 'cat', 'fish', 'lion']
console.log(["dog", "cat", "fish", "lion"].slice(0));
// (4) ['dog', 'cat', 'fish', 'lion']
console.log(["dog", "cat", "fish", "lion"].slice(1, 3));
// (2) ['cat', 'fish']
console.log(["dog", "cat", "fish", "lion"].slice(-2));
// (2) ['fish', 'lion']
// Xóa hoặc thay thế phần tử bất kỳ trong mảng dựa vào startIndex và return về giá trị bị xóa
//-> splice(start, deleteCount, item1, item2,..., itemN): deleteCount là số lượng phần tử muốn xoá hoặc thay thế ,các item là các giá trị thay thế nếu có
const numbers1 = [1, 2, 3, 4, 5];
console.log(numbers1.splice()); // []
// numbers1 = []
const numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2.splice(1, 3)); // (3) [2, 3, 4]
// numbers2 = [1,5]
const numbers3 = [1, 2, 3, 4, 5, 6];
console.log(numbers3.splice(3, 3, 7, 8, 9)); //(3) [4, 5, 6]
// numbers3 [1, 2, 3, 7, 8, 9]
