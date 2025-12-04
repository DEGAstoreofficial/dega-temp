document.querySelectorAll('[cusSlider]').forEach(slider => {
    const viewer = slider.querySelector('[cusSlider-viewer]');
    const slides = viewer.children;
    const pagination = slider.querySelector('[cusSlider-controller-pagination]');
    const prevButton = slider.querySelector('[cusSlider-controller-prev]');
    const nextButton = slider.querySelector('[cusSlider-controller-next]');

    // Create pagination indicators
    Array.from(slides).forEach((slide, index) => {
        const paginationItem = document.createElement('div');
        paginationItem.className = 'min-w-6 h-3 bg-white/15 rounded-sm cursor-pointer transition-all ease duration-[0.3s] hover:bg-white/25';
        paginationItem.addEventListener('click', () => {
            setActiveSlide(index);
            stopAutoSlideClick(); // Stop auto slide on pagination click
        });
        pagination.appendChild(paginationItem);
    });

    let currentIndex = 0;
    let autoSlideInterval;
    let autoSlideActive = true; // Track if auto slide is active

    function setActiveSlide(index) {
        // Hide all slides and reset pagination
        Array.from(slides).forEach((slide, i) => {
            if (i === index) {
                slide.classList.remove('hidden');
                slide.style.opacity = 0; // Start with opacity 0
                setTimeout(() => {
                    slide.style.opacity = 1; // Fade in to opacity 1
                }, 10); // Small delay to allow the opacity change to take effect
                updateBackgroundImage(slide); // Update background image for active slide
            } else {
                slide.style.opacity = 0; // Fade out other slides
                setTimeout(() => {
                    slide.classList.add('hidden'); // Hide after fading out
                }, 300); // Match this duration with the fade-out duration
            }
            pagination.children[i].classList.toggle('bg-LBlue', i === index);
            pagination.children[i].classList.toggle('bg-white/15', i !== index);
        });
        currentIndex = index;
    }

    function updateBackgroundImage(activeSlide) {
        const featuredImage = activeSlide.querySelector('[cusSliderFeaturedImage]');
        if (featuredImage) {
            const imageSrc = featuredImage.src;
            const backgroundImage = document.querySelector('[cusSliderFeaturedImageBG]');
            if (backgroundImage) {
                backgroundImage.src = imageSrc; // Set the background image source
            }
        }
    }

    function startAutoSlide() {
        if (autoSlideActive) {
            autoSlideInterval = setInterval(() => {
                const newIndex = (currentIndex + 1) % slides.length;
                setActiveSlide(newIndex);
            }, 5000); // Change slide every 5000 milliseconds (5 seconds)
        }
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    function stopAutoSlideClick() {
        stopAutoSlide();
        autoSlideActive = false; // Disable auto slide
    }

    function pausePlayAutoHover() {
        slider.addEventListener('mouseenter', stopAutoSlide);
        slider.addEventListener('mouseleave', startAutoSlide);
    }

    prevButton.addEventListener('click', () => {
        const newIndex = (currentIndex - 1 + slides.length) % slides.length;
        setActiveSlide(newIndex);
        stopAutoSlideClick(); // Stop auto slide on previous button click
    });

    nextButton.addEventListener('click', () => {
        const newIndex = (currentIndex + 1) % slides.length;
        setActiveSlide(newIndex);
        stopAutoSlideClick(); // Stop auto slide on next button click
    });

    // Start the automatic sliding
    startAutoSlide();

    // Initialize the first slide
    setActiveSlide(0);

    // Call the pausePlayAutoHover function to set up hover events
    pausePlayAutoHover();
});
