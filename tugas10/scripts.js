function validateForm() {
    // Ambil nilai dari field input
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Regular expression untuk validasi email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Pengecekan apakah semua field sudah diisi
    if (!name) {
        alert("Please enter your name.");
        return false;
    }

    if (!email) {
        alert("Please enter your email.");
        return false;
    }

    // Pengecekan format email
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!message) {
        alert("Please enter your message.");
        return false;
    }

    // Jika semua validasi lulus
    alert("Form submitted successfully!");
    return true;
}

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navigation = document.getElementById('navigation');

    menuToggle.addEventListener('click', function() {
        navigation.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
});
