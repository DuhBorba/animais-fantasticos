export default class initTabNav{
    constructor(menu, content){
        this.tabMenu = document.querySelectorAll(menu);
        this.tabContent = document.querySelectorAll(content);
        this.activeClass = 'active';
    }
    activeTab(index){
        this.tabContent.forEach((section) => {
            section.classList.remove(this.activeClass);
        })
        this.tabContent[index].classList.add(this.activeClass);
    }
    addTabNavEvent(){
        this.tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => this.activeTab(index));
        });
    }
    init(){
        if(this.tabContent.length && this.tabContent.length){
            this.activeTab(0);
            this.addTabNavEvent();
        }
    }
}
