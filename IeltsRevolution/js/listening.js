document.addEventListener('DOMContentLoaded', function() {
    // Get all year tabs and year content sections
    const yearTabs = document.querySelectorAll('.year-tab');
    const yearTests = document.querySelectorAll('.year-tests');
    
    // Function to switch between years
    function switchYear(selectedYear) {
        // Update active tab
        yearTabs.forEach(tab => {
            tab.classList.toggle('active-year', tab.dataset.year === selectedYear);
        });
        
        // Update visible content
        yearTests.forEach(test => {
            test.classList.toggle('active-year', test.dataset.year === selectedYear);
        });
    }
    
    // Add click event to year tabs
    yearTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            switchYear(this.dataset.year);
        });
    });
    
    // Initialize with first year active
    if (yearTabs.length > 0) {
        switchYear(yearTabs[0].dataset.year);
    }
    
    // Mobile menu toggle (if not already in main script.js)
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('show');
        });
    }
});