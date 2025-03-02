// Cart Functionality
let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;

        // Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.style.marginLeft = "10px";
        removeBtn.onclick = function () {
            removeFromCart(index);
        };

        li.appendChild(removeBtn);
        cartItems.appendChild(li);
        total += item.price;
    });

    totalElement.textContent = total.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Form Validation for Contact Page
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("All fields are required!");
                return;
            }

            if (!validateEmail(email)) {
                alert("Please enter a valid email address!");
                return;
            }

            alert("Message sent successfully!");
            contactForm.reset();
        });
    }
});

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Login & Register Functionality
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let email = document.getElementById("login-email").value.trim();
            let password = document.getElementById("login-password").value.trim();

            if (email === "" || password === "") {
                alert("Please enter email and password!");
                return;
            }

            if (!validateEmail(email)) {
                alert("Invalid email format!");
                return;
            }

            alert("Login successful!");
            loginForm.reset();
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let name = document.getElementById("register-name").value.trim();
            let email = document.getElementById("register-email").value.trim();
            let password = document.getElementById("register-password").value.trim();

            if (name === "" || email === "" || password === "") {
                alert("All fields are required!");
                return;
            }

            if (!validateEmail(email)) {
                alert("Invalid email format!");
                return;
            }

            alert("Registration successful!");
            registerForm.reset();
        });
    }
});
