export function getFontSize(textSize) {
    var fontSize = function () {
        switch (textSize) {
            case 'xl':
                return 21;
            case 'lg':
                return 19;
            case 'md':
                return 17;
            case 'sm':
                return 15;
        }
    };
    return fontSize() + "px";
}
//# sourceMappingURL=getFontSize.js.map