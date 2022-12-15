const ChartBar = (dataPoint) => {
  let barFillHeight = "0%";

  if (dataPoint.max > 0) {
    barFillHeight = Math.round((dataPoint.value / dataPoint.max) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{
            height: barFillHeight,
          }}
        ></div>
      </div>
      <div className="chart-bar__label">{dataPoint.label}</div>
    </div>
  );
};

export default ChartBar;
