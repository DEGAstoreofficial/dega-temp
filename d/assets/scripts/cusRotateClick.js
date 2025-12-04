document.addEventListener('click', (event) => {
    const element = event.target.closest('[cusRotateClick]');
    if (element) {
        const firstChild = element.firstElementChild;
        if (firstChild) {
            firstChild.classList.toggle('rotate-[180deg]');
        }
    }
});
