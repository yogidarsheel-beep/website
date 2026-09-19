document.addEventListener('DOMContentLoaded', () => {
    // Standard FAQ items
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                // Toggle active class on the clicked item
                item.classList.toggle('active');
            });
        }
    });

    // Component FAQ items
    const faqItemsComp = document.querySelectorAll('.faq-item-comp');
    faqItemsComp.forEach(item => {
        const question = item.querySelector('.faq-q');
        if (question) {
            question.addEventListener('click', () => {
                // Toggle active class on the clicked item
                item.classList.toggle('active');
            });
        }
    });
});
