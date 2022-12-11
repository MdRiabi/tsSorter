import { Sorter } from "./sorter";
import { NumbresCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";


/* const numberCollection = new NumbresCollection([10,1,2,5,-5,3,6,0,1,8,7])
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data); */

const charCollection = new CharactersCollection('Fldfkd');
const sorter1 = new Sorter(charCollection);
sorter1.sort()
console.log(charCollection.data);