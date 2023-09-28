import React from 'react';
import styles from './Form.module.css';

import { cyrillicPattern, setClassNameByValid, telPattern } from '../../../constats';
import CheckBoxArea from '../CheckBoxArea/CheckBoxArea';
import { NavLink } from 'react-router-dom';
import { Input } from '../Input/Input';

function Form({ formState, setFormState, validationState, setValidationState, send }) {
	const { nameValue, lastNameValue, telValue, commentsValue, checked } = formState;
	const { validName, validLastName, validTel, validChecked } = validationState;

	const handleSubmit = () => {
		setValidationState({
			validName: !cyrillicPattern.test(nameValue),
			validLastName: !cyrillicPattern.test(lastNameValue),
			validTel: !telPattern.test(telValue),
			validChecked: !checked,
		});
	};

	function changeCheckbox() {
		setFormState({ ...formState, checked: !checked });
	}
	const handleChange = (name, value) => {
		setFormState({ ...formState, [name]: value });
	};

	const checkSpace = (e) => {
		if (e.which === 32) {
			e.preventDefault();
			return false;
		}
	};
	return (
		<div className={styles.form}>
			<Input
				title="Имя*"
				value={nameValue}
				name="nameValue"
				className={setClassNameByValid(validName)}
				placeholder=""
				type="text"
				onKeyDown={checkSpace}
				onChange={handleChange}
				error={validName}
				errorText="Введите имя на кириллице"
			/>
			<Input
				title="Фамилия*"
				value={lastNameValue}
				name="lastNameValue"
				className={setClassNameByValid(validLastName)}
				placeholder=""
				type="text"
				onKeyDown={checkSpace}
				onChange={handleChange}
				error={validLastName}
				errorText="Введите фамилию на кириллице"
			/>
			<Input
				title="Телефон*"
				value={telValue}
				name="telValue"
				pattern={telPattern}
				className={setClassNameByValid(validTel)}
				placeholder=""
				type="text"
				onKeyDown={checkSpace}
				onChange={handleChange}
				error={validTel}
				errorText="Неверный формат номера"
			/>
			<Input
				title="Комментарий"
				value={commentsValue}
				name="commentsValue"
				className={setClassNameByValid(false)}
				placeholder=""
				onKeyDown={checkSpace}
				onChange={handleChange}
				isTextArea={true}
			/>

			<CheckBoxArea
				className={styles.checkbox}
				checked={checked}
				onChange={changeCheckbox}
				error={validChecked}
				errorText="Пожалуйста, подтвердите Ваше согласие">
				<span>
					Я согласен с{' '}
					<NavLink
						to="/privacy"
						className={styles.underline__text}>
						политикой конфидециальности
					</NavLink>{' '}
					и<br />
					<NavLink
						to="/rules"
						className={styles.underline__text}>
						правилами бронирования
					</NavLink>
				</span>
			</CheckBoxArea>
			<button
				className={styles.primary__btn}
				onClick={handleSubmit}>
				Забронировать
			</button>
		</div>
	);
}

export default Form;
