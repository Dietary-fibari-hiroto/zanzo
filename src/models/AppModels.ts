export type isOpenModel = 'open' | 'close';

export type menuDTO = {
    showElementId:string;//表示する要素の一番親要素の名前(id)
    showElementDuration:number;//親要素の表示中時間

    currentDataName:string;//二番目以降に順番に表示する要素の名前(data)
    currentDataDutation:number;
    showClassName:string;

    buttonId:string;//トリガーとなるボタン要素のID

    delay:number;//遅らせ
}
