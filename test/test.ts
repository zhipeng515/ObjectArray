import { ObjectArray } from "../src/ObjectArray"

class Person {
    name: string = "";
    age: number = 0;
    
    toString() {
        return "name(" + this.name + ") age(" + this.age + ")";
    }
}

let person: ObjectArray<Person> = new ObjectArray<Person>(10, Person); // Person * person = new Person[10];
person.value().name = "zhang";      // (*person).name = "zhang";
person.value().age = 10;            // (*person).age = 10;
person.seek(1);                     // person++;
person.value().name = "wang";       // (*person).name = "wang";
person.value().age = 20;            // (*person).name = "20";
console.log(person.toString());

let person5: ObjectArray<Person> = person.subarray(5); // Person * person5 = &person[5];
person5.value().name = "liu";   // (*person5).name = "liu";
person5.value().age = 40;       // (*person5).age = 40;
person5.value(1).name = "gao";  // person5[1].name = "gao";
person5.value(1).age = 50;      // person5[1].age = 50;
person5.seek(2);                // person5 += 2;
person5.value().name = "zhao";  // person5[0].name = "zhao";
person5.value().age = 30;       // person5[0].age = 30;
console.log(person.toString());