// how much is x * y
// O(1)
function multiplicity(x: number, y: number): number {
    console.time('multiplicity');
    const result = x * y;
    console.timeEnd('multiplicity');
    return result;
}

// O(n)
function multiplicity2(x: number, y: number): number {
    console.time('multiplicity2');
    let result = 0;
    for (let i = 0; i < x; i++) {
        result += y;
    }
    console.timeEnd('multiplicity2');
    return result;
}
// O(n^2)
function multiplicity3(x: number, y: number): number {
    console.time('multiplicity3');
    let result = 0;
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            result++;
        }
    }
    console.timeEnd('multiplicity3');
    return result;
}

function main (){
const x = multiplicity(10000,1000000);
const y = multiplicity2(10000, 1000000);
const z = multiplicity3(10000, 100000);

console.log("multiplicity:", x);
console.log("multiplicity2:", y);
console.log("multiplicity3:", z);
}

