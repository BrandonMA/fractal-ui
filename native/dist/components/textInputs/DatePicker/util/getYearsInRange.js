export function getYearsInRange(maxDate, minDate) {
    var minValue = minDate.getFullYear();
    var difference = maxDate.getFullYear() - minValue;
    var arrayOfValues = Array();
    while (difference > 0) {
        var value = difference + minValue;
        arrayOfValues.push([value.toString(), value.toString()]);
        difference--;
    }
    arrayOfValues.push([minValue.toString(), minValue.toString()]);
    return arrayOfValues;
}
//# sourceMappingURL=getYearsInRange.js.map