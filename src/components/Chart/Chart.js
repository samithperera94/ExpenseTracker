import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
    console.warn(props, "props.dataPoints", props.dataPoints)
    const dataPointVlaues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointVlaues); //pulled out values from an array and use them as arguments
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => {
                return <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label} />
            })}
        </div>
    );
}

export default Chart;