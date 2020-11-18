import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components/native';
import { CartIcon } from '../../icons/CartIcon';
import { useCartItemIsEmpty } from '../../../BusinessLogic/hooks/products/useCartItemIsEmpty';
import { Animated, Platform } from 'react-native';
import { useNavigationInsets } from '../../../../src/Navigation/hooks';
import { EdgeInsets } from 'react-native-safe-area-context';
import { useHistory, useLocation } from '../../../../src';
import { tabRoutes } from '../../navigation/tabRoutes';

interface Props {
    tabBarInsets: EdgeInsets;
}

const Container = styled(Animated.View)`
    position: absolute;
    bottom: ${(props: Props) => `${props.tabBarInsets.bottom + 16}px`};
    right: 16px;
`;

const CircularContainer = styled.TouchableOpacity`
    background-color: #005cb3;
    width: 52px;
    height: 52px;
    border-radius: 26px;
    justify-content: center;
    align-items: center;
`;

export function FloatingCartButton(): JSX.Element {
    const empty = useCartItemIsEmpty();
    const scaleValue = useRef(new Animated.Value(0)).current;
    const { totalInsets } = useNavigationInsets();
    const history = useHistory();
    const location = useLocation();
    const hidden = empty || location.pathname !== tabRoutes.products;

    const hide = useCallback(() => {
        Animated.spring(scaleValue, { useNativeDriver: Platform.OS !== 'web', toValue: 0 }).start();
    }, [hidden]);

    const show = useCallback(() => {
        Animated.spring(scaleValue, { useNativeDriver: Platform.OS !== 'web', toValue: 1 }).start();
    }, [hidden]);

    useEffect(() => {
        if (hidden) {
            hide();
        } else {
            show();
        }
    }, [hidden, show, hide]);

    const goToCheckout = useCallback(() => {
        history.push(tabRoutes.checkout);
    }, [history]);

    return (
        <Container tabBarInsets={totalInsets} style={{ transform: [{ scale: scaleValue }] }}>
            <CircularContainer onPress={goToCheckout}>
                <CartIcon width={26} height={26} fill='#fff' />
            </CircularContainer>
        </Container>
    );
}
