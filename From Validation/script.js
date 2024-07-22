function validateForm() {
    let isValid = true;

    // Clear previous errors
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    // Validate Name
    const name = document.getElementById("name").value;
    if (name.length < 3) {
        document.getElementById("nameError").innerText = "Name must be at least 3 characters long.";
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Please enter a valid email address.";
        isValid = false;
    }

    // Validate Password
    const password = document.getElementById("password").value;
    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters long.";
        isValid = false;
    }

}
validateForm();