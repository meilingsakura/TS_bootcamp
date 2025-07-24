abstract class Animal {
    protected name: string;
    private age: number;
  
    constructor (name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    // Abstract method with no implementation
    abstract makeSound();
  
    // Public method to get the name
    public getName(): string {
      return this.name;
    }

    public getAge(): number {
        return this.age;
    }
}

class Dog extends Animal {
    constructor (name:string, age:number){
    super(name, age);
    }
    makeSound(){
        return console.log ("Woof!");
    }
}


class Cat extends Animal {
    constructor (name:string, age:number){
        super(name, age);
        }
    makeSound(){
        return console.log ("Meow!");
    }
}


class AnimalTest {
    static executionAnimals () {

        const cat = new Cat ("Bigotes", 8);
        const dog = new Dog ("Toby", 10);
        console.log('The name of the cat is ' + cat.getName() + " and he's " + cat.getAge()) ;
        console.log('The name of the dog is ' + dog.getName()+ " and he's " + dog.getAge());

        
        try {
            dog.age; 
        } catch (error) {
            console.error("Error al acceder a la propiedad 'age':", error);
        }

        try {
            cat.age; 
        } catch (error) {
            console.error("Error al acceder a la propiedad 'age':", error);
        }
    }
}

AnimalTest.executionAnimals();