// Dolacz (Join) page specific JavaScript

document.addEventListener('DOMContentLoaded', function () {
    // Form submission handling - RESTORED
    const joinForm = document.getElementById('joinForm');
    if (joinForm) {
        joinForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Dziękujemy za wypełnienie formularza! Skontaktujemy się z Tobą w najbliższym czasie.');
            this.reset();
        });
    }

    // FAQ accordion functionality REMOVED
    // const faqItems = document.querySelectorAll('.faq-item');
    // if (faqItems.length > 0) {
    //     faqItems.forEach(item => {
    //         const question = item.querySelector('.faq-question');
    //         question.addEventListener('click', () => {
    //             // Toggle active class on the clicked item
    //             item.classList.toggle('active');
    //
    //             // Close other items (optional - for accordion style)
    //             faqItems.forEach(otherItem => {
    //                 if (otherItem !== item && otherItem.classList.contains('active')) {
    //                     otherItem.classList.remove('active');
    //                 }
    //             });
    //         });
    //     });
    // }
}); 