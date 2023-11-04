import React from 'react';
import styles from './Contacts.module.css';
import { Map, Placemark, RoutePanel, YMaps } from '@pbe/react-yandex-maps';

function Contacts() {
	return (
		<section
			id="contacts"
			className={styles.contacts}>
			<div className={styles.contacts__block}>
				<div className="block__title">
					<div className="title__line"></div>Контакты
					<div className="title__line"></div>
				</div>
				<div className={styles.list}>
					<div className={styles.list__item}>
						<svg
							width="40"
							height="40"
							viewBox="0 0 40 40"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M23.4163 10C25.0442 10.3176 26.5402 11.1138 27.713 12.2866C28.8858 13.4594 29.682 14.9555 29.9996 16.5834M23.4163 3.33337C26.7984 3.7091 29.9522 5.22367 32.36 7.62839C34.7677 10.0331 36.2863 13.1851 36.6663 16.5667M17.0446 23.1052C15.0419 21.1025 13.4606 18.8381 12.3006 16.4221C12.2008 16.2143 12.151 16.1104 12.1126 15.9789C11.9764 15.5116 12.0743 14.9379 12.3576 14.5421C12.4373 14.4308 12.5326 14.3355 12.7231 14.145C13.3058 13.5623 13.5971 13.271 13.7876 12.978C14.5059 11.8732 14.5059 10.4489 13.7876 9.34409C13.5971 9.05113 13.3058 8.75979 12.7231 8.17711L12.3983 7.85233C11.5126 6.96659 11.0697 6.52373 10.5941 6.28315C9.64817 5.8047 8.53106 5.8047 7.58512 6.28315C7.10949 6.52373 6.66662 6.9666 5.78088 7.85233L5.51816 8.11506C4.63545 8.99776 4.1941 9.43911 3.85702 10.0392C3.48299 10.705 3.21405 11.7392 3.21632 12.5029C3.21837 13.1911 3.35188 13.6615 3.61889 14.6022C5.05384 19.6579 7.7613 24.4285 11.7413 28.4085C15.7212 32.3884 20.4918 35.0959 25.5475 36.5308C26.4882 36.7978 26.9586 36.9313 27.6469 36.9334C28.4106 36.9357 29.4447 36.6667 30.1105 36.2927C30.7106 35.9556 31.152 35.5143 32.0347 34.6316L32.2974 34.3688C33.1831 33.4831 33.626 33.0402 33.8666 32.5646C34.345 31.6187 34.345 30.5016 33.8666 29.5556C33.626 29.08 33.1831 28.6371 32.2974 27.7514L31.9726 27.4266C31.3899 26.8439 31.0986 26.5526 30.8056 26.3621C29.7008 25.6438 28.2765 25.6438 27.1717 26.3621C26.8787 26.5526 26.5874 26.8439 26.0047 27.4266C25.8142 27.6171 25.7189 27.7124 25.6076 27.7921C25.2119 28.0755 24.6381 28.1733 24.1708 28.0371C24.0394 27.9988 23.9354 27.9489 23.7276 27.8491C21.3116 26.6891 19.0472 25.1078 17.0446 23.1052Z"
								stroke="#956446"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<div className={styles.item__title}>Телефон</div>
						<a
							href="tel:+79509141999"
							className={styles.item__text}>
							+7 (950) 914-19-99
						</a>
					</div>
					<span className={styles.item__border}></span>
					<div className={styles.list__item}>
						<svg
							width="40"
							height="40"
							viewBox="0 0 40 40"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M22.9068 4.38934L35.4535 12.5447C35.8968 12.8329 36.1185 12.977 36.2791 13.1691C36.4213 13.3393 36.528 13.5361 36.5932 13.748C36.6668 13.9874 36.6668 14.2518 36.6668 14.7805V27C36.6668 29.8003 36.6668 31.2004 36.1219 32.27C35.6425 33.2108 34.8776 33.9757 33.9368 34.4551C32.8672 35 31.4671 35 28.6668 35H11.3335C8.53323 35 7.1331 35 6.06354 34.4551C5.12273 33.9757 4.35783 33.2108 3.87846 32.27C3.3335 31.2004 3.3335 29.8003 3.3335 27V14.7805C3.3335 14.2518 3.3335 13.9874 3.40711 13.748C3.47228 13.5361 3.57907 13.3393 3.72124 13.1691C3.88185 12.977 4.10352 12.8329 4.54686 12.5447L17.0936 4.38934M22.9068 4.38934C21.8547 3.70549 21.3287 3.36357 20.7619 3.23053C20.2609 3.11293 19.7395 3.11293 19.2385 3.23053C18.6717 3.36357 18.1456 3.70549 17.0936 4.38934M22.9068 4.38934L33.2271 11.0975C34.3735 11.8427 34.9467 12.2153 35.1452 12.6878C35.3187 13.1007 35.3187 13.5661 35.1452 13.979C34.9467 14.4515 34.3735 14.8241 33.2271 15.5692L22.9068 22.2774C21.8547 22.9613 21.3287 23.3032 20.7619 23.4362C20.2609 23.5538 19.7395 23.5538 19.2385 23.4362C18.6717 23.3032 18.1456 22.9613 17.0936 22.2774L6.77327 15.5692C5.62685 14.8241 5.05364 14.4515 4.85512 13.979C4.68163 13.5661 4.68163 13.1007 4.85512 12.6878C5.05364 12.2153 5.62685 11.8427 6.77327 11.0975L17.0936 4.38934M35.8335 31.6667L24.7621 21.6667M15.2382 21.6667L4.16683 31.6667"
								stroke="#956446"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<div className={styles.item__title}>Почта</div>
						<a
							href="mailto:efremovexpert@mail.ru"
							className={styles.item__text}>
							efremovexpert@mail.ru
						</a>
					</div>
					<span className={styles.item__border}></span>
					<div className={styles.list__item}>
						<svg
							width="40"
							height="40"
							viewBox="0 0 40 40"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M8.3335 23.8106C5.24789 25.1718 3.3335 27.0687 3.3335 29.1667C3.3335 33.3088 10.7954 36.6667 20.0002 36.6667C29.2049 36.6667 36.6668 33.3088 36.6668 29.1667C36.6668 27.0687 34.7524 25.1718 31.6668 23.8106M30.0002 13.3334C30.0002 20.1062 22.5002 23.3334 20.0002 28.3334C17.5002 23.3334 10.0002 20.1062 10.0002 13.3334C10.0002 7.81053 14.4773 3.33337 20.0002 3.33337C25.523 3.33337 30.0002 7.81053 30.0002 13.3334ZM21.6668 13.3334C21.6668 14.2538 20.9206 15 20.0002 15C19.0797 15 18.3335 14.2538 18.3335 13.3334C18.3335 12.4129 19.0797 11.6667 20.0002 11.6667C20.9206 11.6667 21.6668 12.4129 21.6668 13.3334Z"
								stroke="#956446"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<div className={styles.item__title}>Адрес</div>
						<a
							href="https://yandex.ru/maps/-/CDURuR8h"
							target="blank"
							className={styles.item__text}>
							{' '}
							Ефремов,
							<br />
							Тульское шоссе, д 4
						</a>
					</div>
					<span className={styles.item__border}></span>
					<div className={styles.list__item}>
						<svg
							width="41"
							height="40"
							viewBox="0 0 41 40"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M20.1418 10V20L26.8557 23.3334M36.9267 20C36.9267 29.2048 29.4118 36.6667 20.1418 36.6667C10.8718 36.6667 3.35693 29.2048 3.35693 20C3.35693 10.7953 10.8718 3.33337 20.1418 3.33337C29.4118 3.33337 36.9267 10.7953 36.9267 20Z"
								stroke="#956446"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<div className={styles.item__title}>Часы работы</div>
						<div className={styles.item__text}>Круглосуточно</div>
					</div>
				</div>
				<YMaps
					enterprise
					query={{
						apikey: 'ec5316ab-5c7b-4485-87d4-c84899a47cd5',
					}}>
					<Map
						width={'100%'}
						height={'40rem'}
						defaultState={{
							center: [53.146731, 38.096473],
							zoom: 19,
							controls: ['fullscreenControl'],
						}}
						modules={['control.FullscreenControl']}>
						<Placemark
							geometry={[53.146731, 38.096473]}
							options={{
								iconLayout: 'islands#dotIcon',
								iconColor: '#875B52',
								iconImageSize: [40, 40],

								// iconImageHref: require('./../../../Img/logo.png'),
							}}
						/>
						<RoutePanel
							instanceRef={(ref) => {
								if (ref) {
									ref.routePanel.state.set({
										type: 'masstransit',
										fromEnabled: true,
										toEnabled: false,
										to: [53.146731, 38.096473],
									});
									ref.routePanel.options.set({
										float: 'left',
										autofocus: false,
										allowSwitch: true,
										reverseGeocoding: true,
										types: { masstransit: true, pedestrian: true, taxi: true, auto: true },
									});
								}
							}}
							defaultOptions={{
								float: 'left',
								autofocus: false,
								allowSwitch: true,
								reverseGeocoding: true,
								types: { masstransit: true, pedestrian: true, taxi: true },
							}}
							defaultState={{ fromEnabled: false, toEnabled: false, to: [53.146731, 38.096473] }}
						/>
					</Map>
				</YMaps>
			</div>
		</section>
	);
}

export default Contacts;
