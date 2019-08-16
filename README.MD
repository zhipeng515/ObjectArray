## 简介

在某些场景下希望JS能像C语言一样操作数组，尤其是一些递归算法，类似下面的代码

```c
void some(int * data, int lenght) {
    for(int i = 0; i < lenght; i++) {
        if(data[i] >= 0) {
            some(&data[i], length-i);
        } else {
            // do something
        }
    }
}
```

## 使用说明

### 1. 构造

```ts
class Person {
    name: string = "";
    age: number = 0;
    
    toString() {
        return "name(" + this.name + ") age(" + this.age + ")";
    }
}

let person: ObjectArray<Person> = new ObjectArray<Person>(10, Person);
console.log(person.toString());
```

输出

```ts
i = 0 v = name() age(0)
i = 1 v = name() age(0)
i = 2 v = name() age(0)
i = 3 v = name() age(0)
i = 4 v = name() age(0)
i = 5 v = name() age(0)
i = 6 v = name() age(0)
i = 7 v = name() age(0)
i = 8 v = name() age(0)
i = 9 v = name() age(0)
```

### 2. 指针操作

```ts
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
```

输出

```ts
i = 0 v = name(zhang) age(10)
i = 1 v = name(wang) age(20)
i = 2 v = name() age(0)
i = 3 v = name() age(0)
i = 4 v = name() age(0)
i = 5 v = name() age(0)
i = 6 v = name() age(0)
i = 7 v = name() age(0)
i = 8 v = name() age(0)
i = 9 v = name() age(0)

i = 0 v = name(zhang) age(10)
i = 1 v = name(wang) age(20)
i = 2 v = name() age(0)
i = 3 v = name() age(0)
i = 4 v = name() age(0)
i = 5 v = name() age(0)
i = 6 v = name(liu) age(40)
i = 7 v = name(gao) age(50)
i = 8 v = name(zhao) age(30)
i = 9 v = name() age(0)
```