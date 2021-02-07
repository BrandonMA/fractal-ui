import { BackgroundStyles } from './BackgroundStyles';
import { BorderStyles } from './BorderStyles';
import { DimensionStyles } from './DimensionStyles';
import { DisplayStyles } from './DisplayStyles';

export interface InlineStyles extends BackgroundStyles, DimensionStyles, DisplayStyles, BorderStyles {}
