export function normalizeHourValues(values) {
    return values.map(function (item) {
        var id = item[0], value = item[1];
        if (value.length === 1) {
            return [id, "0" + value];
        }
        else {
            return item;
        }
    });
}
//# sourceMappingURL=normalizeHourValues.js.map