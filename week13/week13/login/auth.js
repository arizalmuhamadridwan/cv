function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "admin" && password == "123456") {
        alert("Selamat anda berhasil login.")
        window.location = "../admin_backend/index.html"
        return false;
    } else if (username == "" || password == "") {
        alert("Username dan Password tidak boleh kosong!!!")
        return false;
    }
    else {
        alert('Username & password yang di input salah')
    }
    
}
