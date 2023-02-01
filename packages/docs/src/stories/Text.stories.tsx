import type { StoryObj, Meta } from '@storybook/react';
import { Text, TextProps } from '@modernui/react';

export default {
	title: 'Typography/Text',
	component: Text,
	args: {
		size: 'md',
		children:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis adipisci rem blanditiis reiciendis similique dolorem quis odio dolores aperiam, at odit maxime repellendus nesciunt sunt aliquid eos consequatur distinctio eligendi.',
	},
	argTypes: {
		size: {
			options: [
				'xxs',
				'xs',
				'sm',
				'md',
				'lg',
				'xl',
				'2xl',
				'4xl',
				'5xl',
				'6xl',
				'7xl',
				'8xl',
				'9xl',
			],
			control: 'inline-radio',
		},
	},
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};
export const CustomTag: StoryObj<TextProps> = {
	args: {
		children: 'Strong Text',
		as: 'strong',
	},
};
