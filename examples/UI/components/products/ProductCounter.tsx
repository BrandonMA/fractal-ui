import React, { memo, useCallback } from 'react';
import { Product } from '../../../BusinessLogic/models/Product';
import styled from 'styled-components/native';
import { PlusIcon } from '../../icons/PlusIcon';
import { MinusIcon } from '../../icons/MinusIcon';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { cartItemsAtomFamily } from '../../../BusinessLogic/atoms/products/cartItemsAtomFamily';
import { Pressable } from 'react-native';
import { cartItemsProductArrayAtom } from '../../../BusinessLogic/atoms/products/cartItemsProductArrayAtom';
import { useToggleItemFromArray } from '../../../../src/hooks/useToggleItemFromArray';
import { getCursorStyle } from '../../../../src/Layout/util';

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
    const [cartItem, setCartItem] = useRecoilState(cartItemsAtomFamily(value.sku));
    const setCartItemsProductsAtom = useSetRecoilState(cartItemsProductArrayAtom);
    useToggleItemFromArray(cartItem > 0, value.sku, setCartItemsProductsAtom);

    const increateAmount = useCallback(() => {
        setCartItem((cartItem) => {
            return cartItem + 1;
        });
    }, []);

    const decreaseAmount = useCallback(() => {
        setCartItem((cartItem) => {
            if (cartItem > 0) {
                return cartItem - 1;
            } else {
                return cartItem;
            }
        });
    }, []);

    return (
        <CounterContainer>
            <PlusButton increateAmount={increateAmount} />
            <MiddleText selectable={false}>{cartItem}</MiddleText>
            <MinusButton decreaseAmount={decreaseAmount} />
        </CounterContainer>
    );
}
