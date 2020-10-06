import { TabBarItemVariant } from '../TabBarItemVariant';

export function getTabIconSize(variant?: TabBarItemVariant): number {
    return variant === 'circular' ? 30 : 24;
}
