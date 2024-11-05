document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.createElement('input'); 
    phoneInput.setAttribute('type', 'text');
    phoneInput.setAttribute('id', 'phone');
    phoneInput.setAttribute('placeholder', 'Nomor HP');
    phoneInput.classList.add('form-control', 'mb-3');
    form.insertBefore(phoneInput, document.querySelector('.contact-method'));

    const messageInput = document.getElementById('message');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault(); 

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const message = messageInput.value.trim();

        if (!name || !email || !phone || !message) {
            alert('Semua field harus diisi.');
            return;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert('Format email tidak valid.');
            return;
        }

        const phonePattern = /^\d{10,15}$/;
        if (!phonePattern.test(phone)) {
            alert('Format nomor HP tidak valid.');
            return;
        }

        const whatsappNumber = '+6282388390359';
        const whatsappMessage = `Halo, saya ${name}.\n\nEmail: ${email}\nNomor HP: ${phone}\nPesan: ${message}`;
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, '_blank');
    });
});
