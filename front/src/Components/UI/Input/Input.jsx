import { Textarea } from '@chakra-ui/react';
import styles from './Input.module.css';
import React from 'react';

export const Input = ({
	value,
	name,
	onChange,
	className,
	placeholder,
	type,
	errorText,
	error,
	onKeyDown,
	title,
	pattern,
	isTextArea,
}) => {
	const handleChange = (e) => {
		onChange(name, e.target.value);
	};

	return (
		<div className={styles.input__form}>
			<div className={styles.title}>{title}</div>

			{isTextArea ? (
				<Textarea
					value={value}
					onChange={handleChange}
					border="none"
					focusBorderColor="#875B52"
					height="8rem"
					size="sm"
					resize="none"
					borderBottom={'1px solid var(--accent-color)'}
				/>
			) : (
				<div className={styles.input__area}>
					<div className="input__group">
						<input
							pattern={pattern}
							value={value}
							onChange={handleChange}
							className={className}
							placeholder={placeholder}
							type={type}
						/>
					</div>
					{error && (
						<svg
							width="25"
							height="25"
							viewBox="0 0 25 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M12.5 0C5.625 0 0 5.625 0 12.5C0 19.375 5.625 25 12.5 25C19.375 25 25 19.375 25 12.5C25 5.625 19.375 0 12.5 0ZM12.5 18.75C11.75 18.75 11.25 18.25 11.25 17.5C11.25 16.75 11.75 16.25 12.5 16.25C13.25 16.25 13.75 16.75 13.75 17.5C13.75 18.25 13.25 18.75 12.5 18.75ZM13.75 12.5C13.75 13.25 13.25 13.75 12.5 13.75C11.75 13.75 11.25 13.25 11.25 12.5V7.5C11.25 6.75 11.75 6.25 12.5 6.25C13.25 6.25 13.75 6.75 13.75 7.5V12.5Z"
								fill="#B3261E"
							/>
						</svg>
					)}
					{error && <div className={styles.error__text}>{errorText}</div>}
				</div>
			)}
		</div>
	);
};
