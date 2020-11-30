import React, { memo, useCallback } from 'react';
import { Product } from '../../../BusinessLogic/models/Product';
import styled from 'styled-components/native';
import { PlusIcon } from '../../icons/PlusIcon';
import { MinusIcon } from '../../icons/MinusIcon';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { cartItemsAmountAtomFamily } from '../../../BusinessLogic/atoms/cartItems/cartItemsAmountAtomFamily';
import { Pressable } from 'react-native';
import { cartItemsProductsAtom } from '../../../BusinessLogic/atoms/cartItems/cartItemsProductsAtom';
import { getCursorStyle } from '../../../../src/Layout/util';
import { useToggleItemFromMap } from '../../../../src/hooks/useToggleItemFromMap';

interface ProductCellProps {
    value: Product;
}

const CounterContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 12px;
    background-color: white;
    border-radius: 8px;
`;

const MiddleText = styled.Text`
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    align-self: center;
    flex-basis: 40%;
`;

const SquareButton = styled(Pressable)`
    background-color: #005cb3;
    height: 32px;
    width: 32px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    ${getCursorStyle};
`;

const ButtonContainer = styled.View`
    flex-basis: 30%;
    align-items: center;
`;

interface PlusButtonProps {
    increateAmount: () => void;
}

const PlusButton = memo((props: PlusButtonProps) => {
    return (
        <ButtonContainer>
            <SquareButton onPress={props.increateAmount}>
                <PlusIcon width={20} height={20} />
            </SquareButton>
        </ButtonContainer>
    );
});

interface MinusButtonProps {
    decreaseAmount: () => void;
}

const MinusButton = memo((props: MinusButtonProps) => {
    return (
        <ButtonContainer>
            <SquareButton onPress={props.decreaseAmount}>
                <MinusIcon width={20} height={20} />
            </SquareButton>
        </ButtonContainer>
    );
});

export function ProductCounter(props: ProductCellProps): JSX.Element {
    const { value } = props;
    const [cartItemAmount, setCartItemAmount] = useRecoilState(cartItemsAmountAtomFamily(value.sku));
    const setCartItemsProductsAtom = useSetRecoilState(cartItemsProductsAtom);
    useToggleItemFromMap(cartItemAmount > 0, value.sku, value, setCartItemsProductsAtom);

    const increateAmount = useCallback(() => {
        setCartItemAmount((amount) => {
            return amount + 1;
        });
    }, []);

    const decreaseAmount = useCallback(() => {
        setCartItemAmount((amount) => {
            if (amount > 0) {
                return amount - 1;
            } else {
                return amount;
            }
        });
    }, []);

    return (
        <CounterContainer>
            <PlusButton increateAmount={increateAmount} />
            <MiddleText selectable={false}>{cartItemAmount}</MiddleText>
            <MinusButton decreaseAmount={decreaseAmount} />
        </CounterContainer>
    );
}
