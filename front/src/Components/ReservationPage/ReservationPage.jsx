import React from 'react';
import styles from './ReservationPage.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useDisclosure, useToast } from '@chakra-ui/react';
import { getRooms, sendBook } from '../../Redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';

import { useLocation, useParams } from 'react-router-dom';

import { cyrillicPattern, getDateToString, getNightsCount, telPattern } from '../../constats';
import LoaderData from './LoaderData/LoaderData';
import ModalStatus from '../UI/ModalStatus/ModalStatus';

function ReservationPage() {
	const dispatch = useDispatch();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { isError, isSuccess } = useSelector((state) => state.userSlice);
	const params = useParams();

	let { state } = useLocation();
	const toast = useToast();

	const [toDate, setToDate] = React.useState(state?.toDate ? state.toDate : new Date());

	const [fromDate, setFromDate] = React.useState(state?.fromDate ? state.fromDate : new Date());

	const [persons, setPersons] = React.useState(state?.persons ? state.persons : { adults: 0, child: 0 });

	const [formState, setFormState] = React.useState({
		nameValue: '',
		lastNameValue: '',
		telValue: '',
		commentsValue: '',
		checked: false,
		type: '',
	});
	const [validationState, setValidationState] = React.useState({
		validName: false,
		validLastName: false,
		validTel: false,
		validChecked: false,
	});

	const { nameValue, lastNameValue, telValue, commentsValue, checked, type } = formState;

	const handleSubmit = () => {
		if (fromDate > toDate) {
			if (persons.adults > 0) {
				if (!params.type) {
					dispatch(
						getRooms({
							start_date: getDateToString(toDate),
							end_date: getDateToString(fromDate),
							persons: persons.adults + persons.child,
						}),
					);
				} else {
					dispatch(
						getRooms({
							start_date: getDateToString(toDate),
							end_date: getDateToString(fromDate),
							persons: persons.adults + persons.child,
							type: params.type,
						}),
					);
				}
			} else {
				toast({
					title: 'Внимание',
					description: 'В заявке должен быть как минимум 1 взрослый человек',
					status: 'warning',
					duration: 4000,
					isClosable: true,
					variant: 'customError',
				});
			}
		} else {
			toast({
				title: 'Внимание',
				description: 'Дата заезда должна быть раньше даты выезда',
				status: 'warning',
				duration: 4000,
				isClosable: true,
				variant: 'customError',
			});
		}
	};

	const bookSubmit = () => {
		const isNameValid = cyrillicPattern.test(nameValue.trim().replace(/\s/g, ''));
		const isLastNameValid = cyrillicPattern.test(lastNameValue.trim().replace(/\s/g, ''));
		const isTelValid = telPattern.test(telValue);
		const isCheckedValid = checked;

		setValidationState({
			validName: !isNameValid,
			validLastName: !isLastNameValid,
			validTel: !isTelValid,
			validChecked: !isCheckedValid,
		});
		if (isNameValid && isLastNameValid && isTelValid && isCheckedValid) {
			dispatch(
				sendBook({
					first_name: nameValue,
					last_name: lastNameValue,
					phone_number: telValue,
					comment: commentsValue !== '' ? commentsValue : 'Нет комментариев',
					start_date: getDateToString(toDate),
					end_date: getDateToString(fromDate),
					amount: persons.child + persons.adults,
					type: params.type,
					nights: getNightsCount(toDate, fromDate),
				}),
			);

			onOpen();
			setFormState({
				nameValue: '',
				lastNameValue: '',
				telValue: '',
				commentsValue: '',
				checked: false,
				type: '',
			});
		}
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
					<ModalStatus
						isOpen={isOpen}
						onClose={onClose}
						goMain={true}
						isError={isError}
						isSuccess={isSuccess}
					/>
				</div>
			</div>
			<Footer main={false} />
		</div>
	);
}

export default ReservationPage;
