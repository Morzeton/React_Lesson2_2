import { useState } from 'react';
import classNames from 'classnames';
import styles from './App.module.css';
import data from './data.json';


export const App = () => {
	const steps = data;
  	const [activeIndex, setActiveIndex] = useState(0);

  	const isFirstStep = activeIndex === 0;
  	const isLastStep = activeIndex === steps.length - 1;

  	const handleNext = () => {
    	if (isLastStep) {
      	setActiveIndex(0);
    	} else {
		setActiveIndex(activeIndex + 1);
		}
	};

	const handlePrev = () => {
		if (!isFirstStep) {
		setActiveIndex(activeIndex - 1);
		}
	};

	const handleStepClick = (index) => {
		setActiveIndex(index);
	};

	return (
		<div className={styles.container}>
		<div className={styles.card}>
			<h1>Инструкция по готовке пельменей</h1>
			<h2>{steps[activeIndex].title}</h2>
			<div className={styles.steps}>
			<div className={styles['steps-content']}>
				{steps[activeIndex].content}
			</div>
			<ul className={styles['steps-list']}>
				{steps.map((step, index) => (
				<li
					key={index}
					className={classNames(
						styles['steps-item'],
						{
						  [styles.active]: index === activeIndex,
						  [styles.done]: index < activeIndex, // Пройденные шаги
						}
					  )}
					>
					<button
					className={styles['steps-item-button']}
					onClick={() => handleStepClick(index)}
					>
					{index + 1}
					</button>
					Шаг {index + 1}
				</li>
				))}
			</ul>
			<div className={styles['buttons-container']}>
				<button
				className={styles.button}
				onClick={handlePrev}
				disabled={isFirstStep}
				>
				Назад
				</button>
				<button className={styles.button} onClick={handleNext}>
				{isLastStep ? 'Начать сначала' : 'Далее'}
				</button>
			</div>
			</div>
		</div>
		</div>
	);
	};