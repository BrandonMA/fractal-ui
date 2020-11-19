import React, { memo, useCallback } from 'react';
import { Product } from '../../../BusinessLogic/models/Product';
import styled from 'styled-components/native';
import { PlusIcon } from '../../icons/PlusIcon';
import { MinusIcon } from '../../icons/MinusIcon';
import { useRecoilState } from 'recoil';
import { cartItemsAtomFamily } from '../../../BusinessLogic/atoms/products/cartItemsAtomFamily';
import { Pressable } from 'react-native';

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
`;

const SquareButton = styled(Pressable)`
    background-color: #005cb3;
    height: 32px;
    width: 32px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`;

interface PlusButtonProps {
    increateAmount: () => void;
}

const PlusButton = memo((props: PlusButtonProps) => {
    return (
        <SquareButton onPress={props.increateAmount}>
            <PlusIcon width={20} height={20} />
        </SquareButton>
    );
});

interface MinusButtonProps {
    decreaseAmount: () => void;
}

const MinusButton = memo((props: MinusButtonProps) => {
    return (
        <SquareButton onPress={props.decreaseAmount}>
            <MinusIcon width={20} height={20} />
        </SquareButton>
    );
});

export function ProductCounter(props: ProductCellProps): JSX.Element {
    const { value } = props;
    const [cartItem, setCartItem] = useRecoilState(cartItemsAtomFamily(value.sku));

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
            <MiddleText>{cartItem}</MiddleText>
            <MinusButton decreaseAmount={decreaseAmount} />
        </CounterContainer>
    );
}
