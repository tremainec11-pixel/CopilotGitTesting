// This is an empty JavaScript file ready for your code.
console.log("Hello, World!");
function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}
function displayError(elementId, message) {
    const element = document.getElementById(elementId);
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = message;
    element.parentNode.insertBefore(errorDiv, element.nextSibling);
}

function clearErrors() {
    const errors = document.querySelectorAll(".error-message");
    errors.forEach(error => error.remove());
}
function filterProjects(category) {
    const projects = document.querySelectorAll("[data-category]");
    projects.forEach(project => {
        if (category === "all" || project.getAttribute("data-category") === category) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}
function validateContactForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name) {
        alert("Please enter your name.");
        return false;
    }
    if (!email || !email.includes("@")) {
        alert("Please enter a valid email.");
        return false;
    }
    if (!message) {
        alert("Please enter a message.");
        return false;
    }
    return true;
}