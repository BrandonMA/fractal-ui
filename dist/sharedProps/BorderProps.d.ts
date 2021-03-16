export interface BorderProps {
    borderRadius?: number;
    borderTopLeftRadius?: number;
    borderTopRightRadius?: number;
    borderBottomLeftRadius?: number;
    borderBottomRightRadius?: number;
    borderWidth?: number;
    borderTopWidth?: number;
    borderBottomWidth?: number;
    borderLeftWidth?: number;
    borderRightWidth?: number;
    borderColor?: string;
}
export declare function extractBorderProps({ borderRadius, borderTopLeftRadius, borderTopRightRadius, borderBottomLeftRadius, borderBottomRightRadius, borderWidth, borderTopWidth, borderBottomWidth, borderLeftWidth, borderRightWidth, borderColor }: BorderProps): string;
