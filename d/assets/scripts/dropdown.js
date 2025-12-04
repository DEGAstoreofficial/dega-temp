document.addEventListener('DOMContentLoaded', function() {
    const dropdownContainer = document.body; // or a more specific parent element

    dropdownContainer.addEventListener('click', (event) => {
        const button = event.target.closest('.dropdown-button');
        const inputField = event.target.closest('.dropdown-input'); // Check if the clicked element is the input field

        if (button) {
            const menu = button.nextElementSibling;
            menu.classList.toggle('hidden');
            event.stopPropagation(); // Prevent the click event from bubbling up
        } else if (!inputField) { // Only close dropdowns if the click is not on the input field
            // Close all dropdowns if clicking outside
            const dropdowns = document.querySelectorAll('.dropdown-menu');
            dropdowns.forEach(dropdown => {
                dropdown.classList.add('hidden');
            });
        }
    });

    // Handle input field behavior
    const dropdownInput = document.querySelector('.dropdown .dropdown-input');

    if (dropdownInput) {
        dropdownInput.addEventListener('focus', function() {
            // Add any specific behavior here
        });

        dropdownInput.addEventListener('input', function() {
            // Add any specific behavior for input change here
        });
    }
});
