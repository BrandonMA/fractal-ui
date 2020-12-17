export interface NavigationBarProps {
    children?: JSX.Element | Array<JSX.Element>;
    hidden?: boolean;

    hideBackButton?: boolean;
    backTitle?: string;
    backTitleFontSize?: number;

    title?: string;
    titleFontSize?: number;
}
