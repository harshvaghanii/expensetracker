import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaxValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          max={totalMaxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
