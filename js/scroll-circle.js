
/* Generic Scroll Circle Logic for Tracks and Incentives */
document.addEventListener('DOMContentLoaded', function () {

    function initScrollCircle(wrapperSelector) {
        const wrappers = document.querySelectorAll(wrapperSelector);

        wrappers.forEach(scrollWrapper => {
            const stickyContainer = scrollWrapper.querySelector('.scroll-sticky-container');
            const circle = scrollWrapper.querySelector('.scroll-circle');
            const contentCards = scrollWrapper.querySelectorAll('.scroll-content-card');
            const numItems = scrollWrapper.querySelectorAll('.scroll-num-item');
            const graphicItems = scrollWrapper.querySelectorAll('.graphic-item');

            const totalItems = numItems.length;
            if (totalItems === 0 || !circle || !stickyContainer) return;

            // Calculate angle step to spread items evenly over the left semicircle (180 degrees)
            // e.g., if 4 items -> 3 gaps -> 180 / 3 = 60 degrees.
            // Wait, previously I used 45 degrees for 4 items (0, 45, 90, 135) taking up 135 degrees.
            // Let's stick to 45 for 4 items, and 30 for 6 items to keep it clean.
            const angleStep = totalItems > 4 ? 30 : 45;

            // GUARANTEE the wrapper height so it never collapses and scrolling works
            // 4 items = 600vh, 6 items = 800vh
            const wrapperHeight = totalItems > 4 ? '800vh' : '600vh';
            scrollWrapper.style.height = wrapperHeight;
            scrollWrapper.style.position = 'relative';

            // Use custom JS pinning to bypass all CSS overflow limitations
            stickyContainer.style.position = 'absolute';
            stickyContainer.style.top = '0px';
            stickyContainer.style.width = '100%';
            stickyContainer.style.height = '100vh';
            stickyContainer.style.left = '0';
            stickyContainer.style.zIndex = '9999';

            // Initial setup for numbers
            numItems.forEach((item, index) => {
                const angle = index * angleStep;
                item.style.transform = `translateY(-50%) rotate(${angle}deg)`;
                const span = item.querySelector('span');
                if (span) span.style.transform = `rotate(-${angle}deg)`;
            });

            // Force parents to not hide overflow
            let parent = scrollWrapper.parentElement;
            while (parent && parent !== document.body && parent !== document.documentElement) {
                const style = window.getComputedStyle(parent);
                if (style.overflow === 'hidden' || style.overflowX === 'hidden' || style.overflowY === 'hidden') {
                    parent.style.setProperty('overflow', 'visible', 'important');
                    parent.style.setProperty('overflow-x', 'visible', 'important');
                    parent.style.setProperty('overflow-y', 'visible', 'important');
                }
                parent = parent.parentElement;
            }
            document.body.style.setProperty('overflow-x', 'clip', 'important');

            window.addEventListener('scroll', () => {
                if (window.innerWidth < 768) {
                    stickyContainer.style.position = 'relative';
                    return;
                }

                const rect = scrollWrapper.getBoundingClientRect();
                const scrollRange = scrollWrapper.offsetHeight - window.innerHeight;

                // 1. PINNING LOGIC
                if (rect.top > 80) { // Offset trigger
                    stickyContainer.style.position = 'absolute';
                    stickyContainer.style.top = '0px';
                } else if (rect.top <= 80 && -rect.top < scrollRange) {
                    stickyContainer.style.position = 'fixed';
                    stickyContainer.style.top = '80px'; // Safe Navbar limit
                } else {
                    stickyContainer.style.position = 'absolute';
                    stickyContainer.style.top = scrollRange + 'px';
                }

                // 2. PROGRESS CALCULATION
                let progress = 0;
                if (rect.top <= 80) {
                    progress = Math.min(1, Math.max(0, -(rect.top - 80) / scrollRange));
                }

                // 3. ANIMATION LOGIC
                const indexFloat = progress * (totalItems - 1);
                let activeIndex = Math.round(indexFloat);

                const currentRotation = -(indexFloat * angleStep);
                circle.style.transform = `rotate(${currentRotation}deg)`;

                numItems.forEach((item, idx) => {
                    const angle = idx * angleStep;
                    const span = item.querySelector('span');
                    if (span) span.style.transform = `rotate(${-(currentRotation + angle)}deg)`;

                    if (idx === activeIndex) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });

                contentCards.forEach((card, idx) => {
                    if (idx === activeIndex) {
                        card.classList.add('active');
                    } else {
                        card.classList.remove('active');
                    }
                });

                graphicItems.forEach((graphic, idx) => {
                    if (idx === activeIndex) {
                        graphic.classList.add('active');
                    } else {
                        graphic.classList.remove('active');
                    }
                });
            });

            // Trigger scroll once to set initial state
            window.dispatchEvent(new Event('scroll'));
        });
    }

    // Initialize both sections by their generic class
    initScrollCircle('.scroll-circle-wrapper');
});
