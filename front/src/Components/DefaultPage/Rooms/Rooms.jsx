import React from 'react';
import styles from './Rooms.module.css';
import RoomItem from './RoomItem/RoomItem';

const rooms = [
	{
		id: 1,
		type: 'standard',
		name: 'Номер Стандарт',
		maxPerson: 2,
		text: 'В этом номере вы найдете удобную кровать, хорошую мебель и необходимое оборудование для проживания',
		price: 2200,
		img: require('./../../../Img/rooms/room_standart.png'),
		modalImages: [
			require('./../../../Img/rooms/standart/standart_1.png'),
			require('./../../../Img/rooms/standart/standart_2.png'),
			require('./../../../Img/rooms/standart/standart_3.png'),
			require('./../../../Img/rooms/standart/standart_4.png'),
			require('./../../../Img/rooms/standart/standart_5.png'),
		],
	},
	{
		id: 2,
		type: 'luxe',
		name: 'Номер Люкс',
		maxPerson: 3,
		text: 'Люксовый номер предлагает более просторное проживание с дополнительными удобствами',
		price: 3400,
		img: require('./../../../Img/rooms/room_lux.png'),
		modalImages: [
			require('./../../../Img/rooms/lux/lux_1.png'),
			require('./../../../Img/rooms/lux/lux_2.png'),
			require('./../../../Img/rooms/lux/lux_3.png'),
			require('./../../../Img/rooms/lux/lux_4.png'),
		],
	},
	{
		id: 3,
		type: 'luxe plus',
		name: 'Номер Люкс +',
		maxPerson: 3,
		text: 'Этот вариант для тех, кто хочет насладиться еще большим комфортом с обновленным ремонтом',
		price: 3700,
		img: require('./../../../Img/rooms/room_lux_plus.png'),
		modalImages: [
			require('./../../../Img/rooms/lux+/lux_plus_1.png'),
			require('./../../../Img/rooms/lux+/lux_plus_2.png'),
			require('./../../../Img/rooms/lux+/lux_plus_3.png'),
			require('./../../../Img/rooms/lux+/lux_plus_4.png'),
			require('./../../../Img/rooms/lux+/lux_plus_5.png'),
		],
	},
	{
		id: 4,
		type: 'luxe premium',
		name: 'Номер Люкс Премиум',
		maxPerson: 4,
		text: 'Идеальный выбор для компании или семьи, которая ищет удобное и просторное проживание',
		price: 4200,
		img: require('./../../../Img/rooms/room_premium.png'),
		modalImages: [
			require('./../../../Img/rooms/premium/premium_1.png'),
			require('./../../../Img/rooms/premium/premium_2.png'),
		],
	},
];

function Rooms({ data }) {
	return (
		<section
			id="rooms"
			className={!data ? styles.rooms : styles.rooms__book}>
			{!data && (
				<div className="block__title">
					<div className="title__line"></div>Номера
					<div className="title__line"></div>
				</div>
			)}

			{rooms.map((el, index) => {
				if (data !== null) {
					if (data[el.type] > 0) {
						return (
							<RoomItem
								key={index}
								{...el}
								isBook={data}
							/>
						);
					}
				} else {
					return (
						<RoomItem
							key={index}
							{...el}
							isBook={data}
						/>
					);
				}
			})}
		</section>
	);
}

export default Rooms;
