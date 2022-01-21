export default function initAnimaScroll(){
    const sections = document.querySelectorAll('.js-scroll');

    if(sections.length){
        const windowMetade = window.innerHeight * 0.7;

        function animaScroll(){
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;

                if(sectionTop < windowMetade){
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            })
        }

        animaScroll();

        window.addEventListener('scroll', animaScroll);
    }
}
