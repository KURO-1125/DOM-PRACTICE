document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById("login_btn");
    const signupBtn = document.getElementById("signup_btn");
    const signUpPage = document.getElementById("signup");
    const logInPage = document.getElementById("login");

    // Sign-In Info
    const Username = document.getElementById("username");
    const Email = document.getElementById("email");
    const PassWord = document.getElementById("password");

    // Log-In Info
    const Email_Login = document.getElementById("email_login");
    const PassWord_Login = document.getElementById("password_login");

    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        signUpPage.style.display = 'none';
        logInPage.style.display = 'block';
    });

    signupBtn.addEventListener('click', (e) => {
        e.preventDefault();
        logInPage.style.display = 'none';
        signUpPage.style.display = 'block';
    });

    const signupForm = document.getElementById("signupForm");
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        localStorage.setItem("Username", Username.value);
        localStorage.setItem("Email", Email.value);
        localStorage.setItem("PassWord", PassWord.value);
        alert("Sign-Up Successful!");
        Username.value = '';
        Email.value = '';
        PassWord.value = '';
    });

    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const storedEmail = localStorage.getItem("Email");
        const storedPassword = localStorage.getItem("PassWord");
        if (Email_Login.value === storedEmail && PassWord_Login.value === storedPassword) {
            alert("Log-In Successful!");
            Email_Login.value = '';
            PassWord_Login.value = '';
        } else {
            alert("Invalid Email or Password");
        }
    });
});
