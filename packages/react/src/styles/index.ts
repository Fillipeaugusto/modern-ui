import {
	colors,
	fonts,
	fontSizes,
	fontWeights,
	lineHeights,
	radii,
	space,
} from '@modernui/tokens';
import { createStitches, defaultThemeMap } from '@stitches/react';

export const {
	styled,
	css,
	globalCss,
	keyframes,
	getCssText,
	theme,
	createTheme,
	config,
} = createStitches({
	themeMap: {
		...defaultThemeMap,
		height: 'space',
		width: 'space',
	},
	theme: {
		colors: colors,
		fontSizes: fontSizes,
		fontWeights: fontWeights,
		fonts: fonts,
		linneHeights: lineHeights,
		radii: radii,
		space: space,
	},
});
