import React, { ReactNode } from 'react';
export interface AnimatedPresenceProps {
    children: ReactNode;
}
export declare type AnimatedPresenceContextType = [boolean, () => void];
export declare const AnimatedPresenceContext: React.Context<AnimatedPresenceContextType>;
export declare function AnimatedPresence({ children }: AnimatedPresenceProps): JSX.Element;
