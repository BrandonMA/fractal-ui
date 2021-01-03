export declare const restyleFunctions: ({
    property: "backgroundColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("@shopify/restyle").RestyleFunction<Record<string, any>, import("@shopify/restyle").BaseTheme, import("@shopify/restyle").RNStyleProperty>;
} | {
    property: "opacity";
    themeKey: undefined;
    variant: boolean;
    func: import("@shopify/restyle").RestyleFunction<Record<string, any>, import("@shopify/restyle").BaseTheme, import("@shopify/restyle").RNStyleProperty>;
} | {
    property: "visible";
    themeKey: undefined;
    variant: boolean;
    func: import("@shopify/restyle").RestyleFunction<Record<string, any>, import("@shopify/restyle").BaseTheme, "display" | "visible">;
} | {
    property: "width" | "height" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "justifyContent" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow";
    themeKey: undefined;
    variant: boolean;
    func: import("@shopify/restyle").RestyleFunction<Record<string, any>, import("@shopify/restyle").BaseTheme, import("@shopify/restyle").RNStyleProperty>;
}[] | {
    property: "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical";
    themeKey: "spacing" | undefined;
    variant: boolean;
    func: import("@shopify/restyle").RestyleFunction<Record<string, any>, import("@shopify/restyle").BaseTheme, import("@shopify/restyle").RNStyleProperty>;
}[] | ({
    property: "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStyle" | "borderTopWidth" | "borderWidth" | "borderEndWidth" | "borderStartWidth";
    themeKey: undefined;
    variant: boolean;
    func: import("@shopify/restyle").RestyleFunction<Record<string, any>, import("@shopify/restyle").BaseTheme, import("@shopify/restyle").RNStyleProperty>;
} | {
    property: "borderBottomColor" | "borderColor" | "borderEndColor" | "borderLeftColor" | "borderRightColor" | "borderStartColor" | "borderTopColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("@shopify/restyle").RestyleFunction<Record<string, any>, import("@shopify/restyle").BaseTheme, import("@shopify/restyle").RNStyleProperty>;
} | {
    property: "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderRadius" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius";
    themeKey: "borderRadii" | undefined;
    variant: boolean;
    func: import("@shopify/restyle").RestyleFunction<Record<string, any>, import("@shopify/restyle").BaseTheme, import("@shopify/restyle").RNStyleProperty>;
})[] | ({
    property: "elevation" | "shadowOffset" | "shadowOpacity" | "shadowRadius";
    themeKey: undefined;
    variant: boolean;
    func: import("@shopify/restyle").RestyleFunction<Record<string, any>, import("@shopify/restyle").BaseTheme, import("@shopify/restyle").RNStyleProperty>;
} | {
    property: "shadowColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("@shopify/restyle").RestyleFunction<Record<string, any>, import("@shopify/restyle").BaseTheme, import("@shopify/restyle").RNStyleProperty>;
})[] | ({
    property: "bottom" | "end" | "left" | "position" | "right" | "start" | "top";
    themeKey: undefined;
    variant: boolean;
    func: import("@shopify/restyle").RestyleFunction<Record<string, any>, import("@shopify/restyle").BaseTheme, import("@shopify/restyle").RNStyleProperty>;
} | {
    property: "zIndex";
    themeKey: "zIndices" | undefined;
    variant: boolean;
    func: import("@shopify/restyle").RestyleFunction<Record<string, any>, import("@shopify/restyle").BaseTheme, import("@shopify/restyle").RNStyleProperty>;
})[] | {
    property: "bg";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("@shopify/restyle").RestyleFunction<Record<string, any>, import("@shopify/restyle").BaseTheme, "backgroundColor" | "bg">;
} | {
    property: "p" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "ms" | "me" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "ps" | "pe";
    themeKey: "spacing" | undefined;
    variant: boolean;
    func: import("@shopify/restyle").RestyleFunction<Record<string, any>, import("@shopify/restyle").BaseTheme, "p" | "shadowColor" | "opacity" | "backgroundColor" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textTransform" | "width" | "height" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "justifyContent" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStyle" | "borderTopWidth" | "borderWidth" | "borderEndWidth" | "borderStartWidth" | "borderBottomColor" | "borderColor" | "borderEndColor" | "borderLeftColor" | "borderRightColor" | "borderStartColor" | "borderTopColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderRadius" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "backfaceVisibility" | "testID" | "elevation" | "bottom" | "display" | "end" | "left" | "position" | "right" | "start" | "top" | "zIndex" | "direction" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "color" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "fontVariant" | "writingDirection" | "textAlignVertical" | "includeFontPadding" | "resizeMode" | "overlayColor" | "tintColor" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "ms" | "me" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "ps" | "pe">;
}[] | {
    property: "color";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("@shopify/restyle").RestyleFunction<Record<string, any>, import("@shopify/restyle").BaseTheme, import("@shopify/restyle").RNStyleProperty>;
} | {
    property: "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textTransform";
    themeKey: undefined;
    variant: boolean;
    func: import("@shopify/restyle").RestyleFunction<Record<string, any>, import("@shopify/restyle").BaseTheme, import("@shopify/restyle").RNStyleProperty>;
}[])[];
