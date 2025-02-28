document.addEventListener("DOMContentLoaded", function () {
    // GSAP Animations
    gsap.from(".navbar", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
    gsap.from(".left span", { duration: 1, x: -50, opacity: 0, stagger: 0.3, ease: "power2.out" });
    gsap.from(".right .login-form", { duration: 1, x: 50, opacity: 0, ease: "power2.out" });
    gsap.from(".section", { duration: 1, y: 50, opacity: 0, stagger: 0.2, ease: "power2.out" });

    // Login Validation
    document.getElementById("loginBtn").addEventListener("click", function (event) {
        event.preventDefault();
        
        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();
        let errorMessage = document.getElementById("errorMessage");

        if (username === "" || password === "") {
            errorMessage.textContent = "Username and password cannot be empty!";
            errorMessage.style.color = "red";
        } else {
            errorMessage.textContent = "Login Successful!";
            errorMessage.style.color = "green";

            // Simulate login delay
            setTimeout(() => {
                window.location.href = "dashboard.html"; // Redirect after login
            }, 1500);
        }
    });
});