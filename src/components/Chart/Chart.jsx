import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          max={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
