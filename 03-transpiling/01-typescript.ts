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