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
	externalLink?: boolean;
	rest?: object;
}
export type Ref = HTMLAnchorElement;

// code from https://reactrouter.com/en/main/hooks/use-link-click-handler
const ClickHandlerLink = forwardRef<Ref, LinkProps>(
	(
		{ onClick, replace = false, state, target, to, externalLink, ...rest },
		ref
	) => {
		const href = useHref(to);
		const handleClick = useLinkClickHandler(to, {
			replace,
			state,
			target,
		});

		return (
			<a
				{...rest}
				href={externalLink ? (to as string) : href}
				onClick={event => {
					onClick?.(event);
					if (!externalLink && !event.defaultPrevented) {
						handleClick(event);
					}
				}}
				ref={ref}
				rel={externalLink ? 'noreferrer' : ''}
				target={externalLink ? '_blank' : target}
			/>
		);
	}
);

ClickHandlerLink.displayName = 'ClickHandlerLink';

export default ClickHandlerLink;
