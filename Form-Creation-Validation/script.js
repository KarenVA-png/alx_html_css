// Wait until the full page is loaded
document.addEventListener("DOMContentLoaded", function () {
    // 1. Get the form and feedback box
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    // 2. When someone clicks "Register"
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Don't reload the page

        // 3. Get what the user typed (and remove spaces)
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // 4. Assume everything is okay
        let isValid = true;
        let messages = [];

        // 5. Check if username is too short
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // 6. Check if email has "@" and "."
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Email must include '@' and '.'.");
        }

        // 7. Check if password is strong enough
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // 8. Show the results
        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // green
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"; // red
        }
    });
});
