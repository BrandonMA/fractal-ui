import { useRecoilValue } from 'recoil';
import { isCartEmptySelector } from '../../selectors/products/isCartEmptySelector';

export function useIsCartEmpty(): boolean {
    return useRecoilValue(isCartEmptySelector);
}
