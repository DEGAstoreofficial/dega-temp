// Add the event listener to the document
document.addEventListener('click', function(event) {
    // Check if the clicked element or any of its parents has the attribute 'toggleBodyScroll'
    const toggleElement = event.target.closest('[toggleBodyScroll]');

    if (toggleElement) {
        const firstDiv = document.body.querySelector('div'); // Select the first div child of body

        // Check if the first div exists
        if (firstDiv) {
            // Check the current overflow style of the first div
            if (firstDiv.style.overflow === 'hidden') {
                // If it's hidden, remove it
                firstDiv.style.overflow = '';
            } else {
                // If it's not hidden, set it to hidden
                firstDiv.style.overflow = 'hidden';
            }
        }
    }
});
