function validasiForm(event) {
    event.preventDefault();

    var inputNama   = document.getElementById("nama").value.trim();
    var inputNIK    = document.getElementById("nik").value.trim();
    var inputTpt    = document.getElementById("tptLahir").value.trim();
    var inputTgl    = document.getElementById("tglLahir").value;
    var inputAlamat = document.getElementById("alamat").value.trim();
    var inputNoHp   = document.getElementById("noHp").value.trim();

    if (inputNama === "") {
        alert("Nama Lengkap tidak boleh kosong!");
        return false;
    }
    var polaNama = /^[a-zA-Z' ]+$/;
    if (!polaNama.test(inputNama)) {
        alert("Nama hanya boleh berisi huruf dan tanda petik satu (')");
        return false;
    }


    if (inputNIK === "") {
        alert("NIK tidak boleh kosong!");
        return false;
    }
    var polaNIK = /^\d{16}$/;
    if (!polaNIK.test(inputNIK)) {
        alert("NIK harus terdiri dari 16 digit angka!");
        return false;
    }

    if (inputTpt === "") {
        alert("Tempat Lahir tidak boleh kosong!");
        return false;
    }
    var polaTpt = /^[a-zA-Z\s]+$/;
    if (!polaTpt.test(inputTpt)) {
        alert("Tempat Lahir hanya boleh berisi huruf!");
        return false;
    }

    if (inputTgl === "") {
        alert("Tanggal Lahir tidak boleh kosong!");
        return false;
    }

    if (inputAlamat === "") {
        alert("Alamat tidak boleh kosong!");
        return false;
    }

    if (inputNoHp === "") {
        alert("No. HP tidak boleh kosong!");
        return false;
    }

    var pekerjaan = document.querySelectorAll('input[name="pekerjaan"]');
    var pekerjaanDipilih = false;
    for (var i = 0; i < pekerjaan.length; i++) {
        if (pekerjaan[i].checked) {
            pekerjaanDipilih = true;
            break;
        }
    }
    if (!pekerjaanDipilih) {
        alert("Pekerjaan harus dipilih!");
        return false;
    }

    alert("Pendaftaran berhasil dikirim! Selamat bergabung di Koperasi Charta Cempaka.");
    return true;
}
