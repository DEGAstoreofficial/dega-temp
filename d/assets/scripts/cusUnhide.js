document.addEventListener('click', function(event) {
    const actionElement = event.target.closest('[unhideTargetAction]');
    if (actionElement) {
        const targetWord = actionElement.getAttribute('unhideTargetAction');

        // Find the closest target element with the corresponding unhideTarget
        const targetElement = findClosestTarget(actionElement, targetWord);

        if (targetElement) {
            // Toggle the 'hidden' class
            targetElement.classList.toggle('hidden');
        }
    }
});

function findClosestTarget(element, targetWord) {
    // Check the element itself and its parents
    let currentElement = element;
    while (currentElement) {
        const target = currentElement.querySelector(`[unhideTarget="${targetWord}"]`);
        if (target) {
            return target;
        }
        currentElement = currentElement.parentElement;
    }

    // If not found, check siblings and their children
    currentElement = element;
    while (currentElement) {
        const siblings = Array.from(currentElement.parentElement.children);
        for (const sibling of siblings) {
            if (sibling !== currentElement) {
                const target = sibling.querySelector(`[unhideTarget="${targetWord}"]`);
                if (target) {
                    return target;
                }
            }
        }
        currentElement = currentElement.parentElement;
    }

    return null; // Return null if no target is found
}
