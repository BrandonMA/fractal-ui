import React from 'react';
import { ButtonProps } from '../buttons/Button';
export declare type GoogleButtonProps = Partial<Omit<ButtonProps, 'variant'>> & {
    loading?: boolean;
};
declare const GoogleButton: React.ForwardRefExoticComponent<Partial<Pick<ButtonProps, "className" | "height" | "style" | "width" | "cursor" | "display" | "opacity" | "overflow" | "pointerEvents" | "children" | "initial" | "animate" | "text" | "borderRadius" | "backgroundColor" | "bg" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderWidth" | "borderTopWidth" | "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderColor" | "borderStyle" | "maxHeight" | "minHeight" | "maxWidth" | "minWidth" | "padding" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "margin" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "flex" | "justifyContent" | "alignItems" | "flexDirection" | "alignSelf" | "alignContent" | "flexWrap" | "flexBasis" | "flexGrow" | "flexShrink" | "position" | "top" | "right" | "bottom" | "left" | "zIndex" | "boxShadow" | "boxSizing" | "variants" | "transition" | "exit" | "onPress" | "addShadow">> & {
    loading?: boolean | undefined;
} & React.RefAttributes<unknown>>;
export { GoogleButton };
