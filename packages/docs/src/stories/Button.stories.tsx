import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '@modernui/react';
import { ArrowRight } from 'phosphor-react';

export default {
	title: 'Form/Button',
	component: Button,
	args: {
		children: 'Send',
		size: 'md',
	},
	argTypes: {
		variant: {
			options: ['primary', 'secondary', 'tertiary'],
			control: 'inline-radio',
		},
		size: {
			options: ['sm', 'md'],
			control: 'inline-radio',
		},
		disabled: {
			control: {
				type: 'boolean',
			},
		},
		onClick: {
			action: 'click',
		},
	},
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
	args: {
		variant: 'secondary',
		children: 'Create new',
	},
};

export const Tertiary: StoryObj<ButtonProps> = {
	args: {
		variant: 'tertiary',
		children: 'Cancel',
	},
};

export const Small: StoryObj<ButtonProps> = {
	args: {
		size: 'sm',
	},
};

export const WithIcon: StoryObj<ButtonProps> = {
	args: {
		children: (
			<>
				Próximo passo
				<ArrowRight weight="bold" />
			</>
		),
	},
};

export const Disabled: StoryObj<ButtonProps> = {
	args: {
		disabled: true,
	},
};
