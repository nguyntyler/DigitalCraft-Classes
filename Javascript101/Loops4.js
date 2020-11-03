let a = 0;
let b = 30;
let c = 0

for (; a <= b; a++) {
    if (!(a % 2) && !(a % 3)) continue;
    // c += a;
    console.log(a)
}
console.log(c)

let number = 30
let value = 0
for (let i = 0; i < number; i++) {
    value += (i % 2 != 0 && i % 3 != 0) ? i : 0
}
console.log(value)

number = 30
value = 0
let i = 0
while (i < number) {
    if ((i % 2) && (i % 3)) {
        console.log(i)
    }
    i++
}
console.log(value)
// argument missmatch
// function foo(bar1, bar2, bar3) {
//     if (!bar3) bar3 = 0
//     //bar3 = bar3 || 0
//     console.log(bar1, bar2, bar3)
//     return bar1 + bar2 + bar3
// }
// console.log(foo(1, 2))//no error