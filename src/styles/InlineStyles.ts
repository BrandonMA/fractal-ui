import { BackgroundStyles } from './BackgroundStyles';
import { BorderStyles } from './BorderStyles';
import { DimensionStyles } from './DimensionStyles';
import { DisplayStyles } from './DisplayStyles';
import { ShadowStyles } from './ShadowStyles';

export interface InlineStyles extends BackgroundStyles, DimensionStyles, DisplayStyles, BorderStyles, ShadowStyles {}
