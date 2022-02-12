// 1) String (chuỗi)
// VD: "Hello world!", 'I am developer', `This is Javascript`
const name = "Nguyen Hoang Lam";
console.log(typeof name); // "string"
// Đếm số lượng chữ cái của 1 phần tử String
//-> str.length
console.log("Nguyen Hoang Lam".length);
// Vị trí của từng chữ cái trong phần tử String bắt đầu từ 0, length = 16 -> index từ 0 -15
// Truy cập 1 chữ cái bất kỳ trong 1 phần tử String
const characterL = "Nguyen Hoang Lam"[13];
console.log(characterL); // "L"
// Chuyển chuỗi thành mảng dựa theo kí tự truyền vào -> str.split('character')
console.log("Nguyen Hoang Lam".split(" ")); // ['Nguyen','Hoang','Lam']
console.log("this-is-first-time".split("-")); // ['this','is','first','time']
console.log("https://youtube.com".split("//")); // ['https:', 'youtube.com'node]
// Text transform
//-> str.toLowerCase(): chuyển tất cả kí tự về chữ thường
//-> str.toUpperCase(): chuyển tất cả kí tự về chữ in hoa
console.log("SHE IS BEAUTIFUL!".toLowerCase()); // she is beautiful!
console.log("i am a student".toUpperCase()); // I AM A STUDENT
// Kiểm tra từ khóa bắt đầu có trùng với String hay lưu ý so sánh cả kí tự in hoa với kí tự thường (tựa chức năng search gg)
// -> str.startsWith()
console.log("How to learn JS".startsWith("how to")); // false
console.log("How to learn JS".startsWith("How to")); // true
console.log("How to learn JS".startsWith("JS")); // false
// Kiểm tra từ khóa kết thúc có trùng với String hay lưu ý so sánh cả kí tự in hoa với kí tự thường
// -> str.endsWith()
console.log("Frontend Developer".endsWith("loper")); //true
console.log("Frontend Developer".endsWith("developer")); // false
console.log("Frontend Developer".endsWith("Developer")); // true
console.log("Frontend Developer".endsWith("Frontend")); // false
// Kiểm tra từ khóa truyền vào có tồn tại trong chuỗi hay không
// -> str.includes()
console.log("Javascript is easy!".includes("easy")); // true
console.log("Javascript is easy!".includes(" ")); // true
console.log("Javascript is easy!".includes("css")); // false
console.log("Javascript is easy!".includes("!")); // true
// Kiểm tra vị trí đầu tiên của từ khóa truyền vào nếu không tồn tại từ khóa đó sẽ trả về -1
// -> str.indexOf()
console.log("My name is Lam".indexOf("Lam")); // 11
console.log("My name is Lam".indexOf("y")); //
console.log("My name is Lam".indexOf("Hoang Lam")); // -1
console.log("My name is Lam".indexOf(" is")); // 7
// Kiểm tra vị trí cuối cùng của từ khóa truyền vào nếu không tồn tại từ khóa đó sẽ trả về -1
// -> str.lastIndexOf()
console.log("Welcome to Viet Nam".lastIndexOf("to")); //8
console.log("Welcome to Viet Nam".lastIndexOf("e")); //13
console.log("Welcome to Viet Nam".lastIndexOf("Japan")); //-1
// Cắt chuỗi dựa vào vị trí bắt đầu (và kết thúc nếu có) nếu truyền vào số âm thì cắt từ cuối, trick: nếu muốn copy 1 string dùng str.slice(0)
// -> str.slice()
console.log("My school is LTK".slice(3)); // school
console.log("My school is LTK".slice(0, 9)); // MY school
console.log("My school is LTK".slice(-3)); // LTK
console.log("My school is LTK".slice(0)); // My school is LTK
// Kiểm tra và loại bỏ khoảng trắng
// ở đầu chuỗi -> str.trimStart()
// ở đầu chuỗi -> str.trimEnd()
// ở đầu chuỗi và cuối chuỗi -> str.trimStart()
console.log("    He he he     ".trimStart()); // "He he he     "
console.log("    He he he     ".trimEnd()); // "    He he he"
console.log("    He he he     ".trim()); // "He he he"
// Lấy ra 1 kí tự chuỗi dựa vào index truyền vào (ko được truyền vào số âm)
// -> str.charAt()
console.log("I like cat".charAt("0")); //I
console.log("I like cat".charAt("5")); //e
// Lấy ra 1 phần tử của chuỗi
// -> str.substr(index, length)
// -> str.(index, lastIndex)
console.log("Do you love me?".substr(7, 8)); // love me?
console.log("Do you love me?".substring(7, 15)); // love me?
console.log("Do you love me?".substr(0, 15)); // Do you love me?
console.log("Do you love me?".substring(0, 15)); // Do you love me?
// Nối chuỗi
// -> str.concat(str2,str3,...,strN)
console.log("Landing".concat(" Page")); // Landing Page
console.log("Landing".concat(" ", "Page", " with HTML,CSS")); // Landing Page with HTML,CSS
// Thay thế chuỗi
// -> str.replace(strNeedChange,strNew)
console.log("ReactJS is useful".replace("useful", "not useful")); // ReactJS is not useful
console.log("js for newbie".replace("js for newbie", "js-for-newbie")); //js-for-newbie
// Lặp lại chuỗi
// -> str.repeat(count)
console.log("hello".repeat(3)); // hellohellohello
console.log("hi ".repeat(6)); // hi hi hi hi hi hi hi
