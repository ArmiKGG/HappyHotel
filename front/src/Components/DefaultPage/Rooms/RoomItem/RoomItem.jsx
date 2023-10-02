import React, { useState } from 'react';
import styles from './RoomItem.module.css';
import { ReactComponent as Persons } from './../../../../Svg/persons.svg';
import { ReactComponent as BathRoom } from './../../../../Svg/bathtub.svg';
import { ReactComponent as Conditioner } from './../../../../Svg/conditioner.svg';
import { ReactComponent as Wifi } from './../../../../Svg/wifi.svg';
import { ReactComponent as Windy } from './../../../../Svg/windy.svg';
import { ReactComponent as Slippers } from './../../../../Svg/slippers.svg';
import { ReactComponent as Fridge } from './../../../../Svg/fridge.svg';
import { useDisclosure } from '@chakra-ui/react';
import ModalImages from '../../../UI/ModalImages/ModalImages';
import { NavLink, useNavigate } from 'react-router-dom';
import { selectRoom } from '../../../../Redux/slices/userSlice';
import { useDispatch } from 'react-redux';

function RoomItem({ id, name, type, text, maxPerson, img, price, modalImages, isBook }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [currentImage, setCurrentImage] = useState(0);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<div className={!isBook ? styles.room__item : styles.room__item__column}>
			<img
				src={img}
				alt=""
				onClick={onOpen}
			/>
			<div className={styles.info__block}>
				<div className={styles.info__header}>
					<div className={styles.room__name}>{name}</div>
					<div className={styles.room__persons}>
						<Persons />
						{`до ${maxPerson}-х мест`}
					</div>
				</div>
				<div className={styles.info__text}>{text}</div>
				<div className={styles.info__services}>
					В стоимость номера входит:
					<div className={styles.services__items}>
						<div className={styles.service__item}>
							<BathRoom /> ванная комната с душем
						</div>
						<div className={styles.service__item}>
							<Conditioner /> кондиционер
						</div>
						<div className={styles.service__item}>
							<Wifi /> интернет и ТВ
						</div>
						<div className={styles.service__item}>
							<Windy /> фен
						</div>
						<div className={styles.service__item}>
							<Slippers /> тапочки
						</div>
						{id !== 1 ? (
							<div className={styles.service__item}>
								<Fridge /> холодильник
							</div>
						) : null}
					</div>
				</div>
				<div className={styles.info__footer}>
					<div className={styles.info__price}>
						<span>Стоимость:</span>
						<span>{`${price} ₽ / сутки`}</span>
					</div>
					<div className={styles.footer__buttons}>
						{isBook ? (
							<button
								onClick={() => {
									dispatch(selectRoom({ id, name, type, price }));
									navigate(`/reservation/${type}`);
								}}
								className={styles.primary__btn}>
								Забронировать
							</button>
						) : (
							<NavLink
								to={`/reservation/${type}`}
								onClick={() => {
									dispatch(selectRoom({ id, name, type, price }));
								}}
								className={styles.primary__btn}>
								Забронировать
							</NavLink>
						)}
						<button
							onClick={onOpen}
							className={styles.secondary__btn}>
							Cмотреть фото
						</button>
					</div>
				</div>
			</div>
			<ModalImages
				isOpen={isOpen}
				onClose={onClose}
				currentImage={currentImage}
				setCurrentImage={setCurrentImage}
				images={modalImages}
			/>
		</div>
	);
}

export default RoomItem;
