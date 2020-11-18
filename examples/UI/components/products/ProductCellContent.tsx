import React, { memo } from 'react';
import { Product } from '../../../BusinessLogic/models/Product';
import styled from 'styled-components/native';
import { Label } from '../Label';
import { Image } from 'react-native-expo-image-cache';
import { Image as WebImage, Platform } from 'react-native';
import { Title } from '../Title';

interface ProductCellProps {
    value: Product;
}

const StyledTitle = styled(Title)`
    padding-bottom: 12px;
`;

const StyledImage: any = styled(Platform.OS === 'web' ? WebImage : Image)`
    width: 100%;
    height: 100px;
    padding-bottom: 12px;
`;

const StyledLabel = styled(Label)`
    text-align: center;
    padding-bottom: 12px;
`;

export const ProductCellContent = memo(
    (props: ProductCellProps): JSX.Element => {
        const { value } = props;

        return (
            <>
                <StyledTitle>{value.name}</StyledTitle>
                <StyledImage resizeMode='contain' uri={value.imageURL} defaultSource={{ uri: value.imageURL }} />
                <StyledLabel>${value.price}</StyledLabel>
                <StyledLabel>{value.description}</StyledLabel>
            </>
        );
    }
);
