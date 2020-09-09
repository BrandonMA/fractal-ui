// interface NavigationStackProps {
//     path: string;
//     children: React.ReactNode;
// }

// function NavigationStack(props: NavigationStackProps): JSX.Element {
//     const { path, children } = props;
//     const stackRouteTitles = path.split('/');
//     return <ScreenStack style={{ flex: 1 }}>{React.Children.map()}</ScreenStack>;
// }

// import { useMatch } from './Navigation/hooks/useMatch';

// function Uno() {
//     const [match, activeRoutes] = useMatch('/one');
//     console.log(match, activeRoutes);
//     return (
//         <ScreenStack style={{ flex: 1 }}>
//             {activeRoutes >= 1 ? <One /> : null}
//             {activeRoutes >= 2 ? <Detail /> : null}
//         </ScreenStack>
//     );
// }
