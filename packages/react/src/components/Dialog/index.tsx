import { ComponentProps, ElementType, ReactNode } from 'react';
import { Button } from '../Button';
import {
	DialogAction,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogOverlay,
	DialogPortal,
	DialogRoot,
	DialogTitle,
	DialogTrigger,
	FlexEnd,
} from './styles';

export interface DialogProps {
	children: ReactNode;
	title: string;
	description: string;
	closeButton: ReactNode;
	actionButton: ReactNode;
}

export function Dialog({
	children = <Button variant="tertiary">Open Dialog</Button>,
	title,
	description,
	closeButton = <Button variant="tertiary">Cancel</Button>,
	actionButton = <Button variant="primary">Submit</Button>,
}: DialogProps) {
	return (
		<DialogRoot>
			<DialogTrigger>{children}</DialogTrigger>
			<DialogPortal>
				<DialogOverlay />
				<DialogContent>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>{description}</DialogDescription>
					<FlexEnd>
						<DialogClose>{closeButton}</DialogClose>
						<DialogAction>{actionButton}</DialogAction>
					</FlexEnd>
				</DialogContent>
			</DialogPortal>
		</DialogRoot>
	);
}

Dialog.displayName = 'Dialog';

// export interface DialogProps extends ComponentProps<typeof Dialog> {
// 	as?: ElementType;
// }
