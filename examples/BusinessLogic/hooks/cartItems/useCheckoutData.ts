import { useRecoilValue } from 'recoil';
import { checkoutDataSelector } from '../../selectors/products/checkoutDataSelector';

export function useCheckoutData(): [string, string, string] {
    return useRecoilValue(checkoutDataSelector);
}
