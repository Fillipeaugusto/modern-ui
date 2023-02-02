import type { StoryObj, Meta } from '@storybook/react';
import { BoxProps, Dialog, DialogProps, Text } from '@modernui/react';

export default {
	title: 'Surfaces/Dialog',
	component: Dialog,
	args: {
		title: 'Dialog Title',
		closeText: 'Cancel',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, harum nam. Et quasi doloribus placeat dicta, enim impedit totam officiis quis temporibus? Perspiciatis deleniti eos, quaerat minus tenetur optio magnam!',
	},
	argTypes: {
		children: {
			control: {
				type: null,
			},
		},
	},
};

export const Primary = {};
