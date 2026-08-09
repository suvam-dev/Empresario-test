import { useEffect } from "react";

export default function useScrollCircle(mounted) {
  useEffect(() => {
    if (!mounted) return;

    const scrollWrapper = document.querySelector('.scroll-circle-wrapper');
    if (!scrollWrapper) return;

    const stickyContainer = scrollWrapper.querySelector('.scroll-sticky-container');
    const circle = scrollWrapper.querySelector('.scroll-circle');
    const contentCards = scrollWrapper.querySelectorAll('.scroll-content-card');
    const numItems = scrollWrapper.querySelectorAll('.scroll-num-item');
    const graphicItems = scrollWrapper.querySelectorAll('.graphic-item');

    const totalItems = numItems.length;
    if (totalItems === 0 || !circle || !stickyContainer) return;

    const angleStep = totalItems > 4 ? 30 : 45;
    const wrapperHeight = totalItems > 4 ? '800vh' : '600vh';
    scrollWrapper.style.height = wrapperHeight;
    scrollWrapper.style.position = 'relative';

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

    // Smooth Physics-based Lerp Easing Variables
    let targetRotation = 0;
    let currentRotation = 0;
    let isAnimating = false;
    let rafId = null;
    const easing = 0.08; // Lower values = smoother/slower, higher values = sharper/faster

    const animate = () => {
        const diff = targetRotation - currentRotation;
        
        // Stop animation loop if we are close enough to the target rotation
        if (Math.abs(diff) < 0.01) {
            currentRotation = targetRotation;
            isAnimating = false;
        } else {
            currentRotation += diff * easing;
            isAnimating = true;
        }

        circle.style.transform = `rotate(${currentRotation}deg)`;

        numItems.forEach((item, idx) => {
            const angle = idx * angleStep;
            const span = item.querySelector('span');
            if (span) span.style.transform = `rotate(${-(currentRotation + angle)}deg)`;
        });

        if (isAnimating) {
            rafId = requestAnimationFrame(animate);
        }
    };

    const triggerAnimation = () => {
        if (!isAnimating) {
            isAnimating = true;
            rafId = requestAnimationFrame(animate);
        }
    };

    const handleScroll = () => {
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

        // 3. TARGET CALCULATION
        const indexFloat = progress * (totalItems - 1);
        let activeIndex = Math.round(indexFloat);

        targetRotation = -(indexFloat * angleStep);
        triggerAnimation();

        // 4. ACTIVE STATE TOGGLE (Instant for text sync)
        numItems.forEach((item, idx) => {
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
    };

    window.addEventListener('scroll', handleScroll);
    window.dispatchEvent(new Event('scroll'));

    return () => {
        window.removeEventListener('scroll', handleScroll);
        if (rafId) {
            cancelAnimationFrame(rafId);
        }
    };
  }, [mounted]);
}
