import React, { useState } from 'react';
import styles from './Header.module.css';
import { ReactComponent as Logo } from './../../Svg/logo.svg';
import { NavLink } from 'react-router-dom';
import { ABOUT, CONTACTS, GALLERY, QUESTIONS, REVIEWS, ROOMS, scrollById } from '../../constats';

function Header({ main }) {
	const [show, setShow] = useState(false);

	return (
		<header
			style={!main ? { backgroundColor: 'var(--accent-color)' } : null}
			className={styles.header}>
			<NavLink to="/">
				<Logo className={styles.logo} />
			</NavLink>
			{main ? (
				<>
					{' '}
					<div className={styles.header__links}>
						<NavLink
							onClick={(e) => {
								e.preventDefault();
								scrollById(ABOUT);
							}}
							to="/"
							className={styles.header__link}>
							О нас
						</NavLink>
						<NavLink
							onClick={(e) => {
								e.preventDefault();
								scrollById(ROOMS);
							}}
							to="/"
							className={styles.header__link}>
							Номера
						</NavLink>
						<NavLink
							onClick={(e) => {
								e.preventDefault();
								scrollById(GALLERY);
							}}
							to="/"
							className={styles.header__link}>
							Галерея
						</NavLink>
						<NavLink
							onClick={(e) => {
								e.preventDefault();
								scrollById(REVIEWS);
							}}
							to="/"
							className={styles.header__link}>
							Отзывы
						</NavLink>
						<NavLink
							onClick={(e) => {
								e.preventDefault();
								scrollById(QUESTIONS);
							}}
							to="/"
							className={styles.header__link}>
							Частые вопросы
						</NavLink>
						<NavLink
							onClick={(e) => {
								e.preventDefault();
								scrollById(CONTACTS);
							}}
							to="/"
							className={styles.header__link}>
							Контакты
						</NavLink>
					</div>
					<a
						href="tel:+79509141999"
						className={styles.header__link}>
						+7 (950) 914-19-99
					</a>
					<div className={styles.burger__menu}>
						<svg
							onClick={() => {
								setShow(true);
							}}
							width="36"
							height="26"
							viewBox="0 0 36 26"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<rect
								width="36"
								height="2"
								rx="1"
								fill="white"
							/>
							<rect
								y="12"
								width="36"
								height="2"
								rx="1"
								fill="white"
							/>
							<rect
								y="24"
								width="36"
								height="2"
								rx="1"
								fill="white"
							/>
						</svg>
					</div>
					<div className={show ? styles.burger__show : styles.burger__hide}>
						<svg
							onClick={() => {
								setShow(false);
							}}
							className={styles.burger__btn}
							width="25"
							height="25"
							viewBox="0 0 25 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M13.9687 12.5004L18.4479 8.03161C18.6441 7.83546 18.7543 7.56942 18.7543 7.29202C18.7543 7.01463 18.6441 6.74859 18.4479 6.55244C18.2518 6.35629 17.9857 6.24609 17.7083 6.24609C17.4309 6.24609 17.1649 6.35629 16.9687 6.55244L12.5 11.0316L8.03125 6.55244C7.8351 6.35629 7.56906 6.24609 7.29166 6.24609C7.01427 6.24609 6.74823 6.35629 6.55208 6.55244C6.35593 6.74859 6.24574 7.01463 6.24574 7.29202C6.24574 7.56942 6.35593 7.83546 6.55208 8.03161L11.0312 12.5004L6.55208 16.9691C6.45445 17.0659 6.37695 17.1812 6.32407 17.3081C6.27119 17.435 6.24396 17.5712 6.24396 17.7087C6.24396 17.8462 6.27119 17.9824 6.32407 18.1093C6.37695 18.2362 6.45445 18.3514 6.55208 18.4483C6.64892 18.5459 6.76413 18.6234 6.89106 18.6763C7.018 18.7292 7.15415 18.7564 7.29166 18.7564C7.42918 18.7564 7.56533 18.7292 7.69227 18.6763C7.8192 18.6234 7.93441 18.5459 8.03125 18.4483L12.5 13.9691L16.9687 18.4483C17.0656 18.5459 17.1808 18.6234 17.3077 18.6763C17.4347 18.7292 17.5708 18.7564 17.7083 18.7564C17.8458 18.7564 17.982 18.7292 18.1089 18.6763C18.2359 18.6234 18.3511 18.5459 18.4479 18.4483C18.5455 18.3514 18.623 18.2362 18.6759 18.1093C18.7288 17.9824 18.756 17.8462 18.756 17.7087C18.756 17.5712 18.7288 17.435 18.6759 17.3081C18.623 17.1812 18.5455 17.0659 18.4479 16.9691L13.9687 12.5004Z"
								fill="white"
							/>
						</svg>
						<div className={styles.header__links}>
							<NavLink
								onClick={(e) => {
									e.preventDefault();
									setShow(false);
									scrollById(ABOUT);
								}}
								to="/"
								className={styles.header__link}>
								О нас
							</NavLink>
							<NavLink
								onClick={(e) => {
									e.preventDefault();
									setShow(false);
									scrollById(ROOMS);
								}}
								to="/"
								className={styles.header__link}>
								Номера
							</NavLink>
							<NavLink
								onClick={(e) => {
									e.preventDefault();
									setShow(false);
									scrollById(GALLERY);
								}}
								to="/"
								className={styles.header__link}>
								Галерея
							</NavLink>
							<NavLink
								onClick={(e) => {
									e.preventDefault();
									setShow(false);
									scrollById(REVIEWS);
								}}
								to="/"
								className={styles.header__link}>
								Отзывы
							</NavLink>
							<NavLink
								onClick={(e) => {
									e.preventDefault();
									setShow(false);
									scrollById(QUESTIONS);
								}}
								to="/"
								className={styles.header__link}>
								Частые вопросы
							</NavLink>
							<NavLink
								onClick={(e) => {
									e.preventDefault();
									setShow(false);
									scrollById(CONTACTS);
								}}
								to="/"
								className={styles.header__link}>
								Контакты
							</NavLink>
						</div>
						<a
							href="tel:+79509141999"
							className={styles.header__link}>
							+7 (950) 914-19-99
						</a>
					</div>
				</>
			) : null}
		</header>
	);
}

export default Header;
