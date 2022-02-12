// Bài tập 1: Write a function to transform a string to capitalize (Viết function chuyển đổi thành kiểu capitalize)
// Eg: capitalize('LOokiNG To BECoME a fRont-END wEb DeVeLopER?') -> Looking to become a front-end web developer?
let myStr = "LOokiNG To BECoME a fRont-END wEb DeVeLopER?";

function transformCapitalize(str) {
  if (str == "") return "Please input value";
  str = str.toLowerCase();
  str = str.replace(str.charAt(0), str.charAt(0).toUpperCase());
  return str;
}
console.log(transformCapitalize(myStr));

// Bài tập 2: Loại bỏ khoảng trống 2 bên, đưa tất cả về IN HOA, thay chữ `Developer D` thành chữ `Developer and Designer`, sau đó repeat 2 lần;
// Eg: "i Am Developer D" -> "I AM DEVELOPER AND DESIGNER. I AM DEVELOPER AND DESIGNER. "
function transformText(str) {
  str = str.trim().replace("Developer D", "Developer and Designer. ").toUpperCase().repeat(2);
  return str;
}
console.log(transformText("i Am Developer D"));
