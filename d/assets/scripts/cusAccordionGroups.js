document.querySelectorAll('[accordionMaster]').forEach(master => {
    // Initialize the state on page load
    master.querySelectorAll('[accordionSlave]').forEach(slave => {
        const content = slave.querySelector('[accordionSlave-content]');
        const trigger = slave.querySelector('[accordionSlave-trigger]');
        const icon = trigger.querySelector('i');

        // Check if the content is hidden and set the rotation class accordingly
        if (content.classList.contains('hidden')) {
            icon.classList.add('rotate-[180deg]');
        } else {
            icon.classList.remove('rotate-[180deg]');
        }
    });

    master.querySelectorAll('[accordionSlave-trigger]').forEach(trigger => {
        trigger.addEventListener('click', () => {
            const content = trigger.closest('[accordionSlave]').querySelector('[accordionSlave-content]');
            const allContents = master.querySelectorAll('[accordionSlave-content]');
            const icon = trigger.querySelector('i'); // Assuming the icon is the child of the trigger

            // If the clicked content is hidden, show it
            if (content.classList.contains('hidden')) {
                // Hide all other visible contents and update their trigger icons
                allContents.forEach(c => {
                    if (c !== content) {
                        c.classList.add('hidden');
                        // Find the corresponding trigger and add the rotation class
                        const siblingTrigger = c.closest('[accordionSlave]').querySelector('[accordionSlave-trigger]');
                        const siblingIcon = siblingTrigger.querySelector('i');
                        if (siblingIcon) {
                            siblingIcon.classList.add('rotate-[180deg]');
                        }
                    }
                });
                // Show the clicked content
                content.classList.remove('hidden');
                // Remove rotation class from the current trigger icon
                icon.classList.remove('rotate-[180deg]');
            } else {
                // If the content is already visible, hide it
                content.classList.add('hidden');
                // Add rotation class to the trigger icon
                icon.classList.add('rotate-[180deg]');
            }

            // Update rotation classes for all triggers based on their content visibility
            master.querySelectorAll('[accordionSlave]').forEach(slave => {
                const slaveContent = slave.querySelector('[accordionSlave-content]');
                const slaveTrigger = slave.querySelector('[accordionSlave-trigger]');
                const slaveIcon = slaveTrigger.querySelector('i');

                if (slaveContent.classList.contains('hidden')) {
                    slaveIcon.classList.add('rotate-[180deg]');
                } else {
                    slaveIcon.classList.remove('rotate-[180deg]');
                }
            });
        });
    });
});
