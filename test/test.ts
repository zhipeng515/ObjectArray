import { ObjectArray } from "../src/ObjectArray"

class Person {
    name: string = "";
    age: number = 0;
    
    toString() {
        return "name(" + this.name + ") age(" + this.age + ")";
    }
}

let person: ObjectArray<Person> = new ObjectArray<Person>(10, Person);
let person5: ObjectArray<Person> = person.subarray(5);
person5.value().name = "zhang";
person5.value().age = 10;
person5.value(1).name = "wang";
person5.value(1).age = 20;
person5.seek(2);
person5.value().name = "zhao";
person5.value().age = 30;
console.log(person.toString());