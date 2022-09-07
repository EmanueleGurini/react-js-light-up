import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import styles from './DoughnutChart.module.css'

// DoughtnutChart Example
// https://codesandbox.io/s/t64th?file=/App.tsx:317-318

ChartJS.register(ArcElement, Tooltip, Legend);


const DoughnutChart = ({performanceValue}) => {

	let gap = 100 - performanceValue;
	let performance = 100 - gap;

	const data = {
  labels: ['Performance', 'Gap'],
  datasets: [
    {
      label: 'Punteggio',
      data: [performance, gap],
			backgroundColor: [
				'rgba(206, 212, 218)',
        'rgba(233, 236, 239)'],
      borderWidth: 2,
    },
  ],
};

	return (
		<div className={styles['doughnut-chart']}>
			<Doughnut data={data} />
		</div>
	)
}

export default DoughnutChart