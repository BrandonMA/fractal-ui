import { useRecoilValue } from 'recoil';
import { fractalThemeColorsAtomFamily } from '../recoil';
export function useThemeColor(name) {
    return useRecoilValue(fractalThemeColorsAtomFamily(name));
}
//# sourceMappingURL=useThemeColor.js.map