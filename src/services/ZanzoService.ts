import { AppSetting } from "../constants/AppSetting";

export type ZanzoModeState = 'on' | 'off';

class ZanzoMode{
    private listeners = new Set<(mode:ZanzoModeState) => void>();
    constructor(){
        if(typeof localStorage === 'undefined') return;
        const savedMode = localStorage.getItem(AppSetting.localStoragePath) as ZanzoModeState | null;
        if(savedMode){
            document.documentElement.dataset[AppSetting.dataSetName] = savedMode;
        }else{
            document.documentElement.dataset[AppSetting.dataSetName] = 'on';
        }
    }

    get mode(): ZanzoModeState{
        const current = document.documentElement.dataset[AppSetting.dataSetName];
        return current === 'off' ? 'off' : 'on';
    }

    public set(mode:ZanzoModeState):void{
        document.documentElement.dataset[AppSetting.dataSetName] = mode;
        localStorage.setItem(AppSetting.localStoragePath,mode);
        this.listeners.forEach(fn => fn(mode));
    }

    toggle():void{
        console.log("ボタン投下");
        this.set(this.mode === 'on' ? 'off' : 'on');
        console.log(this.mode);
    }

    subscribe(callback:(mode:ZanzoModeState) => void): () => void{
        this.listeners.add(callback);
        return () => this.listeners.delete(callback);
    }
}

export const zanzoMode = new ZanzoMode();