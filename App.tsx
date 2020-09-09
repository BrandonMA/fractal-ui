import React from 'react';
import { View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { AppExample } from './src/Navigation/components';

enableScreens();

export default function App(): React.ReactNode {
    return (
        <View
            style={{
                height: '100%',
                width: '100%',
                justifyContent: 'flex-end',
                backgroundColor: '#D8D8D8'
            }}
        >
            <AppExample />
        </View>
    );
}
