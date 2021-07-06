import Observer from "./observer"
export default class Subject <T> {
    observerList:Observer[] = [];

    public addObserver(observer:Observer): void{
        this.observerList.push(observer)        
    }

    public getObservers(): Observer[]{
       return this.observerList 
    }
}
