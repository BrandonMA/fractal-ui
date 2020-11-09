import React, { useCallback } from 'react';
import { Product } from '../../models/Product';
import styled from 'styled-components/native';
import { Label } from '../Label';
import { PlusIcon } from '../../icons/PlusIcon';
import { MinusIcon } from '../../icons/MinusIcon';
import { useRecoilState } from 'recoil';
import { cartItemsAtomFamily } from '../../atoms/products/cartItemsAtomFamily';

interface ProductCellProps {
    value: Product;
    index: number;
}

const Container = styled.View`
    background-color: white;
    flex-direction: column;
    border-radius: 8px;
    flex-grow: 1;
    max-width: 49%;
    padding: 12px 0;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
    ${(props: ProductCellProps) => (props.index % 2 === 0 ? 'margin-right: 6px' : 'margin-left: 6px')}
`;

const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 12px;
`;

const Image = styled.Image`
    width: 100%;
    height: 100px;
    padding-bottom: 12px;
`;

const StyledLabel = styled(Label)`
    text-align: center;
    padding-bottom: 12px;
`;

const CounterContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    padding: 0 12px;
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

export function ProductCell(props: ProductCellProps): JSX.Element {
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
        <Container {...props}>
            <Title>{value.name}</Title>
            <Image resizeMode='contain' source={{ uri: value.imageURL }} />
            <StyledLabel>${value.price}</StyledLabel>
            <StyledLabel>{value.description}</StyledLabel>
            <CounterContainer>
                <SquareButton onPress={increateAmount}>
                    <PlusIcon width={28} height={28} />
                </SquareButton>
                <MiddleText>{cartItem}</MiddleText>
                <SquareButton onPress={decreaseAmount}>
                    <MinusIcon width={28} height={28} />
                </SquareButton>
            </CounterContainer>
        </Container>
    );
}
