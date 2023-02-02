import { ComponentProps, ElementType } from 'react';
import { styled } from '../styles';

export const Button = styled('button', {
	all: 'unset',
	borderRadius: '$sm',
	fontSize: '$sm',
	fontWeight: '$medium',
	fontFamily: '$default',
	textAlign: 'center',
	minWidth: 120,
	boxSizing: 'border-box',
	padding: '0 $4',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '$2',

	cursor: 'pointer',

	svg: {
		width: '$4',
		height: '$4',
	},

	'&:disabled': {
		cursor: 'not-allowed',
	},

	variants: {
		variant: {
			primary: {
				color: '$white',
				background: '$green500',

				'&:not(:disabled):hover': {
					background: '$green300',
				},

				'&:disabled': {
					backgroundColor: '$gray200',
				},
			},

			secondary: {
				color: '$green300',
				border: '2px solid $ignite500',

				'&:not(:disabled):hover': {
					background: '$green500',
					color: '$white',
				},

				'&:disabled': {
					color: '$gray200',
					borderColor: '$gray200',
				},
			},

			tertiary: {
				color: '$gray100',

				'&:not(:disabled):hover': {
					color: '$white',
				},

				'&:disabled': {
					color: '$gray600',
				},
			},
			outlined: {
				color: '$gray100',
				border: '2px solid $green500',
				background: 'rgba(0, 179, 126, 0.24)',
				boxShadow: ' 0 4px 30px rgba(0, 0, 0, 0.1)',
				backdropFilter: 'blur(6.8px)',
				'-webkit-backdrop-filter': 'blur(6.8px)',
				'&:not(:disabled):hover': {
					color: '$white',
				},

				'&:disabled': {
					color: '$gray600',
				},
			},
		},

		size: {
			sm: {
				height: 38,
			},

			md: {
				height: 46,
			},
		},
	},

	defaultVariants: {
		variant: 'primary',
		size: 'md',
	},
});

export interface ButtonProps extends ComponentProps<typeof Button> {
	as?: ElementType;
}

Button.displayName = 'Button';
