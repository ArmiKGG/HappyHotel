import { useState } from 'react';
import styles from './DateFrame.module.css';
import { ReactComponent as Arrow } from './../../../Svg/chevron-down.svg';
import InputDate from './InputDate/InputDate';
import { ReactComponent as Minus } from './../../../Svg/minus.svg';
import { ReactComponent as Plus } from './../../../Svg/plus.svg';
import { normalize_count_form } from '../../../constats';
import { Link } from 'react-router-dom';

function DateFrame({ main, toDate, setToDate, fromDate, setFromDate, persons, setPersons, handleSubmit }) {
	const [toShow, setToShow] = useState(false);

	const [fromShow, setFromShow] = useState(false);

	const [personsShow, setPersonsShow] = useState(false);

	return (
		<div className={!main ? styles.date__frame + ' ' + styles.without__bg : styles.date__frame}>
			<InputDate
				from={false}
				value={toDate}
				setValue={setToDate}
				show={toShow}
				setShow={() => {
					setToShow(!toShow);
					setFromShow(false);
					setPersonsShow(false);
				}}
			/>
			<InputDate
				from={true}
				value={fromDate}
				setValue={setFromDate}
				show={fromShow}
				setShow={() => {
					setToShow(false);
					setFromShow(!fromShow);
					setPersonsShow(false);
				}}
			/>
			<div className={styles.input__date}>
				<div
					className={styles.click__side}
					onClick={() => {
						setToShow(false);
						setFromShow(false);
						setPersonsShow(!personsShow);
					}}>
					<div className={styles.input__text_side}>
						<span className={styles.input__title}>Количество гостей</span>
						<span className={styles.input__text}>{`${persons.adults + persons.child} ${normalize_count_form(
							persons.adults + persons.child,
							['гость', 'гостя', 'гостей'],
						)}`}</span>
					</div>
					<Arrow />
				</div>

				{personsShow ? (
					<div className={styles.persons__modal}>
						<div className={styles.modal__item}>
							<div className={styles.item__title}>Взрослые</div>
							<div className={styles.item__input__side}>
								<Minus
									onClick={() => {
										if (persons.adults !== 0) {
											setPersons({ ...persons, adults: --persons.adults });
										}
									}}
								/>
								<span className={styles.item__count}>{persons.adults}</span>
								<Plus
									onClick={() => {
										setPersons({ ...persons, adults: ++persons.adults });
									}}
								/>
							</div>
						</div>
						<div className={styles.modal__item}>
							<div className={styles.item__title}>Дети</div>
							<div className={styles.item__input__side}>
								<Minus
									onClick={() => {
										if (persons.child !== 0) {
											setPersons({ ...persons, child: --persons.child });
										}
									}}
								/>
								<span className={styles.item__count}>{persons.child}</span>
								<Plus
									onClick={() => {
										setPersons({ ...persons, child: ++persons.child });
									}}
								/>
							</div>
						</div>
					</div>
				) : null}
			</div>
			{fromDate > toDate && window.location.pathname === '/' && persons.adults > 0 ? (
				<Link
					to="/reservation"
					className={styles.search__btn}
					onClick={handleSubmit}
					state={{ toDate: toDate, fromDate: fromDate, persons: persons }}>
					Найти номер
				</Link>
			) : (
				<button
					className={styles.search__btn}
					onClick={handleSubmit}
					state={{ toDate: toDate, fromDate: fromDate, persons: persons }}>
					Найти номер
				</button>
			)}
		</div>
	);
}

export default DateFrame;
