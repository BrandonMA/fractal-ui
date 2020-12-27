import React, { memo, useCallback, useMemo } from 'react';
import { registerRootComponent } from 'expo';
import {
    StackNavigator,
    StackScreen,
    StackScreenContent,
    TabBar,
    TabBarItem,
    TabNavigator,
    TabScreen,
    BaseButton,
    FractalAppRoot,
    BaseText,
    PlarformBarConfig,
    BaseTextButton,
    PlatformBarRightView,
    BaseIconTextField,
    Spacer,
    BaseSeparator,
    SafeAreaScrollView,
    SafeAreaFlatList,
    SocialMediaButtons,
    tabBarHiddenAtom,
    currentThemeIdentifierAtom,
    BaseCell,
    BaseDetailsCell,
    InteractiveColors,
    BaseSummaryCell,
    SafeAreaSectionsList,
    PaddingContainer,
    useHistory,
    NavigationBarTextButton,
    NavigationBarButton,
    BasePicker
} from './src';
import { Entypo as BaseEntypo } from '@expo/vector-icons';
import { useSetRecoilState } from 'recoil';
import { RequiredKeys } from 'utility-types';

const Entypo = memo(BaseEntypo);

const Settings = memo(
    (): JSX.Element => {
        const setTabBarHidden = useSetRecoilState(tabBarHiddenAtom);
        const setThemeSet = useSetRecoilState(currentThemeIdentifierAtom);

        const toggleTabBar = useCallback(() => setTabBarHidden((current) => !current), [setTabBarHidden]);
        const toggleThemeSet = useCallback(() => {
            setThemeSet((current) => (current === 'default' ? 'dark' : 'default'));
        }, [setThemeSet]);

        return (
            <BaseCell>
                <BaseButton text='Toggle Tab Bar' colorStyle='mainInteractiveColor' onPress={toggleTabBar} removeShadow />
                <Spacer height={16} />
                <BaseButton text='Toggle Theme' colorStyle='alternativeInteractiveColor' onPress={toggleThemeSet} removeShadow />
            </BaseCell>
        );
    }
);

function Authentication(): JSX.Element {
    const renderEmailIcon = useMemo(
        () => (color: string, size: number): JSX.Element => <Entypo name='email' size={size} color={color} />,
        []
    );

    const renderPasswordIcon = useMemo(
        () => (color: string, size: number): JSX.Element => <Entypo name='lock' size={size} color={color} />,
        []
    );

    return (
        <>
            <BaseCell>
                <BaseIconTextField leftImage={renderEmailIcon} placeholder='Email' />
                <Spacer height={16} />
                <BaseIconTextField leftImage={renderPasswordIcon} placeholder='Password' />
                <Spacer height={16} />
                <BaseButton text='Iniciar sesión' colorStyle='alternativeInteractiveColor' removeShadow />
                <Spacer height={16} />
                <BaseTextButton textSize='sm' colorStyle='alternativeInteractiveColor' textAlign='center'>
                    ¿Se te olvidó tu contraseña?
                </BaseTextButton>
                <Spacer height={16} />
                <BaseSeparator />
                <Spacer height={16} />
                <BaseButton text='Crear cuenta' colorStyle='mainInteractiveColor' removeShadow />
            </BaseCell>
            <SocialMediaButtons />
        </>
    );
}

// Individual Cells Example

interface DetailsCardProps {
    isLastItem?: boolean;
}

const detailsCardContent: Array<[string, string]> = [
    ['Title 1', 'Details 1'],
    ['Title 2', 'Details 2']
];
function DetailsCard(props: DetailsCardProps): JSX.Element {
    const { isLastItem } = props;
    return <BaseDetailsCell isLastItem={isLastItem} title='Title' details={detailsCardContent} />;
}

// List Example

const cellData: Array<[string, string, RequiredKeys<InteractiveColors>]> = [
    ['Title 1', 'Details 1', 'mainInteractiveColor'],
    ['Title 2', 'Details 2', 'dangerInteractiveColor'],
    ['Title 3', 'Details 3', 'warningInteractiveColor']
];

const listData: Array<typeof cellData> = [cellData, cellData, cellData, cellData];

function ListExample(): JSX.Element {
    const renderItem = useCallback(({ index, item }) => <BaseSummaryCell items={item} isLastItem={index === listData.length - 1} />, []);
    const keyExtractor = useCallback((item, index) => `id-${item[0][0]}-${index}`, []);
    return <SafeAreaFlatList data={listData} ListHeaderComponent={Settings} renderItem={renderItem} keyExtractor={keyExtractor} />;
}

// Sections List Example

