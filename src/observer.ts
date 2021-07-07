enum STATE {
    UNAVAILABLE = 0,
    AVAILABLE = 1,
}

abstract class Observer {
    name:string = ""
    state:STATE = 0 

    abstract update():void
}

export default Observer
