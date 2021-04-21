export function shuffleArray(initialArray) {
    var array = initialArray.slice(0);
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * i);
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
//# sourceMappingURL=shuffleArray.js.map