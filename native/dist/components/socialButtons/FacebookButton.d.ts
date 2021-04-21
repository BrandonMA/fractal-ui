import React from 'react';
import { ButtonProps } from '../buttons/Button';
export declare type FacebookButtonProps = Partial<Omit<ButtonProps, 'variant'>> & {
    loading?: boolean;
};
export declare const FacebookButton: React.ForwardRefExoticComponent<Partial<Pick<ButtonProps, "backgroundColor" | "bg" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderWidth" | "borderTopWidth" | "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderColor" | "borderStyle" | "height" | "maxHeight" | "minHeight" | "maxWidth" | "minWidth" | "width" | "padding" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "margin" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "flex" | "display" | "justifyContent" | "alignItems" | "flexDirection" | "alignSelf" | "alignContent" | "flexWrap" | "flexBasis" | "flexGrow" | "flexShrink" | "position" | "top" | "right" | "bottom" | "left" | "zIndex" | "opacity" | "overflow" | "boxShadow" | "text" | "cursor" | "pointerEvents" | "initial" | "animate" | "exit" | "variants" | "style" | "children" | "className" | "transition" | "onPress" | "addShadow">> & {
    loading?: boolean | undefined;
} & React.RefAttributes<unknown>>;
