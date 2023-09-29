import React from 'react';
import styles from './ReservationPage.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DateFrame from '../UI/DateFrame/DateFrame';

import { getRooms, sendBook } from '../../Redux/slices/userSlice';
import { useDispatch } from 'react-redux';

import { useLocation, useParams } from 'react-router-dom';

import { getNightsCount } from '../../constats';
import LoaderData from './LoaderData/LoaderData';

function ReservationPage() {
	const dispatch = useDispatch();

	const params = useParams();
	let { state } = useLocation();

	const [toDate, setToDate] = React.useState(state?.toDate ? state.toDate : new Date());

	const [fromDate, setFromDate] = React.useState(state?.fromDate ? state.fromDate : new Date());

	const [persons, setPersons] = React.useState(state?.persons ? state.persons : { adults: 0, child: 0 });

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
		console.log(params);
		if (!params.type) {
			dispatch(getRooms({ start_date: toDate, end_date: fromDate, persons: persons.adults + persons.child }));
		} else {
			dispatch(
				getRooms({
					start_date: toDate,
					end_date: fromDate,
					persons: persons.adults + persons.child,
					type: params.type,
				}),
			);
		}
	};

	const bookSubmit = () => {
		if (Object.values(validationState).every((el) => el === false))
			dispatch(
				sendBook({
					first_name: formState.nameValue,
					last_name: formState.lastNameValue,
					phone_number: formState.telValue,
					comment: formState.commentsValue,
					start_date: toDate,
					end_date: fromDate,
					amount: persons.child + persons.adults,
					type: params.type,
					nights: getNightsCount(toDate, fromDate) + 1,
				}),
			);
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
					<LoaderData
						toDate={toDate}
						fromDate={fromDate}
						persons={persons}
						setToDate={setToDate}
						setFromDate={setFromDate}
						handleSubmit={handleSubmit}
						setPersons={setPersons}
						formState={formState}
						setFormState={setFormState}
						validationState={validationState}
						setValidationState={setValidationState}
						bookSubmit={bookSubmit}
						params={params}
					/>
				</div>
			</div>
			<Footer main={false} />
		</div>
	);
}

export default ReservationPage;
