class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        console.log(`${this.name} Barks!`);
    }
}

const dog = new Dog("Snoopy");
dog.bark();

class Pug extends Dog {
    bark() {
        super.bark();
        console.log("And has trouble breathing.");
    }
}

const pug = new Pug("Milo");
pug.bark();