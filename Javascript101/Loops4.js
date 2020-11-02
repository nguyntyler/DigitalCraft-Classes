// let a = 1;
// let b = 30;

// for (; a <= b; a++) {
//     if (!(a % 2)) continue;
//     if (!(a % 3)) continue;
//     console.log(a);
// }

//argument missmatch
function foo(bar1, bar2, bar3) {
    if (!bar3) bar3 = 0
    //bar3 = bar3 || 0
    console.log(bar1, bar2, bar3)
    return bar1 + bar2 + bar3
}
console.log(foo(1, 2))//no error