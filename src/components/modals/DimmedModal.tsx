import React, { ReactNode } from 'react';
import { Modal as NativeModal, ModalProps as NativeModalProps } from 'react-native';
import { BasePressable } from '../baseComponents/BasePressable';
import { BaseSafeAreaView } from '../baseComponents';

export interface DimmedModalProps extends NativeModalProps {
    onDismiss?: () => void;
    children?: ReactNode;
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
}

export function DimmedModal(props: DimmedModalProps): JSX.Element {
    const { children, onDismiss, visible, justifyContent, alignItems, ...others } = props;
    return (
        <NativeModal visible={visible} transparent animationType='fade' {...others}>
            <BaseSafeAreaView flex={1} justifyContent={justifyContent} alignItems={alignItems}>
                <BasePressable
                    onPress={onDismiss}
                    position='absolute'
                    top={0}
                    right={0}
                    bottom={0}
                    left={0}
                    backgroundColor='black'
                    opacity={0.6}
                />
                {children}
            </BaseSafeAreaView>
        </NativeModal>
    );
}
