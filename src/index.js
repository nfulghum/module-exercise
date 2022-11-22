import fruits from './fruits';
import { choice, remove } from './helpers';

let fruit = choice(fruits);

console.log(`I'd like one ${fruit} please`);
console.log(`Here it is: ${fruit}`);
console.log(`Nice can I have another`);

let remaining = remove(fruit, fruits);

console.log(`We're all out. We have ${remaining.length} left`);