const sections = [
    {
        title: 'Title 1',
        data: [cellData, cellData, cellData]
    },
    {
        title: 'Title 2',
        data: [cellData, cellData, cellData]
    }
];

function SectionsListExample(): JSX.Element {
    const renderItem = useCallback(({ index, item, section }) => {
        return <BaseSummaryCell items={item} isLastItem={section === sections[sections.length - 1] && index === section.data.length - 1} />;
    }, []);
    const keyExtractor = useCallback((item, index) => `id-${item[0][0]}-${index}`, []);
    const renderSectionHeader = useCallback(
        ({ section }) => (
            <PaddingContainer>
                <BaseText textSize='sm' textType='label' bold>
                    {section.title}
                </BaseText>
            </PaddingContainer>
        ),
        []
    );

    return (
        <SafeAreaSectionsList
            sections={sections}
            ListHeaderComponent={Settings}
            renderSectionHeader={renderSectionHeader}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
    );
}

// Navigation Example

function MainTabBar(): JSX.Element {
    const renderHomeItem = useMemo(
        () => (color: string, size: number): JSX.Element => <Entypo name='home' size={size} color={color} />,
        []
    );
    return (
        <TabBar tabBarVariant='middle-action' tabBarPosition='bottom'>
            <TabBarItem title='Home' path='/home'>
                {renderHomeItem}
            </TabBarItem>
            <TabBarItem title='Middle' path='/middle' variant='circular'>
                {renderHomeItem}
            </TabBarItem>
            <TabBarItem title='Home 3' path='/two'>
                {renderHomeItem}
            </TabBarItem>
        </TabBar>
    );
}

function ModalPush(): JSX.Element {
    const history = useHistory();
    return <BaseButton colorStyle='successInteractiveColor' text='Show modal' onPress={() => history.push('/home/profile')} />;
}

function App(): JSX.Element {
    const renderSearchIcon = useMemo(
        () => (color: string, size: number): JSX.Element => <Entypo name='magnifying-glass' size={size} color={color} />,
        []
    );

    return (
        <FractalAppRoot>
            <TabNavigator defaultRoute='/home' tabBar={<MainTabBar />}>
                <TabScreen path='/home'>
                    <StackNavigator path='/home'>
                        <StackScreen
                            path='/home'
                            navBarConfig={
                                <PlarformBarConfig title='Home'>
                                    <PlatformBarRightView>
                                        <NavigationBarButton>{renderSearchIcon}</NavigationBarButton>
                                    </PlatformBarRightView>
                                </PlarformBarConfig>
                            }
                        >
                            <StackScreenContent>
                                <SafeAreaScrollView>
                                    <Authentication />
                                    <PaddingContainer>
                                        <ModalPush />
                                    </PaddingContainer>
                                    <Settings />
                                    <BaseCell>
                                        <BasePicker
                                            iosDoneText='Done'
                                            items={[
                                                ['1', 'Hoy'],
                                                ['2', 'Ayer'],
                                                ['3', 'Prueba'],
                                                ['4', 'Cuatro'],
                                                ['5', 'Cinco']
                                            ]}
                                        />
                                    </BaseCell>
                                    <DetailsCard />
                                    <DetailsCard />
                                    <DetailsCard />
                                    <DetailsCard />
                                    <DetailsCard isLastItem />
                                </SafeAreaScrollView>
                            </StackScreenContent>
                        </StackScreen>
                        <StackScreen
                            path='/home/profile'
                            stackPresentation='modal'
                            navBarConfig={
                                <PlarformBarConfig title='Modal'>
                                    <PlatformBarRightView>
                                        <NavigationBarTextButton>Right</NavigationBarTextButton>
                                    </PlatformBarRightView>
                                </PlarformBarConfig>
                            }
                        >
                            <StackScreenContent>
                                <BaseCell>
                                    <BaseText textSize='md'>This is a modal</BaseText>
                                </BaseCell>
                            </StackScreenContent>
                        </StackScreen>
                    </StackNavigator>
                </TabScreen>
                <TabScreen path='/middle'>
                    <StackNavigator path='/middle'>
                        <StackScreen path='/middle' navBarConfig={<PlarformBarConfig title='Middle' />}>
                            <StackScreenContent>
                                <ListExample />
                            </StackScreenContent>
                        </StackScreen>
                    </StackNavigator>
                </TabScreen>
                <TabScreen path='/two'>
                    <StackNavigator path='/two'>
                        <StackScreen path='/two' navBarConfig={<PlarformBarConfig title='Two' />}>
                            <StackScreenContent>
                                <SectionsListExample />
                            </StackScreenContent>
                        </StackScreen>
                    </StackNavigator>
                </TabScreen>
            </TabNavigator>
        </FractalAppRoot>
    );
}

export default registerRootComponent(App);
