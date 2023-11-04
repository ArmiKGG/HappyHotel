import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../../UI/Spinner/Spinner';
import Rooms from '../../DefaultPage/Rooms/Rooms';
import Services from '../../DefaultPage/ServicesBlock/Services';
import styles from './LoaderData.module.css';

import { ReactComponent as Calendar } from './../../../Svg/calendar.svg';
import { ReactComponent as Persons } from './../../../Svg/persons.svg';
import { ReactComponent as Bed } from './../../../Svg/Bed.svg';
import { getNightsCount, normalize_count_form } from '../../../constats';
import Form from '../../UI/Form/Form';
import DateFrame from '../../UI/DateFrame/DateFrame';

function LoaderData({
	toDate,
	fromDate,
	formState,
	setToDate,
	setFromDate,
	setPersons,
	handleSubmit,
	setFormState,
	validationState,
	setValidationState,
	bookSubmit,
	params,
	persons,
}) {
	const { data, isLoading, isError, selectedRoomData } = useSelector((state) => state.userSlice);

	const isSearched = useMemo(() => {
		if (data !== null) return Object.values(data).some((value) => value > 0);
	}, [data]);

	const isNotSelected = useMemo(() => isSearched && !selectedRoomData?.id, [isSearched, selectedRoomData?.id]);

	const isSelectedParamsChecker = useMemo(() => {
		if (data !== null) return data[params.type] > 0 || data[selectedRoomData.type];
	}, [data, params.type, selectedRoomData.type]);

	if (isLoading)
		return (
			<>
				<DateFrame
					main={false}
					toDate={toDate}
					setToDate={setToDate}
					fromDate={fromDate}
					setFromDate={setFromDate}
					persons={persons}
					setPersons={setPersons}
					handleSubmit={handleSubmit}
				/>
				<Spinner />
			</>
		);

	if (isError)
		return (
			<>
				<DateFrame
					main={false}
					toDate={toDate}
					setToDate={setToDate}
					fromDate={fromDate}
					setFromDate={setFromDate}
					persons={persons}
					setPersons={setPersons}
					handleSubmit={handleSubmit}
				/>
				<div className="error__text">Произошла ошибка, попробуйте позднее</div>
			</>
		);

	if (data === null)
		return (
			<DateFrame
				main={false}
				toDate={toDate}
				setToDate={setToDate}
				fromDate={fromDate}
				setFromDate={setFromDate}
				persons={persons}
				setPersons={setPersons}
				handleSubmit={handleSubmit}
			/>
		);

	if (isNotSelected)
		return (
			<>
				<DateFrame
					main={false}
					toDate={toDate}
					setToDate={setToDate}
					fromDate={fromDate}
					setFromDate={setFromDate}
					persons={persons}
					setPersons={setPersons}
					handleSubmit={handleSubmit}
				/>
				<Rooms data={data} />
				<Services isBook={true} />
			</>
		);

	if (!isNotSelected && !isSelectedParamsChecker)
		return (
			<>
				<DateFrame
					main={false}
					toDate={toDate}
					setToDate={setToDate}
					fromDate={fromDate}
					setFromDate={setFromDate}
					persons={persons}
					setPersons={setPersons}
					handleSubmit={handleSubmit}
				/>
				<div className="text__center">К сожалению, в указанный Вами период нет свободных номеров</div>
			</>
		);

	return (
		<div className={styles.page__data}>
			<div className={styles.data__block}>
				<div className={styles.data__title}>Данные бронирования</div>
				<div className={styles.reservation__data}>
					<div className={styles.reservation__data__block}>
						<div className={styles.reservation__data__block__title}>
							<Calendar />
							Дата заезда
						</div>
						<div className={styles.reservation__data__block__text}>
							{toDate.toLocaleString('ru-RU', {
								year: 'numeric',
								month: 'long',
								day: 'numeric',
							})}
						</div>
					</div>
					<svg
						width="35"
						height="35"
						viewBox="0 0 35 35"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M17.5 5.83325V29.1666M17.5 29.1666L26.25 20.4166M17.5 29.1666L8.75 20.4166"
							stroke="#875B52"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>

					<div className={styles.reservation__data__block}>
						<div className={styles.reservation__data__block__title}>
							<Calendar />
							Дата выезда
						</div>
						<div className={styles.reservation__data__block__text}>
							{fromDate.toLocaleString('ru-RU', {
								year: 'numeric',
								month: 'long',
								day: 'numeric',
							})}
						</div>
					</div>
					<div className={styles.reservation__data__block}>
						<div className={styles.reservation__data__block__title}>
							<Persons />
							Количество гостей
						</div>
						<div className={styles.reservation__data__block__text}>Взрослые: {persons.adults}</div>
						<div className={styles.reservation__data__block__text}>Дети: {persons.child}</div>
					</div>
					<div className={styles.reservation__data__block}>
						<div className={styles.reservation__data__block__title}>
							<Bed />
							Бронирование
						</div>
						<div className={styles.reservation__data__block__text}>{selectedRoomData.name}</div>
						<div className={styles.reservation__data__block__info}>
							<span>Стоимость</span>
							<span>{selectedRoomData.price} ₽</span>
						</div>
						<div className={styles.reservation__data__block__info}>
							<span>Количество ночей</span>
							<span>{`${getNightsCount(toDate, fromDate)} ${normalize_count_form(
								getNightsCount(toDate, fromDate),
								['ночь', 'ночи', 'ночей'],
							)}`}</span>
						</div>
					</div>
					<div className={styles.reservation__data__result}>
						<span>Итого</span>
						<span>{getNightsCount(toDate, fromDate) * selectedRoomData.price} ₽</span>
					</div>
				</div>
			</div>
			<div className={styles.data__block}>
				<div className={styles.data__title}>Данные о госте</div>
				<Form
					formState={formState}
					setFormState={setFormState}
					validationState={validationState}
					setValidationState={setValidationState}
					send={bookSubmit}
				/>
			</div>
		</div>
	);
}

export default LoaderData;
