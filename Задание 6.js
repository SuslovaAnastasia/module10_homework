let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

let theSame = false;
let theSameAll = true;
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] != arr[j] && theSameAll == true) {
            theSameAll = false;
        }
        if (arr[i] == arr[j] && theSame == false) {
            theSame = true;
        }
    }
}
if (theSameAll) {
    console.log("все элементы одинаковые");
} else {
    if (theSame) {
        console.log("не все элементы одинаковые");
    } else {
        console.log("элементы не одинаковые");
    }
}