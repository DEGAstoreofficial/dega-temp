window.onload = function() {
    // Function to close all popups
    function closeAllPopups() {
        const popups = document.querySelectorAll('[popupID]');
        popups.forEach(popup => {
            popup.classList.remove('flex');
            popup.classList.add('hidden');
        });
        // Only remove overflow-hidden if no popups are open
        if (!isAnyPopupOpen()) {
            const firstDiv = document.body.querySelector('div'); // Select the first div child of body
            if (firstDiv) {
                firstDiv.classList.remove('overflow-hidden'); // Remove overflow-hidden class from the first div
            }
        }
    }

    // Function to check if any popup is currently open
    function isAnyPopupOpen() {
        return Array.from(document.querySelectorAll('[popupID]')).some(popup => popup.classList.contains('flex'));
    }

    // Function to open or toggle the popup
    function openPopup(popupID) {
        const popup = document.querySelector(`[popupID="${popupID}"]`);
        if (popup) {
            if (popup.classList.contains('flex')) {
                // If the popup is already open, close it
                closePopup(popupID);
            } else {
                // Close all other popups first
                closeAllPopups();
                popup.classList.remove('hidden');
                popup.classList.add('flex');

                // Check if the popup has the popupKeepScroll attribute
                if (!popup.hasAttribute('popupKeepScroll')) {
                    const firstDiv = document.body.querySelector('div'); // Select the first div child of body
                    if (firstDiv) {
                        firstDiv.classList.add('overflow-hidden'); // Add overflow-hidden class to the first div
                    }
                }
            }
        }
    }

    // Function to close the popup
    function closePopup(popupID) {
        const popup = document.querySelector(`[popupID="${popupID}"]`);
        if (popup) {
            popup.classList.remove('flex');
            popup.classList.add('hidden');

            // Check if the popup has the popupKeepScroll attribute
            if (!popup.hasAttribute('popupKeepScroll')) {
                // Only remove overflow-hidden if no other popups are open
                if (!isAnyPopupOpen()) {
                    const firstDiv = document.body.querySelector('div'); // Select the first div child of body
                    if (firstDiv) {
                        firstDiv.classList.remove('overflow-hidden'); // Remove overflow-hidden class from the first div
                    }
                }
            }
        }
    }

    // Event listener for buttons with popupAction
    document.querySelectorAll('[popupAction]').forEach(button => {
        button.addEventListener('click', function() {
            const action = this.getAttribute('popupAction');
            const match = action.match(/(open|close)(.+)/); // Match open/close and the rest of the string

            if (match) {
                const actionType = match[1]; // 'open' or 'close'
                const popupBaseID = match[2].trim(); // The part after 'open' or 'close'

                if (actionType === 'open') {
                    openPopup(popupBaseID);
                } else if (actionType === 'close') {
                    closePopup(popupBaseID);
                }
            }
        });
    });
};
