import Subject from "./subject"
import IphoneObserver from "./iphone"
import SamsungObserver from "./samsung"
test('subject add 2 product observers.', () => {
    let subject = new Subject()

    subject.addObserver(new IphoneObserver())
    subject.addObserver(new SamsungObserver())
    const observers = subject.getObservers()

    expect(observers.length).toBe(2)
    expect(observers[0].name).toBe("Iphone")
    expect(observers[1].name).toBe("Samsung")
})
test('subject is notifying with 2 product observers and get updated immediately state.', () => {
    let subject = new Subject(new IphoneObserver(), new SamsungObserver())

    subject.notify()

    const observers = subject.getObservers()

    for(const o of observers){
        expect(o.state).toBe(1)
    }
})
