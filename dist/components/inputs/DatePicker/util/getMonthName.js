import { Platform } from 'react-native';
export function getMonthName(date) {
    var monthName = date.toLocaleString('default', { month: 'long' });
    if (Platform.OS === 'android') {
        return monthName.slice(3, 7);
    }
    else {
        return monthName;
    }
}
//# sourceMappingURL=getMonthName.js.map