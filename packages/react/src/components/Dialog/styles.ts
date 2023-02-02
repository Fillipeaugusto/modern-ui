import * as Dialog from '@radix-ui/react-alert-dialog';
import { styled, keyframes } from '../../styles';

const overlayShow = keyframes({
	'0%': { opacity: 0 },
	'100%': { opacity: 1 },
});

const contentShow = keyframes({
	'0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
	'100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

export const DialogRoot = styled(Dialog.Root, {});
export const DialogTrigger = styled(Dialog.Trigger, {
	all: 'unset',
	cursor: 'pointer',
});
export const DialogPortal = styled(Dialog.Portal, {});
export const DialogClose = styled(Dialog.Cancel, {
	all: 'unset',
});
export const DialogAction = styled(Dialog.Action, {
	all: 'unset',
});

export const DialogOverlay = styled(Dialog.Overlay, {
	backgroundColor: '$gray900',
	position: 'fixed',
	inset: 0,
	animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

export const DialogContent = styled(Dialog.Content, {
	backgroundColor: '$gray800',
	borderRadius: 6,
	boxShadow:
		'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
	position: 'fixed',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '90vw',
	maxWidth: '500px',
	maxHeight: '85vh',
	padding: 25,
	animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

	'&:focus': { outline: 'none' },
});

export const DialogTitle = styled(Dialog.Title, {
	fontFamily: '$default',
	lineHeight: '$shorter',
	margin: 0,
	color: '$gray100',

	variants: {
		size: {
			sm: { fontSize: '$xl' },
			md: { fontSize: '$2xl' },
			lg: { fontSize: '$4xl' },
			'2xl': { fontSize: '$5xl' },
			'3xl': { fontSize: '$6xl' },
			'4xl': { fontSize: '$7xl' },
			'5xl': { fontSize: '$8xl' },
			'6xl': { fontSize: '$9xl' },
		},
	},

	defaultVariants: {
		size: 'md',
	},
});

export const DialogDescription = styled(Dialog.Description, {
	marginBottom: 20,
	fontFamily: '$default',
	color: '$slate',
	fontSize: 15,
	lineHeight: 1.5,
});

export const FlexEnd = styled('div', {
	display: 'flex',
	justifyContent: 'flex-end',
});

export const Button = styled('button', {
	all: 'unset',
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	borderRadius: 4,
	padding: '0 15px',
	fontSize: 15,
	lineHeight: 1,
	fontWeight: 500,
	height: 35,

	defaultVariants: {
		variant: 'violet',
	},
});
