export const LayoutConfig = {
    duration: 700,
    create: { type: 'spring', property: 'scaleXY', springDamping: 0.8 },
    update: { type: 'spring', springDamping: 0.8 },
    delete: { type: 'spring', property: 'scaleXY', springDamping: 0.8 }
};
