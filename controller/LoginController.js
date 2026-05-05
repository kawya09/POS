function checkLogin() {
    const u = document.getElementById('login-user').value;
    const p = document.getElementById('login-pass').value;
    if(u === "admin" && p === "1234") {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-app').style.display = 'block';
        updateDashboard();
    } else {
        Swal.fire('Error', 'Invalid credentials', 'error');
    }
}

function logout() { location.reload(); }