import {type menuDTO} from "../models"

const defaultMenuDTO: menuDTO = {
    showElementId:"header-menu",
    showElementDuration:0.3,

    currentDataName:"[data-menuopen]",
    currentDataDutation:0.3,
    showClassName:"show",

    buttonId:"menuButton",
    delay:300
}

export const menuOpenHook = (dto:menuDTO = defaultMenuDTO) =>{
    const button = document.getElementById(dto.buttonId) as HTMLButtonElement;
    const showElement = document.getElementById(dto.showElementId) as HTMLElement;
    const currentElements = document.querySelectorAll<HTMLElement>(dto.currentDataName);

    let isOpen:Boolean = false;

    if(!button || !showElement){
        console.log("メニューの開封がキャンセルされました。");
        return;
    }

    button.addEventListener('click',()=>{
        console.log("クリックされたよ。");
        if(isOpen) {
            if(!close()){
                console.log("open関数が失敗しました。")
                return;
            }
        }
        else{
            if(!open()){
                console.log("close関数が失敗しました。");
                return;
            }
        }
        isOpen = !isOpen;
    })
    
    const open = ():Boolean => {
        showElement.style.visibility='visible';
        showElement.style.opacity='1';

        currentElements.forEach((element,index)=>{
            setTimeout(()=>{
                element.classList.add(dto.showClassName);
            },dto.delay * index)
        })

        return true;
    }

    const close = ():Boolean => {
        currentElements.forEach((element,index)=>{
            setTimeout(()=>{
                element.classList.remove(dto.showClassName);
            },dto.delay * index)
        })

        setTimeout(()=>{
            showElement.style.opacity = '0';
            setTimeout(()=>{
                showElement.style.visibility='hidden';
            },dto.delay);
        },currentElements.length * dto.delay)
    
        return true;
    }
}