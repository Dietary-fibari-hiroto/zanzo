export function setUpFadeInWindowOnScroll(
    options:{
        scrollThreshold?:number;
        addClass? :string;
        attribute?:string;
    } = {}
){
  const {
    scrollThreshold = 100,
    addClass = "is-visible",
    attribute = "[window-scroll-fade]",
  } = options;

  let hasTriggerde = false;

  const handleScroll = () =>{
    const scrollY = window.scrollY || window.pageYOffset;
    const elements = document.querySelectorAll(attribute);
    if(scrollY >= scrollThreshold){
        if(!hasTriggerde){
            elements.forEach((el)=>{
                el.classList.add(addClass);
            })
            hasTriggerde = true;
        }
    }else{
        if(hasTriggerde){
            elements.forEach((el)=>{
                el.classList.remove(addClass);
            })
            hasTriggerde = false;
        }
    }
  }

  window.addEventListener("scroll",handleScroll);
  handleScroll();
  return ()=>{
    window.addEventListener("scroll",handleScroll);
  }
}