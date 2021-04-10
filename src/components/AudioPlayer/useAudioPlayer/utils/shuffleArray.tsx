export function shuffleArray<T>(array: Array<T>): Array<T> {
    let tmp: T;
    let current: number;
    let top = array.length;
    const newArray = [...array];
    if (top)
        while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = newArray[current];
            newArray[current] = array[top];
            newArray[top] = tmp;
        }
    return newArray;
}
