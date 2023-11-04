import React from 'react';
import styles from './Preferences.module.css';
import { ReactComponent as Wifi } from './../../../Svg/wifi.svg';
import { ReactComponent as Conditioner } from './../../../Svg/conditioner.svg';
import { ReactComponent as Car } from './../../../Svg/car.svg';
import { ReactComponent as Market } from './../../../Svg/market.svg';
import { ReactComponent as Laundry } from './../../../Svg/laundry.svg';
import { ReactComponent as Cafe } from './../../../Svg/cafe.svg';

function Preferences() {
	return (
		<section className={styles.preferences}>
			<div className="block__title">
				<div className="title__line"></div>Наши преимущества
				<div className="title__line"></div>
			</div>
			<div className={styles.preferences__items}>
				<div className={styles.item}>
					<Wifi />
					Wifi,
					<br />
					Цифровое ТВ
				</div>
				<div className={styles.item}>
					<Conditioner />
					Кондиционер
				</div>
				<div className={styles.item}>
					<Car />
					Бесплатная
					<br />
					парковка
				</div>
				<div className={styles.item}>
					<Market />
					Гипермаркет
					<br />
					рядом
				</div>
				<div className={styles.item}>
					<Laundry />
					Услуги
					<br />
					прачечной
				</div>
				<div className={styles.item}>
					<Cafe />
					Кафе
					<br />
					«Счастье»
				</div>
			</div>
		</section>
	);
}

export default Preferences;
