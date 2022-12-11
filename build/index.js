"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sorter_1 = require("./sorter");
const CharactersCollection_1 = require("./CharactersCollection");
/* const numberCollection = new NumbresCollection([10,1,2,5,-5,3,6,0,1,8,7])
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data); */
const charCollection = new CharactersCollection_1.CharactersCollection('Fldfkd');
const sorter1 = new sorter_1.Sorter(charCollection);
sorter1.sort();
console.log(charCollection.data);
