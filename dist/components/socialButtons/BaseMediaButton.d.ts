import React from 'react';
import { BaseButtonProps } from '../buttons/BaseButton/types';
export declare type BaseMediaButtonProps = Partial<Omit<BaseButtonProps, 'variant'>> & {
    loading?: boolean;
    activityIndicatorColor?: string;
};
declare const BaseMediaButton: React.ForwardRefExoticComponent<Partial<Pick<BaseButtonProps, "className" | "height" | "style" | "width" | "cursor" | "display" | "opacity" | "overflow" | "pointerEvents" | "children" | "initial" | "animate" | "borderRadius" | "backgroundColor" | "bg" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderWidth" | "borderTopWidth" | "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderColor" | "borderStyle" | "maxHeight" | "minHeight" | "maxWidth" | "minWidth" | "padding" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "margin" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "flex" | "justifyContent" | "alignItems" | "flexDirection" | "alignSelf" | "alignContent" | "flexWrap" | "flexBasis" | "flexGrow" | "flexShrink" | "position" | "top" | "right" | "bottom" | "left" | "zIndex" | "boxShadow" | "boxSizing" | "variants" | "transition" | "exit" | "whileTap" | "whileHover" | "onPress" | "onPressIn" | "onPressOut" | "pressedBackgroundColor">> & {
    loading?: boolean | undefined;
    activityIndicatorColor?: string | undefined;
} & React.RefAttributes<unknown>>;
export { BaseMediaButton };
