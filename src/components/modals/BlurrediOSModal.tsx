import React, { ReactNode } from 'react';
import { Modal as NativeModal, ModalProps as NativeModalProps } from 'react-native';
import { BlurView } from 'expo-blur';
import { TextButton } from '../buttons/TextButton';
import { useTheme } from '../../hooks/useTheme';
import { Layer } from '../containers/Layer/index.native';
import { Pressable } from '../buttons/Pressable';
import { SafeAreaLayer } from '../containers/SafeAreaLayer';
import { useThemeIdentifier } from '../../hooks/useThemeIdentifier';
import styled from 'styled-components/native';

const StyledView = styled.View`
    opacity: 0.1;
    background-color: ${(props: { backgroundColor: string }) => props.backgroundColor};
    position: absolute;
    top: 0px;
    bottom: 0;
    right: 0;
    left: 0;
`;

export interface BlurrediOSModalProps extends NativeModalProps {
    onDismiss?: () => void;
    children?: ReactNode;
    disableStateResetOnDismiss?: boolean;
    dismissText: string;
}

export function BlurrediOSModal({ children, onDismiss, dismissText, visible, ...others }: BlurrediOSModalProps): JSX.Element {
    const { colors, spacings } = useTheme();
    const themeIdentifier = useThemeIdentifier();

    return (
        <NativeModal visible={visible} transparent animationType='slide' {...others}>
            <Pressable flex={1} onPress={onDismiss} />
            <BlurView intensity={100} tint={themeIdentifier}>
                <StyledView backgroundColor={themeIdentifier === 'light' ? 'black' : 'white'} />
                <Layer
                    justifyContent='center'
                    alignItems='flex-end'
                    borderTopWidth={0.5}
                    backgroundColor={colors.background}
                    height={48}
                    paddingRight={spacings.m}
                >
                    <TextButton variant={'main'} textProps={{ variant: 'label', fontWeight: 600 }} onPress={onDismiss}>
                        {dismissText}
                    </TextButton>
                </Layer>
                <SafeAreaLayer>{children}</SafeAreaLayer>
            </BlurView>
        </NativeModal>
    );
}
