function strPadLeft(string, pad, length) {
    return (new Array(length + 1).join(pad) + string).slice(-length);
}
export function formatNumberToTime(totalMilliSeconds) {
    if (totalMilliSeconds < 0) {
        return '00:00';
    }
    var totalSeconds = totalMilliSeconds / 1000;
    totalSeconds = Number(totalSeconds.toFixed(0));
    var minutes = Math.floor(totalSeconds / 60);
    var secondsLeft = totalSeconds - minutes * 60;
    var finalTime = minutes + ':' + strPadLeft(secondsLeft, '0', 2);
    return finalTime;
}
//# sourceMappingURL=formatNumberToTime.js.map