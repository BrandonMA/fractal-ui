import { useRecoilValue } from 'recoil';
import { checkoutDataSelector } from '../../selectors/products/checkoutDataSelector';

export function useCheckoutData(): [number, number, number] {
    return useRecoilValue(checkoutDataSelector);
}
