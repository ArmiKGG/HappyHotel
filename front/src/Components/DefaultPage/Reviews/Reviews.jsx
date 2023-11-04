import React from 'react';
import styles from './Reviews.module.css';
import ReviewItem from './ReviewItem/ReviewItem';

import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';

const reviews = [
	{
		id: 1,
		name: 'Екатерина',
		text: 'Я останавливалась в отеле «Счастье» в Ефремове на выходные и была приятно удивлена. Номер был чистым, с удобной кроватью и хорошей ванной комнатой. За такую доступную цену это отличный выбор!',
		date: '2 февраля 2023 года',
		img: require('./../../../Img/reviews/1.png'),
	},
	{
		id: 2,
		name: 'Сергей',
		text: 'Отель понравился! Чистые и уютные номера, великолепная обстановка и замечательное обслуживание. Я остался доволен от своего пребывания',
		date: '1 марта 2021 года',
		img: require('./../../../Img/reviews/2.png'),
	},
	{
		id: 3,
		name: 'Яна',
		text: 'Отель предоставил нормальное пребывание и соотношение цены и качества. Номера простые, но чистые. Отдельный плюс за свою парковку',
		date: '20 августа 2019 года',
		img: require('./../../../Img/reviews/3.png'),
	},
	{
		id: 4,
		name: 'Александра',
		text: 'Вежливый администратор, прекрасное обслуживание, быстрое заселение',
		date: '15 августа 2019 года',
		img: require('./../../../Img/reviews/4.png'),
	},
	{
		id: 5,
		name: 'Денис',
		text: 'Мне все понравилось. Отличное месторасположение. Номер небольшой, но уютный',
		date: '5 апреля 2018 года',
		img: require('./../../../Img/reviews/5.png'),
	},
	{
		id: 6,
		name: 'Павел',
		text: 'Спасибо за гостеприимство. Отличный номер, сотрудники, всё было чудесно. Отличное постельное бельё, удобная, кровать и подушки',
		date: '10 октября 2017 года',
		img: require('./../../../Img/reviews/6.png'),
	},
];

const responsive = {
	300: { items: 1 },
	1200: { items: 2, itemsFit: 'fill' },
	1800: { items: 3 },
};

function Reviews() {
	return (
		<section
			id="reviews"
			className={styles.reviews}>
			<div className={styles.reviews__header}>
				{' '}
				<div className="block__title">
					<div className="title__line"></div>Отзывы
					<div className="title__line"></div>
				</div>
			</div>
			<AliceCarousel
				mouseTracking
				items={reviews.map((el, index) => {
					return (
						<ReviewItem
							key={index}
							id={el.id}
							name={el.name}
							text={el.text}
							date={el.date}
							img={el.img}
						/>
					);
				})}
				responsive={responsive}
				controlsStrategy="responsive"
			/>
			{/* <div className={styles.reviews__slider}></div> */}
		</section>
	);
}

export default Reviews;
