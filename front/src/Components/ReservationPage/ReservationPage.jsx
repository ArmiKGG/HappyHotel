import React from 'react';
import styles from './ReservationPage.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DateFrame from '../UI/DateFrame/DateFrame';
import Form from '../UI/Form/Form';
import { ReactComponent as Calendar } from './../../Svg/calendar.svg';
import { ReactComponent as Persons } from './../../Svg/persons.svg';
import { ReactComponent as Bed } from './../../Svg/Bed.svg';
import { getRooms } from '../../Redux/slices/userSlice';
import { useDispatch } from 'react-redux';

function ReservationPage() {
	const dispatch = useDispatch();
	const [toDate, setToDate] = React.useState(new Date());

	const [fromDate, setFromDate] = React.useState(new Date());

	const [persons, setPersons] = React.useState({ adults: 0, child: 0 });

	const [formState, setFormState] = React.useState({
		nameValue: '',
		lastNameValue: '',
		telValue: '',
		commentsValue: '',
		checked: false,
	});
	const [validationState, setValidationState] = React.useState({
		validName: false,
		validLastName: false,
		validTel: false,
		validChecked: false,
	});

	const handleSubmit = () => {
		dispatch(getRooms({ start_date: toDate, end_date: fromDate, persons: persons.adults + persons.child }));
	};

	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<Header main={false} />
			<div className="block__page">
				<div className="block__title">
					<div className="title__line"></div>Онлайн бронирование
					<div className="title__line"></div>
				</div>
				<div className={styles.reservation__page}>
					<DateFrame
						main={false}
						toDate={toDate}
						setToDate={setToDate}
						fromDate={fromDate}
						setFromDate={setFromDate}
						persons={persons}
						setPersons={setPersons}
					/>
					<div className={styles.page__data}>
						<div className={styles.data__block}>
							<div className={styles.data__title}>Данные бронирования</div>
							<div className={styles.reservation__data}>
								<div className={styles.reservation__data__block}>
									<div className={styles.reservation__data__block__title}>
										<Calendar />
										Дата заезда
									</div>
									<div className={styles.reservation__data__block__text}>25 августа 2023 года</div>
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
									<div className={styles.reservation__data__block__text}>28 августа 2023 года</div>
								</div>
								<div className={styles.reservation__data__block}>
									<div className={styles.reservation__data__block__title}>
										<Persons />
										Количество гостей
									</div>
									<div className={styles.reservation__data__block__text}>Взрослые: 1</div>
									<div className={styles.reservation__data__block__text}>Дети: 1</div>
								</div>
								<div className={styles.reservation__data__block}>
									<div className={styles.reservation__data__block__title}>
										<Bed />
										Бронирование
									</div>
									<div className={styles.reservation__data__block__text}>1 Номер Люкс</div>
									<div className={styles.reservation__data__block__info}>
										<span>Стоимость</span>
										<span>3 400 ₽</span>
									</div>
									<div className={styles.reservation__data__block__info}>
										<span>Количество ночей</span>
										<span>3 ночи</span>
									</div>
								</div>
								<div className={styles.reservation__data__result}>
									<span>Итого</span>
									<span>10 200 ₽</span>
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
								send={handleSubmit}
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer main={false} />
		</div>
	);
}

export default ReservationPage;
