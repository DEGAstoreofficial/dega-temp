document.addEventListener("DOMContentLoaded", function () {
    const galleries = document.querySelectorAll('[cusGalleryBox]');

    galleries.forEach(gallery => {
        const viewer = gallery.querySelector('[cusGalleryBox-viewer]');
        const selector = gallery.querySelector('[cusGalleryBox-selector]');
        const items = selector.querySelectorAll('[cusgallerybox-item], [data-cusGalleryBox-videoItem]');

        // Set the first item as active on initial load
        if (items.length > 0) {
            const firstItem = items[0];
            if (firstItem.hasAttribute('data-cusGalleryBox-videoItem')) {
                // If the first item is a video, load it
                const videoSrc = firstItem.getAttribute('data-cusGalleryBox-videoItem');
                loadVideo(videoSrc);
            } else {
                // Otherwise, set the first item as active
                setActiveItem(firstItem);
            }
        }

        items.forEach(item => {
            item.addEventListener('click', function () {
                if (item.hasAttribute('cusgallerybox-item')) {
                    setActiveItem(item);
                } else if (item.hasAttribute('data-cusGalleryBox-videoItem')) {
                    setActiveItem(item); // Set active for video item as well
                    const videoSrc = item.getAttribute('data-cusGalleryBox-videoItem');
                    loadVideo(videoSrc);
                }
            });
        });

        function setActiveItem(activeItem) {
            items.forEach(item => {
                item.classList.remove('border-LBlue/75');
            });
            activeItem.classList.add('border-LBlue/75');

            const img = activeItem.querySelector('img');
            if (img) {
                const imgSrc = img.src;
                updateViewer(imgSrc);
            }
        }

        function updateViewer(imgSrc) {
            viewer.innerHTML = `<img expandedGalleryViewerImgCore src="${imgSrc}" class="w-full h-full absolute inset-0 object-contain">`;
        }

        function loadVideo(videoSrc) {
            if (videoSrc.includes('youtube.com')) {
                const urlParams = new URLSearchParams(new URL(videoSrc).search);
                const youtubeVideoID = urlParams.get('v');
                viewer.innerHTML = `<iframe style="width:100%;height:100%;" src="https://www.youtube.com/embed/${youtubeVideoID}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
            } else {
                viewer.innerHTML = `<div class="w-full h-full absolute inset-0">
                                      <video class="w-full h-full" controls src="${videoSrc}"></video>
                                   </div>`;
            }
        }
    });
});
