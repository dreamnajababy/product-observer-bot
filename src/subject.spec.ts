import Subject from "./subject"
import AppleObserver from "./apple"
import SamsungObserver from "./samsung"
test('subject is observing 2 product', () => {
    // arrage
    let subject = new Subject()
    let appleObserver = new AppleObserver()
    let samsungObserver = new SamsungObserver()

    // act
    subject.addObserver(appleObserver)
    subject.addObserver(samsungObserver)
    const observers = subject.getObservers()
    
    // assert
    expect(observers.length).toBe(2)
    expect(observers[0].name).toBe("Apple")
    expect(observers[1].name).toBe("Samsung")
})
