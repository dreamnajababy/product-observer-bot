import Observer from "./observer"
export default class Samsung extends Observer { 
    name:string = "Samsung"
    
    public update(){
        this.state = this.state === 0 ? 1 : 0
        console.log(this.state)
    }
}
