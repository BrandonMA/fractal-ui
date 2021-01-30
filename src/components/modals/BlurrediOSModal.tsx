import React, { ReactNode } from 'react';
import { Modal as NativeModal, ModalProps as NativeModalProps } from 'react-native';
import { BaseBox, BasePressable, BaseSafeAreaView } from '../baseComponents';
import { BlurView } from 'expo-blur';
import { useThemeIdentifier } from '../../context/hooks/useThemeIdentifier';
import { TextButton } from '../buttons/TextButton';

const textProps = { fontWeight: '600' };

export interface BlurrediOSModalProps extends NativeModalProps {
    onDismiss?: () => void;
    children?: ReactNode;
    disableStateResetOnDismiss?: boolean;
    dismissText: string;
}

export function BlurrediOSModal({ children, onDismiss, dismissText, visible, ...others }: BlurrediOSModalProps): JSX.Element {
    const [themeIdentifier] = useThemeIdentifier();

    return (
        <NativeModal visible={visible} transparent animationType='slide' {...others}>
            <BasePressable flex={1} onPress={onDismiss} />
            <BlurView intensity={100} tint={themeIdentifier}>
                <BaseBox
                    backgroundColor={themeIdentifier === 'light' ? 'black' : 'white'}
                    opacity={0.1}
                    position='absolute'
                    top={0}
                    bottom={0}
                    right={0}
                    left={0}
                />
                <BaseBox
                    borderTopColor='placeholderColor'
                    justifyContent='center'
                    alignItems='flex-end'
                    borderTopWidth={0.5}
                    backgroundColor='background'
                    height={48}
                    paddingRight='m'
                >
                    <TextButton textProps={textProps} onPress={onDismiss}>
                        {dismissText}
                    </TextButton>
                </BaseBox>
                <BaseSafeAreaView>{children}</BaseSafeAreaView>
            </BlurView>
        </NativeModal>
    );
}
