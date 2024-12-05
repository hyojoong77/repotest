// Simple JavaScript for the Contact Form
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    alert(`Thank you for reaching out, ${name}! We will contact you at ${email} soon.`);
});

