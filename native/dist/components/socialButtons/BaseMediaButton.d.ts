import React from 'react';
import { BaseButtonProps } from '../buttons/BaseButton/types';
export declare type BaseMediaButtonProps = Partial<Omit<BaseButtonProps, 'variant'>> & {
    loading?: boolean;
    activityIndicatorColor?: string;
};
export declare const BaseMediaButton: React.ForwardRefExoticComponent<Partial<Pick<BaseButtonProps, "backgroundColor" | "bg" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderWidth" | "borderTopWidth" | "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderColor" | "borderStyle" | "height" | "maxHeight" | "minHeight" | "maxWidth" | "minWidth" | "width" | "padding" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "margin" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "flex" | "display" | "justifyContent" | "alignItems" | "flexDirection" | "alignSelf" | "alignContent" | "flexWrap" | "flexBasis" | "flexGrow" | "flexShrink" | "position" | "top" | "right" | "bottom" | "left" | "zIndex" | "opacity" | "overflow" | "boxShadow" | "cursor" | "pointerEvents" | "initial" | "animate" | "exit" | "variants" | "whileTap" | "onPressOut" | "onPressIn" | "style" | "children" | "className" | "transition" | "whileHover" | "onPress" | "pressedBackgroundColor">> & {
    loading?: boolean | undefined;
    activityIndicatorColor?: string | undefined;
} & React.RefAttributes<unknown>>;
