document.addEventListener("DOMContentLoaded", function () {
    // Select all tab systems on the page
    const tabSystems = document.querySelectorAll('[tabSys]');

    tabSystems.forEach(tabSys => {
        const selectors = tabSys.querySelectorAll('[tabSys-Selector] > *');
        const contents = tabSys.querySelectorAll('[tabSys-Content] > *');

        // Define active and inactive classes
        const activeClasses = {
            selector: ['text-white', 'bg-gradient-to-tl', 'from-LBlue', 'to-LBlueLight', 'shadow-md'],
            content: []
        };
        const inactiveClasses = {
            selector: ['hover:bg-LBlueDark', 'text-white/50'],
            content: ['hidden']
        };

        // Initialize the tab system
        initializeTabs(selectors, contents, activeClasses, inactiveClasses);

        // Add click event listeners to each selector
        selectors.forEach((selector, index) => {
            selector.addEventListener('click', function () {
                activateTab(selectors, contents, index, activeClasses, inactiveClasses);
            });
        });
    });

    function initializeTabs(selectors, contents, activeClasses, inactiveClasses) {
        // Set all selectors to inactive
        selectors.forEach(selector => {
            toggleClasses(selector, inactiveClasses.selector, activeClasses.selector);
        });

        // Set all contents to inactive
        contents.forEach(content => {
            toggleClasses(content, inactiveClasses.content, []);
        });

        // Activate the first tab and content
        if (selectors.length > 0 && contents.length > 0) {
            toggleClasses(selectors[0], activeClasses.selector, inactiveClasses.selector);
            toggleClasses(contents[0], [], inactiveClasses.content);
        }
    }

    function activateTab(selectors, contents, index, activeClasses, inactiveClasses) {
        // Deactivate all selectors and contents
        selectors.forEach(selector => {
            toggleClasses(selector, inactiveClasses.selector, activeClasses.selector);
        });
        contents.forEach(content => {
            toggleClasses(content, inactiveClasses.content, []);
        });

        // Activate the clicked selector and corresponding content
        toggleClasses(selectors[index], activeClasses.selector, inactiveClasses.selector);
        toggleClasses(contents[index], [], inactiveClasses.content);
    }

    function toggleClasses(element, addClasses, removeClasses) {
        addClasses.forEach(cls => element.classList.add(cls));
        removeClasses.forEach(cls => element.classList.remove(cls));
    }
});
