// Define a mapping of custom words to their respective classes for each affected element
const classMappings = {
    mobileNav: {
        '1': {
            classToAdd: 'absolute inset-0 h-full z-[90]', // Classes to add for mobileNav-1
            classToRemove: 'flex' // Class to remove for mobileNav-1
        },
        '2': {
            classToAdd: 'grow-[1] border-t border-white/10', // Classes to add for mobileNav-2
            classToRemove: 'hidden' // Class to remove for mobileNav-2
        },
        // Add more mappings for additional affected elements as needed
    },
};

// Function to toggle classes on affected elements
function toggleClasses(customWord, index) {
    const affectedElement = document.getElementById(`affectedSwap-${customWord}-${index}`);
    const classes = classMappings[customWord][index];

    if (affectedElement && classes) {
        const classesToAdd = classes.classToAdd.split(' ');
        const classesToRemove = classes.classToRemove.split(' ');

        // Check if the element currently has the class to remove
        const hasClassToRemove = classesToRemove.some(cls => affectedElement.classList.contains(cls));

        // If it has the class to remove, remove it and add the classes to add
        if (hasClassToRemove) {
            classesToRemove.forEach(cls => affectedElement.classList.remove(cls));
            classesToAdd.forEach(cls => affectedElement.classList.add(cls));
        } else {
            // If it doesn't have the class to remove, remove the classes to add
            classesToAdd.forEach(cls => affectedElement.classList.remove(cls));
            classesToRemove.forEach(cls => affectedElement.classList.add(cls));
        }
    }
}

// Function to handle click events
function setupClickHandlers() {
    const clickableElements = document.querySelectorAll('[id^="clickSwap-"]');

    clickableElements.forEach(element => {
        element.removeEventListener('click', handleClick); // Remove existing listener to avoid duplicates
        element.addEventListener('click', handleClick);
    });
}

// Click handler function
function handleClick() {
    const customWord = this.id.split('-')[1];
    // Toggle classes for each affected element
    const indices = Object.keys(classMappings[customWord]);
    indices.forEach(index => {
        toggleClasses(customWord, index);
    });
}

// Initialize the click handlers when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', setupClickHandlers);

// Use MutationObserver to watch for changes in the DOM
const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
        if (mutation.addedNodes.length) {
            setupClickHandlers(); // Re-setup click handlers for new elements
        }
    });
});

// Start observing the body for child node additions
observer.observe(document.body, { childList: true, subtree: true });
