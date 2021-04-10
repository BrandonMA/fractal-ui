export function getRadioButtonAccessibilityProps(checked: boolean, disabled?: boolean): Record<string, any> {
    return {
        tabIndex: 0,
        role: 'radio',
        'aria-checked': checked,
        'aria-disabled': disabled
    };
}
