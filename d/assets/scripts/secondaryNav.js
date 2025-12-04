document.addEventListener("DOMContentLoaded", function () {
    // Select all secondaryNavWrapper elements
    const navWrappers = document.querySelectorAll('[secondaryNavWrapper]');

    navWrappers.forEach(navWrapper => {
        // Get all elements with secondaryNavSelector within the current wrapper
        const selectors = navWrapper.querySelectorAll('[secondaryNavSelector]');

        selectors.forEach(selector => {
            selector.addEventListener('click', function () {
                const target = this.getAttribute('secondaryNavSelector');
                const showElement = navWrapper.querySelector(`[secondaryNavShow="${target}"]`);

                if (showElement) {
                    // Check current opacity value
                    if (showElement.style.opacity === "0" || showElement.style.opacity === "") {
                        // Show the element after a delay
                        showElement.classList.remove('hidden'); // Remove hidden class to show the element
                        setTimeout(() => {
                            showElement.style.opacity = "1";
                            showElement.style.transform = "translateY(0px) scale(1)";
                        }, 1); // Delay before changing opacity and transform
                    } else {
                        // Hide the element
                        showElement.style.opacity = "0";
                        showElement.style.transform = "translateY(50px) scale(0.9)";
                        // Optionally add hidden class after transition
                        setTimeout(() => {
                            showElement.classList.add('hidden');
                        }, 300); // Match this duration with your transition duration
                    }
                }
            });
        });
    });
});
