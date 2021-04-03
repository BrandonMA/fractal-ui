export function getTextFieldAccessibilityProps(placeholder?: string, disabled?: boolean): Record<string, any> {
    return {
        tabIndex: 0,
        role: 'textbox',
        'aria-placeholder': placeholder,
        'aria-disabled': disabled
    };
}