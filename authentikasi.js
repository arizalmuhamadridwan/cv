// buat fungsi
//ambil nilai user
//ambil nilai password
// kita cek apakah username dan pw benar dengan yg kita kasih nilainya
// jika benar arahkan ke file index berikan alert berhasil login dan arahkan ke index
//jika pw dan us kosong
//maka berikan aler us dan pw kosong
//jika pw dan us salah
// tampilakn salah
function login () {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username == "admin" && password == "123456"){
        alert('Anda Berhasil Login');
        window.location ="index.html" 
        return false;
    }
    else if(username=="" || password==""){
        alert('Username atau Password tidak boleh Kosong')
        return false;
    }
    else{
        alert('Username atau Password Salah');
    }
}