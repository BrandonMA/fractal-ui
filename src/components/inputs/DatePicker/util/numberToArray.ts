export function numberToArray(value: number): Array<[string, string]> {
    let counter = value;
    const arrayOfValues = Array<[string, string]>();
    while (counter > 0) {
        arrayOfValues.push([counter.toString(), counter.toString()]);
        counter--;
    }
    return arrayOfValues;
}
