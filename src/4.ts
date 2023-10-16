class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  door = false;
  key?: Key;
  private tenants: Person[] = [];

  comeIn(person: Person) {
    if (this.door === true) {
      return this.tenants.push(person);
    } else {
      console.log("The door is closed. Person cannot enter.");
    }
  }

  public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (this.key && this.key.getSignature() === key.getSignature()) {
      this.door = true;
      console.log("Door opened.");
    } else {
      console.log("The key does not match. Door remains closed.");
    }
  }
}

const key = new Key();

const person = new Person(key);
const house = new MyHouse();

house.openDoor(person.getKey());

house.comeIn(person);

export {};
