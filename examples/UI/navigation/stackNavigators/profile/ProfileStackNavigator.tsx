import React from 'react';
import { NavigationBar, NavigationBarLeftView, NavigationBarRightView, StackNavigator, StackScreen } from '../../../../../src';
import { tabRoutes } from '../../tabRoutes';
import { ProfileScreen } from './screens/ProfileScreen';
import { stackTitles } from '../../stackTitles';
import { HelpButton } from '../../../components/profile/HelpButton';
import { HelpScreen } from './screens/HelpScreen';
import { SaveButton } from '../../../components/profile/SaveButton';

export function ProfileStackNavigator(): JSX.Element {
    return (
        <StackNavigator path={tabRoutes.profile}>
            <StackScreen path={tabRoutes.profile}>
                <NavigationBar title={stackTitles.profile} largeTitle>
                    <NavigationBarLeftView>
                        <HelpButton />
                    </NavigationBarLeftView>
                    <NavigationBarRightView>
                        <SaveButton />
                    </NavigationBarRightView>
                </NavigationBar>
                <ProfileScreen />
            </StackScreen>
            <StackScreen path={tabRoutes.help}>
                <NavigationBar title={stackTitles.help} largeTitle={false} backTitle={stackTitles.profile} />
                <HelpScreen />
            </StackScreen>
        </StackNavigator>
    );
}
