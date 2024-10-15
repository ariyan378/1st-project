class Person {
    var name: String
    var age: Int

    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }

    func introduce() {
        print("Hi, I'm \(name) and I'm \(age) years old.")
    }
}

let person = Person(name: "Alice", age: 30)
person.introduce()
