import { useEffect } from 'react';

export const useFadeIn = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0,
      rootMargin: '0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, observerOptions);

    // Use setTimeout to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el) => {
        observer.observe(el);
        // Check if element is already in viewport
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};

