let animals = new Map([
    ["dog", "good"],
    ["cat", "cute"],
    ["parrot", "kind"]
]);
animals.forEach((value, key) => {
    console.log(`${key} - x = ${value} - y`);
});