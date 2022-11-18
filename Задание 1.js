let result = prompt('Введите значение', '')
result++
result--
alert(result)
console.log(typeof result);
if (result === null) {
    alert('Вы отказались от ввода')
} else if (isNaN(result % 2)) {
    alert('Упс, кажется, вы ошиблись')
} else if (result % 2 === 0) {
    alert('Число четное')
} else {
    alert('число нечетное')
}