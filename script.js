function uploadImages() {
    const imageInput = document.getElementById('imageUpload');
    const imagePreview = document.getElementById('image-preview');
    imagePreview.innerHTML = '';

    const files = imageInput.files;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            imagePreview.appendChild(img);
        };
        
        reader.readAsDataURL(file);
    }
}

function submitContact() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const contactResponse = document.getElementById('contact-response');
    contactResponse.innerHTML = `Thank you, ${name}. We will contact you at ${email} soon.`;

    // Clear the form
    document.getElementById('contact-form').reset();
}
