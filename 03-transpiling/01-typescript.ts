class Dog {
    public readonly name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public bark(): void {
        console.log(`${this.name} barks!`);
    }
}

const snoopy = new Dog("Snoopy");
snoopy.bark();

const addDog = <T extends {}>(obj: T) => {
    return {
        ...obj,
        dog: new Dog("Doggie!"),
    }
}

const someData = {
    cat: "bad",
    food: true,
};

const someDataAndDog = addDog(someData);

console.log(someDataAndDog.dog.name);
