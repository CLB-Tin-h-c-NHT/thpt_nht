const sT = document.querySelectorAll('.status');
<<<<<<< HEAD
=======
var logged = false;
>>>>>>> f9cbbd44693bdcbe2a84c7ffff2817eb7986667a
// Thêm sự kiện cho nút Đăng ký

function register(e){
    event.preventDefault();
<<<<<<< HEAD
    // document.getElementById('idBtnRegiter').addEventListener('click', function() {
=======
    document.getElementById('idBtnRegiter').addEventListener('click', function() {
>>>>>>> f9cbbd44693bdcbe2a84c7ffff2817eb7986667a
        // Lấy giá trị của các trường input
        var name = document.getElementById('idName').value;
        var userName = document.getElementById('idUserRegister').value;
        var password = document.getElementById('idPasswordRegister').value;
<<<<<<< HEAD
        var typeLog = "student";
        
=======

>>>>>>> f9cbbd44693bdcbe2a84c7ffff2817eb7986667a
        // Kiểm tra xem người dùng đã nhập đầy đủ thông tin chưa
        if (name && userName && password) {
            // Tạo đối tượng user
            var user = {
                name: name,
                userName: userName,
<<<<<<< HEAD
                password: password,
                typeLog: typeLog
=======
                password: password
>>>>>>> f9cbbd44693bdcbe2a84c7ffff2817eb7986667a
            };
            // Lưu thông tin người dùng vào localStorage
            localStorage.setItem(userName, JSON.stringify(user));
        
            // Chuyển hướng người dùng đến trang chủ với tên tài khoản của người đó            
<<<<<<< HEAD
            // window.location.href = '/index.html';
=======
            window.location.href = '/index.html';
>>>>>>> f9cbbd44693bdcbe2a84c7ffff2817eb7986667a
            
        } else {
        // Hiển thị thông báo lỗi nếu người dùng không nhập đủ thông tin
        alert('Vui lòng nhập đầy đủ thông tin!');
        }
<<<<<<< HEAD
    // });
=======
    });
>>>>>>> f9cbbd44693bdcbe2a84c7ffff2817eb7986667a
}

function login(e){
    event.preventDefault();
  // Thêm sự kiện cho nút Đăng nhập
<<<<<<< HEAD
  // document.getElementById('idBtnLogin').addEventListener('click', function() {
    // Lấy giá trị của các trường input
    var userName = document.getElementById('idUser').value;
    var password = document.getElementById('idPassword').value;
=======
  document.getElementById('idBtnLogin').addEventListener('click', function() {
    // Lấy giá trị của các trường input
    var userName = document.getElementById('idUser').value;
    var password = document.getElementById('idPassword').value;

>>>>>>> f9cbbd44693bdcbe2a84c7ffff2817eb7986667a
    // Kiểm tra xem người dùng đã nhập đầy đủ thông tin chưa
    if (userName && password) {
      // Lấy thông tin người dùng từ localStorage
      var user = JSON.parse(localStorage.getItem(userName));
<<<<<<< HEAD
      
      // Kiểm tra xem email và mật khẩu có đúng không
      if (user && user.password === password) {
        // Chuyển hướng người dùng đến trang chủ với tên tài khoản của người đó
        localStorage.setItem("logged", JSON.stringify(user));
        if (user.typeLog === "teacher") window.location.href = '/assets/html/teacher.html';
        else window.location.href = '/index.html';
    } else {
        // Hiển thị thông báo lỗi nếu thông tin đăng nhập không chính xác
        alert('Tên đăng nhập hoặc mật khẩu không chính xác!');
=======
  
      // Kiểm tra xem email và mật khẩu có đúng không
      if (user && user.password === password) {
        // Chuyển hướng người dùng đến trang chủ với tên tài khoản của người đó
        sT[0].classList.add('active');
        sT[1].classList.remove('active');
        window.location.href = '/index.html';
    } else {
        // Hiển thị thông báo lỗi nếu thông tin đăng nhập không chính xác
        alert('Email hoặc mật khẩu không chính xác!');
>>>>>>> f9cbbd44693bdcbe2a84c7ffff2817eb7986667a
      }
    } else {
      // Hiển thị thông báo lỗi nếu người dùng không nhập đủ thông tin
      alert('Vui lòng nhập đầy đủ thông tin!');
    }
<<<<<<< HEAD
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
=======
  });
}

>>>>>>> f9cbbd44693bdcbe2a84c7ffff2817eb7986667a
