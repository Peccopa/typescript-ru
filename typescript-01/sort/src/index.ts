import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection1 = new NumbersCollection([4, -3, 11, 2, 300, -11]);
numbersCollection1.sort();
console.log(numbersCollection1.data);

const charactersCollection2 = new CharactersCollection('CharactersCollection');
charactersCollection2.sort();
console.log(charactersCollection2.data);

const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(-11);
linkedList.add(-3);
linkedList.add(7);
linkedList.sort();
linkedList.print();
