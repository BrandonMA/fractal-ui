import React from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigationInsets } from '../../Navigation/hooks/useNavigationInsets';
export function FullScreenScrollView(props) {
    var _a = useNavigationInsets(), totalInsets = _a.totalInsets, tabBarInsets = _a.tabBarInsets;
    return (<View style={{ flex: 1 }}>
            <ScrollView {...props} scrollIndicatorInsets={tabBarInsets} contentContainerStyle={{
        paddingTop: totalInsets.top,
        paddingBottom: totalInsets.bottom,
        paddingRight: totalInsets.right,
        paddingLeft: totalInsets.left
    }}/>
        </View>);
}
//# sourceMappingURL=FullScreenScrollView.js.map