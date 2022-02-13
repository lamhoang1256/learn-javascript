// ---------------- ES6 ----------------
// FOREACH: duyệt qua từng phần tử trong mảng theo thứ tự tăng dần và thực thi một hàm cho mỗi phần tử đó mà ko làm thay đổi kết cấu mảng
const fruits = ["orange", "coconut", "lemon", "tomato"];
const fruitedDice = [];
fruits.forEach((fruit) => fruitedDice.push("diced " + fruit));
console.log(fruitedDice);

// SORT: Sắp xếp các phần tử trong mảng theo chuẩn unicode-16
const random = [1, 99834, 104550, 5, 09];
console.log(random.sort());
// [1, 104550, 5, 9, 99834]
const random2 = random.sort(function (a, b) {
  if (a > b) return 1; // Sắp xếp theo tăng dần
  if (a < b) return -1; // Sắp xếp theo giảm dần
});
const random3 = random.sort((a, b) => (a > b ? 1 : -1));
// ternary operator: condition ? something : something else
console.log(random3);
// (5) [1, 5, 9, 99834, 104550]

// FIND: Tìm phần tử thỏa điều kiện trong mảng (nếu có nhiều hơn 1 phần tử thỏa điều kiện thì chỉ trả về phần tử đầu tiên) nếu tìm ko thấy trả về undefined
const keys = ["keyHouse", "keyCar", "keyRoom", "keyWindow"];
const findKeyYouNeed = keys.find((key) => key === "keyRoom");
console.log(findKeyYouNeed); // keyRoom
const findKeyYouNeed2 = keys.find((key) => key === "keyHouseWhite");
console.log(findKeyYouNeed2); // undefined

// MAP: Duyệt qua từng phần tử trong mảng và trả ra một mảng mới mà không thay đổi kết cấu mảng ban đầu
const numbers = ["1", "2", "3", "4", "5", "6"];
const newArrNumbers = numbers.map((number, index, arrOld) => number ** 2);
console.log(newArrNumbers); // (6) [1, 4, 9, 16, 25, 36]

// FIlTER :Duyệt qua từng phần tử trong mảng và trả về các phần tử thỏa mãn điều kiện
const prices = ["1000", "2500", "5003", "3456", "1235"];
const newArrPrices = prices.filter((price) => price > 2500);
console.log(newArrPrices); // (2) ['5003', '3456']

// SOME: Trả về true khi thoả 1 điều kiện và ngược lại trả vê false khi không thoả điều kiện nào cả
const columns = [3, 4, 1, 2, 5, 6];
const columns1 = columns.some((column) => column > 3); // true
const columns2 = columns.some((column) => column >= 6); // true
const columns3 = columns.some((column) => column > 9); // false

// EVERY: Chỉ trả về true khi tất cả điều kiện đều đúng, ngược lại chỉ cần 1 điều kiện sai là nó sẽ return false
const row = [3, 4, 1, 2, 5, 6];
const row1 = row.every((column) => column > 0); // true
const row2 = row.every((column) => column >= 6); // false

// REDUCER: Gom các phần tử trong mảng lại thành 1
// -> reduce((a, b) => {}, initialize value);
const listNumber = [0, 1, 2, 3, 4, 5];
const sumNumber = listNumber.reduce(function (previousValue, currentValue) {
  console.log(previousValue, currentValue);
  return previousValue + currentValue;
}, 0);
console.log(sumNumber); // 0+1+2+3+4+5 = 15
