import Subject from "./subject"
import IphoneObserver from "./iphone"
import SamsungObserver from "./samsung"


const subject = new Subject(new IphoneObserver(), new SamsungObserver())

setInterval(() => {
    subject.notify()
}, 3000)

