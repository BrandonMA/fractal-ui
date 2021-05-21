import React, { useRef, useEffect, useCallback } from 'react';

export function OutsideClickListener({ children, onOutsideClick }: { children: React.ReactNode; onOutsideClick: () => void }): JSX.Element {
    const wrapperRef = useRef<HTMLDivElement>(null);

    const handleOutsideClick = useCallback(
        (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                onOutsideClick();
            }
        },
        [onOutsideClick]
    );

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [handleOutsideClick]);

    return <div ref={wrapperRef}>{children}</div>;
}
