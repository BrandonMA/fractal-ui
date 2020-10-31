import { match } from '../../ReactRouter';

export function isMatchExact(match: match | null) {
    return match && match.isExact;
}
