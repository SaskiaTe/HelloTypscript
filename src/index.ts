let lang: string = "TypeScript";
let greeting: string = `Hello, ${lang}!`;
console.log(greeting);

import { isTriplet } from "./pythagoras";

function findTriplets(limit: number): void {
    for (let a = 1; a <= limit; a++) {
        for (let b = a; b <= limit; b++) {
            for (let c = b; c <= limit; c++) {
                if (isTriplet(a, b, c)) {
                    console.log(`Triplet found: ${a}, ${b}, ${c}`);
                }
            }
        }
    }
}

findTriplets(100); 
