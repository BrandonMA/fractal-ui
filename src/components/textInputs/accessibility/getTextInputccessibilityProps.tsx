export function getTextFieldAccessibilityProps(placeholder?: string, disabled?: boolean): Record<string, any> {
    return {
        role: 'textbox',
        'aria-placeholder': placeholder,
        'aria-disabled': disabled
    };
}
