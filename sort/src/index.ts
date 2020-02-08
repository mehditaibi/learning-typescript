import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
// import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection("mehdi taibi");
const linkedList = new LinkedList();
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
