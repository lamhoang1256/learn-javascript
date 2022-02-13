const now = new Date();
// new Date() -> In ra thời gian như ngày giờ hiện tại
console.log(now); // Sun Feb 13 2022 11:58:16 GMT+0700 (Giờ Đông Dương)
// lấy thời gian hiện tại đổi sang mili giây
// -> now.getTime()
console.log(now.getTime()); //1644728296903
// lấy mili giây đổi sang lại thời gian
// -> new Date(timestamp)
console.log(new Date(1644728296903)); //Sun Feb 13 2022 11:58:16 GMT+0700 (Giờ Đông Dương)

// Các hàm in ra thời gian
const birthday = new Date(2003, 9, 13);
// in ra năm
console.log(birthday.getFullYear()); //2003
// in ra tháng (0-11)
console.log(birthday.getMonth()); // 8
// in ra ngày (1-31)
console.log(birthday.getDate()); // 12
// in ra thứ trong tuần (0-6) 0 là chủ nhật, 6 là thứ 7
console.log(birthday.getDay()); // 1
// in ra giờ
console.log(birthday.getHours());
// in ra phút
console.log(birthday.getMinutes());
// in ra giây
console.log(birthday.getSeconds());
// in ra mili giây
console.log(birthday.getMilliseconds());
// in ra timestamp tính bằng mili giây
console.log(birthday.getTime()); //1065978000000

// Các hàm update date
console.log(`My birthday: ${birthday}`);
birthday.setFullYear(2004);
birthday.setMonth(11);
birthday.setDate(14);
birthday.setHours(12);
birthday.setMinutes(12);
birthday.setSeconds(12);
console.log(`My birthday after update : ${birthday}`);
