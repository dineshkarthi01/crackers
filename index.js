function validateLogin() {
    const username = document.getElementById(username).value;
    const password = document.getElementById(password).value;
    const errorText = document.getElementById(errorText);

    if (username === admin & password === 'password') {
        console.log("login successfully");
        errorText.style.display = 'none';
    } else {
        console.log("invalid login");
        errorText.style.display = 'block';
    }
}