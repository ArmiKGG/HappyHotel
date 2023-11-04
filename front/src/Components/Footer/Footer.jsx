import React from 'react';
import styles from './Footer.module.css';

import { NavLink } from 'react-router-dom';
import { ABOUT, CONTACTS, GALLERY, QUESTIONS, REVIEWS, ROOMS, SERVICES, scrollById } from '../../constats';

function Footer({ main }) {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__navigation}>
				{main ? (
					<>
						<div className={styles.footer__links}>
							<NavLink
								to="/"
								onClick={(e) => {
									e.preventDefault();
									scrollById(ABOUT);
								}}
								className={styles.footer__link}>
								О нас
							</NavLink>
							<NavLink
								to="/"
								onClick={(e) => {
									e.preventDefault();
									scrollById(ROOMS);
								}}
								className={styles.footer__link}>
								Номера
							</NavLink>
							<NavLink
								to="/"
								onClick={(e) => {
									e.preventDefault();
									scrollById(SERVICES);
								}}
								className={styles.footer__link}>
								Наши услуги
							</NavLink>
							<NavLink
								to="/"
								onClick={(e) => {
									e.preventDefault();
									scrollById(REVIEWS);
								}}
								className={styles.footer__link}>
								Отзывы
							</NavLink>
						</div>
						<div className={styles.footer__links}>
							<NavLink
								to="/"
								onClick={(e) => {
									e.preventDefault();
									scrollById(GALLERY);
								}}
								className={styles.footer__link}>
								Галерея
							</NavLink>
							<NavLink
								to="/"
								onClick={(e) => {
									e.preventDefault();
									scrollById(QUESTIONS);
								}}
								className={styles.footer__link}>
								Частые вопросы
							</NavLink>
							<NavLink
								to="/"
								onClick={(e) => {
									e.preventDefault();
									scrollById(CONTACTS);
								}}
								className={styles.footer__link}>
								Контакты
							</NavLink>
						</div>
					</>
				) : null}

				<a
					href="https://yandex.ru/maps/-/CDURuR8h"
					target="blank"
					className={styles.footer__contact}>
					Ефремов, <br />
					Тульское шоссе, д 4
				</a>
				<div className={styles.footer__links}>
					<a
						href="tel:+79509141999"
						className={styles.footer__contact}>
						+7 (950) 914-19-99
					</a>
					<a
						href="mailto:efremovexpert@mail.ru"
						className={styles.footer__contact}>
						efremovexpert@mail.ru
					</a>
				</div>
			</div>
			<div className={styles.footer__privacy}>
				<img
					src={require('./../../Img/logo.png')}
					alt=""
				/>
				<div className={styles.footer__copyright}>
					<span>Copyright @2023</span>
					<span className={styles.footer__divider}></span>
					<NavLink
						to="/privacy"
						className={styles.footer__sublink}>
						Политика конфиденциальности
					</NavLink>
					<span className={styles.footer__divider}></span>
					<NavLink
						to="/rules"
						className={styles.footer__sublink}>
						Правила бронирования и проживания
					</NavLink>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
