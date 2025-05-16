function x (num: number) : number {
    console.time('x');
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result = result * i;
    }
    console.timeEnd('x');
    console.log("the result is" + " " + result);
    
    return num;
}