import React from 'react';
import About from './About/About';
import Contacts from './Contacts/Contacts';

import FAQ from './FAQ/FAQ';
import Footer from '../Footer/Footer';
import Gallery from './Gallery/Gallery';
import Header from '../Header/Header';
import Preferences from './Preferences/Preferences';
import PreviewBlock from './PreviewBlock/PreviewBlock';
import Reviews from './Reviews/Reviews';
import Rooms from './Rooms/Rooms';
import Services from './ServicesBlock/Services';
import Feedback from './Feedback/Feedback';

function DefaultPage() {
	window.scrollTo(0, 0);
	return (
		<div>
			<Header main={true} />
			<PreviewBlock />
			<About />
			<Preferences />
			<Rooms />
			<Services />
			<Gallery />
			<Reviews />
			<FAQ />
			<Feedback />
			<Contacts />
			<Footer main={true} />
		</div>
	);
}

export default DefaultPage;
