import { match } from '../../ReactRouter';

export function isMatchExact(match: match | null): boolean {
    return match != null && match.isExact;
}
