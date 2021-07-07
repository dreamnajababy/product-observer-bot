import Observer from "./observer"
export default class Iphone extends Observer {
    name:string = "Iphone"

    public update(){
        this.state = this.state === 0 ? 1 : 0
        console.log(this.state)
    }
}
