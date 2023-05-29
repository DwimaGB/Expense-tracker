import ChartBar from './ChartBar';
import './Chart.css';

export default function Chart(props) {

    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const maxTotalAmount = Math.max(...dataPointsValues);

    console.log(maxTotalAmount);
    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => (
                <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={maxTotalAmount} label={dataPoint.label} />))}
        </div>
    );
}