export interface WebProps {
    className?: string;
    pointerEvents?: 'none' | 'auto' | 'box-none';
    cursor?:
        | 'auto'
        | 'default'
        | 'none'
        | 'alias'
        | 'all-scroll'
        | 'cell'
        | 'context-menu'
        | 'help'
        | 'pointer'
        | 'progress'
        | 'wait'
        | 'crosshair'
        | 'text'
        | 'vertical-text'
        | 'copy'
        | 'move'
        | 'no-drop'
        | 'not-allowed'
        | 'col-resize'
        | 'e-resize'
        | 'ew-resize'
        | 'n-resize'
        | 'ne-resize'
        | 'ns-resize'
        | 'nw-resize'
        | 'nwse-resize'
        | 'row-resize'
        | 's-resize'
        | 'se-resize'
        | 'sw-resize'
        | 'w-resize';
}

export function extractWebProps({ cursor, pointerEvents }: WebProps): string {
    return `
        ${cursor ? `cursor: ${cursor}` : ''};
        ${pointerEvents ? `pointer-events: ${pointerEvents === 'box-none' ? 'none' : pointerEvents}` : ''};
    `;
}
