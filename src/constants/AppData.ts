type Item = {name:string,path:string};
type Group = {title:string,items:Array<Item>};

export const menuList = [
    {
        title:"On the site",
        items:[
            {name:"ホーム",path:"/"},
        ]
    },
    {
        title:"Other",
        items:[
            {name:"DAWN-IT向けポートフォリオ",path:"https://dawn-waiting.com"},
        ]
    }
] as Array<Group>;