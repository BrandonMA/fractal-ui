import React, { useCallback } from 'react';
import { Product } from '../../models/Product';
import styled from 'styled-components/native';
import { PlusIcon } from '../../icons/PlusIcon';
import { MinusIcon } from '../../icons/MinusIcon';
import { useRecoilState } from 'recoil';
import { cartItemsAtomFamily } from '../../atoms/products/cartItemsAtomFamily';

interface ProductCellProps {
    value: Product;
}

const CounterContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
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

const SquareButton = styled.TouchableOpacity`
    background-color: #005cb3;
    height: 40px;
    width: 40px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`;

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
            <SquareButton onPress={increateAmount}>
                <PlusIcon width={28} height={28} />
            </SquareButton>
            <MiddleText>{cartItem}</MiddleText>
            <SquareButton onPress={decreaseAmount}>
                <MinusIcon width={28} height={28} />
            </SquareButton>
        </CounterContainer>
    );
}
