document.addEventListener('DOMContentLoaded', () => {
    // Smooth hover effect for header links
    const links = document.querySelectorAll('header ul li a');
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'scale(1.1)';
        });
        link.addEventListener('mouseout', () => {
            link.style.transform = 'scale(1)';
        });
    });

    // Animate placeholder in the search input
    const searchInput = document.querySelector('main input');
    const placeholderTexts = [
        "Search for restaurants...",
        "Search for cuisines...",
        "Search for dishes..."
    ];
    let placeholderIndex = 0;

    setInterval(() => {
        searchInput.setAttribute('placeholder', placeholderTexts[placeholderIndex]);
        placeholderIndex = (placeholderIndex + 1) % placeholderTexts.length;
    }, 2000);

    // Scroll-to-top button (optional enhancement)
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.textContent = '↑';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #D32F2F;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 1.5rem;
        cursor: pointer;
        box-shadow: 0 4px 6px rgba(0,0,0,0.3);
        display: none;
    `;
    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
});
