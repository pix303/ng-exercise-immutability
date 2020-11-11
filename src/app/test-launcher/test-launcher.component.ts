import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-launcher',
  templateUrl: './test-launcher.component.html',
  styleUrls: ['./test-launcher.component.css']
})
export class TestLauncherComponent implements OnInit {

  result: string = "no test done";
  family = [
    { name: "Paul", surname: "Carter", age: 47 },
    { name: "Lighty", surname: "Ramsey", age: 36 },
    { name: "Frances", surname: "Carter", age: 11 },
    { name: "Jack", surname: "Carter", age: 0 },
  ];
  source = JSON.stringify([...this.family], null, 4);
  constructor() { }

  ngOnInit() {

    //default parameters in inline function implict return
    const add = (a = 10, b = 5) => a + b;
    console.log(add(15))

    //backtick for compose message with vars
    const msg = (name = "Paul") => `Ciao ${name}!`;
    console.log(msg("Jack"))

    const bar = new Foo();
    bar.hello("Franci");

    //immutability for array
    let list = [10, 20]
    //new mem allocation
    list = [...list, 50]
    let list1 = [...list]
    let list2 = list.map((item, index) => {
      return item;
    })
    console.log(list)
    console.log(list1)
    console.log(list2)
    console.log(list === list2)
    console.log(list1 === list2)
  }

  //redux function
  onShortName() {
    //redux function with params field splitter
    const newItemRedux = ({ name, surname }) => name + " " + surname;
    //get new array reduxed
    let newData = this.family.map((item) => {
      return newItemRedux(item);
    })
    this.result = JSON.stringify(newData, null, 4);
  }

  //filter function
  onFilterByAge() {
    //filter array
    let newData = this.family.filter(({ age }) => age < 18)
    this.result = JSON.stringify(newData, null, 4);
    console.log(newData[0] == this.family[2])
  }

  //update function
  onUpadateSurname() {
    //filter array
    let dataToUpdate = { surname: "Ramsey", newSurname: "Carter" }
    let newData = this.family.map((item) => {
      if (item.surname == dataToUpdate.surname) {
        return { ...item, ...{ surname: dataToUpdate.surname + " in " + dataToUpdate.newSurname } };
      }
      return item;
    })
    this.result = JSON.stringify(newData, null, 4);
  }

  //filter and return different data
  onFilterAndMap() {
    let adults = this.family
      .filter((item) => item.age > 30)
      .map((item) => `${item.name} ${item.surname}`);
    this.result = JSON.stringify(adults, null, 4);
  }
  //sum all ages
  onSumAllAges() {
    let result = this.family
      .map((item) => item.age)
      .reduce((total, currentAge) => { return total + currentAge }, 0)
    this.result = JSON.stringify(result, null, 4);
  }
}

class Foo {
  prefix = "hello ";

  hello(name = "Paul") {
    console.log(name)
    setTimeout(() => {
      console.log("internal name", name)
      console.log(`${this.prefix} ${name}`);
    }, 1000)
  }
}