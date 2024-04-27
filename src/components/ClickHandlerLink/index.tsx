import { forwardRef, MouseEvent } from 'react';
import type { InputHTMLAttributes } from 'react';

import { useHref, useLinkClickHandler } from 'react-router-dom';

import type { To } from 'react-router';

interface LinkProps extends InputHTMLAttributes<HTMLAnchorElement> {
	onClick?: (event: MouseEvent) => void;
	replace?: boolean;
	state?: string;
	target?: React.HTMLAttributeAnchorTarget;
	to: To;
	rest?: object;
}
export type Ref = HTMLAnchorElement;

// code from https://reactrouter.com/en/main/hooks/use-link-click-handler
const ClickHandlerLink = forwardRef<Ref, LinkProps>(
	({ onClick, replace = false, state, target, to, ...rest }, ref) => {
		const href = useHref(to);
		const handleClick = useLinkClickHandler(to, {
			replace,
			state,
			target,
		});

		return (
			<a
				{...rest}
				href={href}
				onClick={event => {
					onClick?.(event);
					if (!event.defaultPrevented) {
						handleClick(event);
					}
				}}
				ref={ref}
				target={target}
			/>
		);
	}
);

ClickHandlerLink.displayName = 'ClickHandlerLink';

export default ClickHandlerLink;
