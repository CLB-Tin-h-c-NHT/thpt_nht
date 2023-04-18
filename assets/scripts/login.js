const sT = document.querySelectorAll('.status');
var logged = false;
// Thêm sự kiện cho nút Đăng ký

function register(e){
    event.preventDefault();
    // document.getElementById('idBtnRegiter').addEventListener('click', function() {
        // Lấy giá trị của các trường input
        var name = document.getElementById('idName').value;
        var Class = document.getElementById('idClass').value;
        var userName = document.getElementById('idUserRegister').value;
        var password = document.getElementById('idPasswordRegister').value;
        var typeLog = "student";
        
        // Kiểm tra xem người dùng đã nhập đầy đủ thông tin chưa
        if (name && userName && password) {
            // Tạo đối tượng user
            var user = {
                name: name,
                Class : Class,
                userName: userName,
                password: password,
                typeLog: typeLog
            };
            // Lưu thông tin người dùng vào localStorage
            localStorage.setItem(userName, JSON.stringify(user));
        
            // Chuyển hướng người dùng đến trang chủ với tên tài khoản của người đó  
            location.reload();          
            // window.location.href = '/index.html';
            
        } else {
        // Hiển thị thông báo lỗi nếu người dùng không nhập đủ thông tin
        alert('Vui lòng nhập đầy đủ thông tin!');
        }
    // });
}

function login(e){
    event.preventDefault();
  // Thêm sự kiện cho nút Đăng nhập
  // document.getElementById('idBtnLogin').addEventListener('click', function() {
    // Lấy giá trị của các trường input
    var userName = document.getElementById('idUser').value;
    var password = document.getElementById('idPassword').value;
    // Kiểm tra xem người dùng đã nhập đầy đủ thông tin chưa
    if (userName && password) {
      // Lấy thông tin người dùng từ localStorage
      var user = JSON.parse(localStorage.getItem(userName));
      
      // Kiểm tra xem email và mật khẩu có đúng không
      if (user && user.password === password) {
        // Chuyển hướng người dùng đến trang chủ với tên tài khoản của người đó
        localStorage.setItem("logged", JSON.stringify(user));
        if (user.typeLog === "teacher") window.location.href = '/assets/html/teacher.html';
        else window.location.href = '/index.html';
    } else {
        // Hiển thị thông báo lỗi nếu thông tin đăng nhập không chính xác
        alert('Tên đăng nhập hoặc mật khẩu không chính xác!');
      }
    } else {
      // Hiển thị thông báo lỗi nếu người dùng không nhập đủ thông tin
      alert('Vui lòng nhập đầy đủ thông tin!');
    }
  // });
}

function Logout(e){
  event.preventDefault();
  localStorage.removeItem("logged");
  window.location.href = '/index.html';
}

var logged = JSON.parse(localStorage.getItem("logged"));

if (logged){
  sT[0].classList.add('active');
  sT[1].classList.remove('active');
}
