function displayContent(contentType) {
    var contentTextarea = document.getElementById('contentTextarea');

    // Simple example messages based on content type
    switch (contentType) {
        case 'about':
            contentTextarea.value = 'Welcome to the About page!';
            break;
        case 'home':
            contentTextarea.value = 'You are on the Home page.';
            break;
        case 'login':
            contentTextarea.value = 'Please log in to access your account.';
            break;
        case 'courses':
            contentTextarea.value = 'Explore our available courses.';
            break;
        default:
            contentTextarea.value = 'Default message or custom handling for unrecognized content type.';
    }
}