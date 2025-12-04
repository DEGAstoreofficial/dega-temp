document.addEventListener('DOMContentLoaded', () => {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.style.position = 'absolute'; // Ensure the tooltip is positioned absolutely
    tooltip.style.margin = '0 5px'; // Add margin of 5px on the left and right
    document.body.appendChild(tooltip);

    const tooltipTargets = document.querySelectorAll('[cusToolTipContent]');

    tooltipTargets.forEach(target => {
        target.addEventListener('mouseenter', (event) => {
            const tooltipText = target.getAttribute('cusToolTipContent');
            const position = target.getAttribute('cusToolTip-p');

            // Set the inner HTML of the tooltip with the predefined structure
            tooltip.innerHTML = `
                <div class="relative w-full max-w-[500px]">
                  <div class="relative bg-gradient-to-tr from-LBlueDark to-LBlueLight p-[2px] rounded-sm overflow-hidden shadow-md z-[95]">
                      <div class="h-full w-full px-2 py-1 bg-softBlack rounded-sm">
                          <p class="text-white/75 text-sm text-center font-semibold">${tooltipText}</p>
                      </div>
                  </div>
                  <!-- <div class="absolute inset-0 flex flex-row justify-center items-center -m-[5px] z-[95]">
                    <div class="w-[10px] h-[10px] bg-LBlue rotate-[45deg] shadow-sm"></div>
                  </div> -->
                </div>
            `;

            // Reset tooltip classes
            tooltip.className = 'tooltip';

            // Set tooltip position
            const setTooltipPosition = () => {
                const rect = target.getBoundingClientRect();
                tooltip.style.display = 'block';

                const tooltipWidth = tooltip.offsetWidth;
                const screenWidth = window.innerWidth;

                let left, top;

                switch (position) {
                    case '-r':
                        left = rect.right + 5; // Adjust for spacing
                        top = rect.top + window.scrollY + (rect.height / 2) - (tooltip.offsetHeight / 2);
                        if (left + tooltipWidth > screenWidth) {
                            left = screenWidth - tooltipWidth - 10; // Move to the left if it goes off-screen (accounting for margin)
                        }
                        break;
                    case '-l':
                        left = rect.left - tooltipWidth - 5; // Adjust for spacing
                        top = rect.top + window.scrollY + (rect.height / 2) - (tooltip.offsetHeight / 2);
                        if (left < 0) {
                            left = 5; // Move to the right if it goes off-screen
                        }
                        break;
                    case '-t':
                        left = rect.left + window.scrollX + (rect.width / 2) - (tooltipWidth / 2);
                        top = rect.top + window.scrollY - tooltip.offsetHeight - 5; // Adjust for spacing
                        if (left < 0) {
                            left = 5; // Move to the right if it goes off-screen
                        } else if (left + tooltipWidth > screenWidth) {
                            left = screenWidth - tooltipWidth - 10; // Move to the left if it goes off-screen (accounting for margin)
                        }
                        break;
                    case '-b':
                        left = rect.left + window.scrollX + (rect.width / 2) - (tooltipWidth / 2);
                        top = rect.bottom + window.scrollY + 5; // Adjust for spacing
                        if (left < 0) {
                            left = 5; // Move to the right if it goes off-screen
                        } else if (left + tooltipWidth > screenWidth) {
                            left = screenWidth - tooltipWidth - 10; // Move to the left if it goes off-screen (accounting for margin)
                        }
                        break;
                }

                // Final adjustment to ensure no horizontal scroll
                if (left < 0) {
                    left = 5; // Ensure it doesn't go off the left edge
                } else if (left + tooltipWidth > screenWidth) {
                    left = screenWidth - tooltipWidth - 10; // Ensure it doesn't go off the right edge (accounting for margin)
                }

                tooltip.style.left = `${left}px`;
                tooltip.style.top = `${top}px`;
            };

            // Set initial position
            setTooltipPosition();

            // Show tooltip on mouse enter
            tooltip.style.display = 'block';

            // Remove tooltip on mouseleave
            target.addEventListener('mouseleave', () => {
                tooltip.style.display = 'none';
            });
        });
    });
});
