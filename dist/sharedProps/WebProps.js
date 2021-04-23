export function extractWebProps({ cursor, pointerEvents }) {
    return `
        ${cursor ? `cursor: ${cursor}` : ''};
        ${pointerEvents ? `pointer-events: ${pointerEvents === 'box-none' ? 'none' : pointerEvents}` : ''};
    `;
}
//# sourceMappingURL=WebProps.js.map