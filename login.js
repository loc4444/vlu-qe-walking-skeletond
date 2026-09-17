// Hàm kiểm tra đăng nhập
function login(username, password) {
    return username === "admin" && password === "123";
}

// Xử lý form đăng nhập
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const message = document.getElementById("message");

        if (login(username, password)) {
            message.textContent = "Đăng nhập thành công!";
        } else {
            message.textContent = "Sai tên đăng nhập hoặc mật khẩu!";
        }
    });
}

// Cho phép Jest sử dụng hàm login
if (typeof module !== "undefined") {
    module.exports = login;
}
