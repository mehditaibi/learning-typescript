"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
// import { Sorter } from "./Sorter";
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
var charactersCollection = new CharactersCollection_1.CharactersCollection("mehdi taibi");
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(200);
linkedList.add(700);
linkedList.add(-500);
// const numbersCollectionSorter = new Sorter(numbersCollection);
// const charactersCollectionSorter = new Sorter(charactersCollection);
// const linkedListSorter = new Sorter(linkedList);
numbersCollection.sort();
// numbersCollectionSorter.sort()
charactersCollection.sort();
// charactersCollectionSorter.sort();
linkedList.sort();
// linkedListSorter.sort();
console.log(numbersCollection.data);
console.log(charactersCollection.data);
console.log(linkedList.print());
