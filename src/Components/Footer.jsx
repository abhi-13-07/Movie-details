import React from 'react';
import { GitHub as GitHubIcon } from '@material-ui/icons';

const Footer = () => {
	return (
		<footer>
			<div className="social-links">
				<GitHubIcon />
			</div>
			<div className="icons-attribute">
				Icons made by{' '}
				<a
					href="https://www.flaticon.com/authors/prosymbols"
					title="Prosymbols"
				>
					Prosymbols{' '}
				</a>
				from{' '}
				<a href="https://www.flaticon.com/" title="Flaticon">
					www.flaticon.com
				</a>
			</div>
		</footer>
	);
};

export default Footer;
