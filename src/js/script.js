function initTabNav(){
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    tabContent[0].classList.add('active');
    
    if(tabContent.length && tabContent.length){
        
        function activeTab(index){
            tabContent.forEach((section) => {
                section.classList.remove('active');
            })
            tabContent[index].classList.add('active');
        }
        
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
        
    }
}

initTabNav();


function initAccordion(){
    const accordionList = document.querySelectorAll('.js-accordion dt');

    if(accordionList.length){
        accordionList[0].classList.add('active');
        accordionList[0].nextElementSibling.classList.add('active');
        
        
        function activeAccordion(){
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('active');
        }
        
        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}

initAccordion();


function initSmoothScroll(){
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

initSmoothScroll();
