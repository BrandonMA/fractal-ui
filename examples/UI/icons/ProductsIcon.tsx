import React, { memo } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const ProductsIcon = memo(
    (props: SvgProps): JSX.Element => {
        return (
            <Svg viewBox='0 0 30 30' width={60} height={60} {...props}>
                <Path d='M23 14a3.953 3.953 0 01-2.005-.554A3.952 3.952 0 0119 14a3.959 3.959 0 01-2-.556A3.959 3.959 0 0115 14a3.959 3.959 0 01-2-.556A3.959 3.959 0 0111 14c-.73 0-1.405-.211-1.995-.554A3.953 3.953 0 017 14c-.727 0-1.4-.21-1.988-.55A3.965 3.965 0 013 14v11a2 2 0 002 2h12V17h6v10h2a2 2 0 002-2V14c-.734 0-1.42-.203-2.012-.55-.588.34-1.261.55-1.988.55zm-10 9H7v-6h6v6zM26 6H4V5a2 2 0 012-2h18a2 2 0 012 2v1zm-6 0h-3v4a2 2 0 104 0l-1-4zm6 0h-3l2 4a2 2 0 104 0l-3-4z' />
                <Path d='M20 6h-3v4a2 2 0 104 0l-1-4zM10 6h3v4a2 2 0 11-4 0l1-4zM4 6h3l-2 4a2 2 0 11-4 0l3-4z' />
            </Svg>
        );
    }
);
