import React from 'react';
import styles from './FAQ.module.css';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';

function FAQ() {
	return (
		<section
			id="questions"
			className={styles.block}>
			<div className="block__title">
				<div className="title__line"></div>Частые вопросы
				<div className="title__line"></div>
			</div>
			<Accordion allowToggle>
				<AccordionItem
					borderColor={'#956446'}
					borderTopWidth={'0.0625rem'}>
					<h2>
						<AccordionButton className={styles.accordion__item}>
							<Box className={styles.accordion__item}>Какие поблизости есть достопримечательности?</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel
						pb={'6'}
						className={styles.accordion__text}
						display="flex"
						gap="2rem">
						<Box className={styles.text__box}>
							<div className={styles.text__block}>
								<div className={styles.block__title}>
									Центральный парк имени И.А. Бунина (228 метров):
								</div>
								<div className={styles.block__text}>
									Прогулка в этом парке предложит вам возможность насладиться природой, подышать
									свежим воздухом, и насладиться спокойной и расслабляющей атмосферой.
								</div>
							</div>
							<div className={styles.text__block}>
								<div className={styles.block__title}>
									Памятник И.А. Бунину в городском парке (264 метров):
								</div>
								<div className={styles.block__text}>
									Это величественный памятник, посвящённый выдающемуся русскому писателю И.А. Бунину.
									Он является символом литературного наследия города и хорошая возможность
									для знакомства с историей и культурой региона.
								</div>
							</div>
							<div className={styles.text__block}>
								<div className={styles.block__title}>
									Ефремовский завод синтетического каучука (1.38 километра):
								</div>
								<div className={styles.block__text}>
									Эта промышленная достопримечательность может быть интересна для тех,
									кто интересуется историей и развитием промышленности. Вы можете узнать больше
									о производстве синтетического каучука и его важной роли в экономике региона.
								</div>
							</div>
							<div className={styles.text__block}>
								<div className={styles.block__title}>Стадион Химик (1.5 километра):</div>
								<div className={styles.block__text}>
									Если вы любите спорт и хотите посетить спортивное мероприятие, стадион Химик станет
									отличным местом для этого. Здесь можно насладиться футбольными матчами и другими
									видами спорта.
								</div>
							</div>
						</Box>
						<Box className={styles.text__box}>
							<div className={styles.text__block}>
								<div className={styles.block__title}>
									Ефремовский художественно-краеведческий музей (1.85 километра):
								</div>
								<div className={styles.block__text}>
									Этот музей предлагает увлекательную экскурсию в историю и культуру региона.
									Вы сможете узнать больше о местных художниках и искусстве, а также о богатстве
									и культурных традициях города.
								</div>
							</div>
							<div className={styles.text__block}>
								<div className={styles.block__title}>Дом-музей И.А. Бунина (1.94 километра):</div>
								<div className={styles.block__text}>
									Для любителей литературы и поклонников творчества И.А. Бунина, этот дом-музей
									является неотъемлемой частью путешествия. Здесь вы сможете ознакомиться с жизнью
									и творчеством выдающегося писателя.
								</div>
							</div>
							<div className={styles.text__block}>
								<div className={styles.block__title}>
									Памятник И.А. Бунину у вокзала (1.99 километра):
								</div>
								<div className={styles.block__text}>
									Этот памятник, расположенный у вокзала, символизирует связь И.А. Бунина с городом
									Ефремов и его важность как литературной фигуры. Это также может стать хорошей
									фотографической возможностью.
								</div>
							</div>
							<div className={styles.text__block}>
								<div className={styles.block__title}>
									Кафедральный Собор иконы Божией Матери Взыскание погибших (2 километра):
								</div>
								<div className={styles.block__text}>
									Собор представляет собой величественное здание и является одной из главных
									религиозных достопримечательностей города. Вы можете посетить его, чтобы насладиться
									архитектурой и религиозной атмосферой.
								</div>
							</div>
						</Box>
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem
					borderColor={'#956446'}
					borderTopWidth={'0.0625rem'}>
					<h2>
						<AccordionButton className={styles.accordion__item}>
							<Box className={styles.accordion__item}>В какое время заезд и выезд в отель?</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel
						pb={'6'}
						className={styles.accordion__text}>
						Обычно заселение в отель происходит после 14:00 (2 часа дня) по местному времени. Это время
						нужно для подготовки номеров после выезда предыдущих гостей и проведения уборки.
						Если вы прибываете в отель раньше указанного времени, возможно, вам придётся подождать некоторое
						время, чтобы получить доступ к вашему номеру.
						<br />
						<br />
						Что касается выезда, обычно надо освободить номер до 12:00 (полдень) по местному времени.
						Это время нужно для обеспечения тщательной уборки и подготовки номера перед прибытием следующих
						гостей.
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem
					borderColor={'#956446'}
					borderTopWidth={'0.0625rem'}>
					<h2>
						<AccordionButton className={styles.accordion__item}>
							<Box className={styles.accordion__item}>Есть ли поблизости магазины?</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel
						pb={'6'}
						className={styles.accordion__text}>
						Рядом с отелем «Счастье» находится крупный гипермаркет «Магнит». Это удобное расположение
						позволяет нашим гостям легко и быстро добраться до магазина для покупок и пополнения необходимых
						товаров.
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem
					borderColor={'#956446'}
					borderTopWidth={'0.0625rem'}>
					<h2>
						<AccordionButton className={styles.accordion__item}>
							<Box className={styles.accordion__item}>
								Разрешено ли проживание с домашними животными в отеле?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel
						pb={'6'}
						className={styles.accordion__text}>
						Мы рады сообщить, что проживание с домашними животными в отеле «Счастье» разрешено! Мы принимаем
						небольших собак и кошек в наших номерах, чтобы вы могли насладиться вашим отдыхом вместе
						со своими пушистыми друзьями.
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem
					borderColor={'#956446'}
					borderTopWidth={'0.0625rem'}>
					<h2>
						<AccordionButton className={styles.accordion__item}>
							<Box className={styles.accordion__item}>
								Есть ли услуги доставки еды и напитков в номер?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel
						pb={'6'}
						className={styles.accordion__text}>
						У нас в отеле «Счастье» предлагается удобная услуга доставки еды и напитков в номер из нашего
						кафе «Счастье». Если вы предпочитаете наслаждаться едой и напитками в комфорте своего номера,
						вы можете заказать пищу и напитки из нашего кафе и доставку прямо к вашей двери. Это отличная
						возможность насладиться вкусными блюдами и напитками без необходимости покидать комнату.
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem
					borderColor={'#956446'}
					borderTopWidth={'0.0625rem'}
					borderBottomWidth={'0.0625rem'}
					_last={false}>
					<h2>
						<AccordionButton className={styles.accordion__item}>
							<Box className={styles.accordion__item}>На каких языках говорит персонал отеля?</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel
						pb={'6'}
						className={styles.accordion__text}>
						Наш персонал говорит на русском и английском языках
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</section>
	);
}

export default FAQ;
