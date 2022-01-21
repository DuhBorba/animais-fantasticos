export default function initSmoothScroll(){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event){
        event.preventDefault();
        const href = event.target.getAttribute('href');
        let section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        // Forma alternativa

        // const topo = section.offsetTop;

        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth',
        // });

    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}
