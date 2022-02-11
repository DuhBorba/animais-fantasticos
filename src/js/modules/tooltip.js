export default class Tooltip{
  constructor(tooltips){
    this.tooltips = document.querySelectorAll(tooltips);

    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onMouseOver(event){
    this.createTooltipBox(event.target);

    event.target.addEventListener('mousemove', this.onMouseMove);
    event.target.addEventListener('mouseleave', this.onMouseLeave);
  }

  onMouseMove(event){
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if(event.pageX + 240 > window.innerWidth){
      this.tooltipBox.style.left = `${event.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  onMouseLeave(event){
    this.tooltipBox.remove();
    event.target.removeEventListener('mouseleave', this.onMouseLeave);
    event.target.removeEventListener('mousemove', this.onMouseMove);
  }

  addTooltipEvent(){
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver)
    });
  }
  createTooltipBox(element){
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }
  init(){
    if(this.tooltips.length){
      this.addTooltipEvent();
    }
    return this;
  }
}
