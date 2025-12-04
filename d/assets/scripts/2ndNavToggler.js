document.addEventListener('click', function(event) {
    if (event.target.closest('[nav2toggler]')) {
        toggleAffect1();
        toggleAffect2();
    }
});

function toggleAffect1() {
    const affect1 = document.querySelector('[nav2affect1]');
    if (affect1) {
        if (affect1.classList.contains('hidden')) {
            affect1.classList.remove('hidden');
            setTimeout(() => {
                affect1.style.opacity = '1';
            }, 1);
        } else {
            affect1.style.opacity = '0';
            setTimeout(() => {
                affect1.classList.add('hidden');
            }, 300);
        }
    }
}

function toggleAffect2() {
    const affect2 = document.querySelector('[nav2affect2]');
    if (affect2) {
        if (affect2.classList.contains('right-[50vw]')) {
            affect2.classList.remove('right-[50vw]', 'translate-x-1/2');
            affect2.classList.add('right-[0vw]', 'translate-x-0');
        } else {
            affect2.classList.remove('right-[0vw]', 'translate-x-0');
            affect2.classList.add('right-[50vw]', 'translate-x-1/2');
        }
    }
}
