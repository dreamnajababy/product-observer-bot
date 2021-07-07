import Observer from "./observer"
export default class Subject {
    observerList:Observer[] = [];
    
    public constructor(...observers:Observer[]) {
        for(const o of observers){
            this.addObserver(o)
        }
    }

    public addObserver(observer:Observer): void{
        this.observerList.push(observer)        
    }

    public notify(){
        for (const o of this.observerList){
            o.update()
        }
    }

    public getObservers(): Observer[]{
       return this.observerList 
    }
}
