import { SetterOrUpdater } from 'recoil';
export declare function useToggleItemFromMap<Key, T>(active: boolean, key: Key, item: T, setMap: SetterOrUpdater<Map<Key, T>>): void;
