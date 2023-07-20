export const sliderCharts = () => {
  const startDate = new Date();
  const numPoints = 30;
  const initialPrice = 0.0000015;
  const volatility = 0.4;
  const updateInterval = 600;
  const duration = 0;
  const svg = d3.select("#chart");
  const width = +svg.attr("width");
  const height = +svg.attr("height");
  const margin = { top: 20, right: 30, bottom: 30, left: 40 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const data = [];
  const btn1Slider = document.querySelector('.btn1-slider')
  const btn2Slider = document.querySelector('.btn2-slider')
  const btn3Slider = document.querySelector('.btn3-slider')

  let count = 0
  let dataChart = [];
  let pricesData = generatePriceData(startDate, numPoints, initialPrice, volatility, "accumulation");
  let interval = setInterval(() => { addDataPoint(pricesData) }, updateInterval);

  const xScale = d3.scaleLinear().range([0, innerWidth]);
  const yScale = d3.scaleLinear().range([innerHeight, 0]);
  const line = d3.line().x((d, i) => xScale(i)).y(d => yScale(d));

  btn2Slider.className = 'firstBlock--container__schedule--buttons__bgButtons btn2-slider active'

  // Generate initial data points
  data.push(...pricesData);

  const g = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  g.append("g")
    .attr("class", "y-axis")
    .attr("color", `#3D3D3D`)
    .call(d3.axisLeft(yScale));

  g.append("g")
    .attr("class", "grid")
    .attr("transform", `translate(0,${innerHeight})`)
    .call(d3.axisBottom(xScale).tickSize(-innerHeight).tickFormat(''))

  g.append("g")
    .attr("class", "grid")
    .call(d3.axisLeft(yScale).tickSize(-innerWidth).tickFormat(''))

  const path = g
    .append("path")
    .datum(data)
    .attr("class", "line")
    .attr("fill", "none")
    .attr("stroke-width", "2px")
    .attr("stroke", "#FF7A00");

  xScale.domain([0, numPoints - 1]);
  yScale.domain([d3.min(data), d3.max(data)]);

  function addDataPoint(pricesData) {
    data.push(pricesData[count]);
    data.shift();

    xScale.domain([data.length - numPoints, data.length - 1]);
    yScale.domain([d3.min(data), d3.max(data)]);

    // Update the line with smooth transitions and translate it to the left
    path.transition()
      .duration(duration / 2) // Duration for the transition
      .attr("d", line)
      .attr("transform", null) // Reset the transform
      .transition()
      .ease(d3.easeLinear)
      .attr("transform", `translate(${xScale(0)}, 0)`); // Translate the line to the left

    // Update the x-axis and y-axis with smooth transitions
    g.select(".x-axis")
      .transition()
      .duration(duration / 2)
      .call(d3.axisBottom(xScale));

    g.select(".y-axis")
      .transition()
      .duration(duration / 2)
      .call(d3.axisLeft(yScale));


    dataChart.push(pricesData[count]);
    count += 1;
    // Check if we need to regenerate data
    if (!pricesData[count]) {
      clearInterval(interval);
      count = 0;
      const _pricesData = generatePriceData(startDate, numPoints, dataChart[dataChart.length - 1], volatility, "accumulation");
      interval = setInterval(() => { addDataPoint(_pricesData) }, updateInterval);
      path.attr("stroke", "#FF7A00");

      btn1Slider.className = 'firstBlock--container__schedule--buttons__bgButtons btn1-slider'
      btn2Slider.className = 'firstBlock--container__schedule--buttons__bgButtons btn1-slider active'
      btn3Slider.className = 'firstBlock--container__schedule--buttons__bgButtons btn2-slider'
    }
  }

  btn1Slider.addEventListener('click', function (e) {
    e.preventDefault();
    clearInterval(interval);
    count = 0;
    const _pricesData = generatePriceData(startDate, numPoints, dataChart[dataChart.length - 1], volatility, "aggressive");
    console.log(_pricesData)
    interval = setInterval(() => { addDataPoint(_pricesData) }, updateInterval);
    path.attr("stroke", "#0FFBE4");

    btn1Slider.className = 'firstBlock--container__schedule--buttons__bgButtons btn1-slider active'
    btn2Slider.className = 'firstBlock--container__schedule--buttons__bgButtons btn1-slider'
    btn3Slider.className = 'firstBlock--container__schedule--buttons__bgButtons btn2-slider'
  });

  btn2Slider.addEventListener('click', function (e) {
    e.preventDefault();
    clearInterval(interval);
    count = 0;
    const _pricesData = generatePriceData(startDate, numPoints, dataChart[dataChart.length - 1], volatility, "accumulation");
    console.log(_pricesData)
    interval = setInterval(() => { addDataPoint(_pricesData) }, updateInterval);
    path.attr("stroke", "#FF7A00");

    btn1Slider.className = 'firstBlock--container__schedule--buttons__bgButtons btn1-slider'
    btn2Slider.className = 'firstBlock--container__schedule--buttons__bgButtons btn1-slider active'
    btn3Slider.className = 'firstBlock--container__schedule--buttons__bgButtons btn2-slider'
  });

  btn3Slider.addEventListener('click', function (e) {
    e.preventDefault();
    clearInterval(interval);
    count = 0;
    const _pricesData = generatePriceData(startDate, numPoints, dataChart[dataChart.length - 1], volatility, "profit");
    console.log(_pricesData)
    interval = setInterval(() => { addDataPoint(_pricesData) }, updateInterval);
    path.attr("stroke", "#FF3628");

    btn1Slider.className = 'firstBlock--container__schedule--buttons__bgButtons btn1-slider'
    btn2Slider.className = 'firstBlock--container__schedule--buttons__bgButtons btn1-slider'
    btn3Slider.className = 'firstBlock--container__schedule--buttons__bgButtons btn2-slider active'
  });

};


// Function to generate price data with more small jumps during growth and fall
function generatePriceData(startDate, numPoints, initialPrice, volatility, forecastScenario) {
  const priceData = [];
  // let currentDate = new Date(startDate);

  for (let i = 0; i < numPoints; i++) {
    const priceChange = (Math.random() - 0.5) * 2 * volatility;
    let newPrice = initialPrice + priceChange;

    if (forecastScenario === "aggressive") {
      const growthModifier = Math.random() < 0.6 ? 0.02 : 0;
      newPrice += newPrice * (0.02 + growthModifier);
    } else if (forecastScenario === "accumulation") {
      // No additional price changes during accumulation level
    } else if (forecastScenario === "profit") {
      const fallModifier = Math.random() < 0.6 ? -0.02 : 0;
      newPrice += newPrice * (-0.02 + fallModifier);
    }

    priceData.push(newPrice);
    // currentDate.setMinutes(currentDate.getMinutes() + 30);
    initialPrice = newPrice; // Update the initialPrice for the next iteration
  }

  return priceData;
}