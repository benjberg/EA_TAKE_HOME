import React from 'react';
import { ChartPie, ChartThemeColor } from '@patternfly/react-charts';
import "../styles/pieChart.css";

 const PieChart = (props) => (
  <div className='pieChart' >
      <p className='pieTitle'>Student's Average SAT:</p>
    <ChartPie
      ariaDesc="Average admittance SAT"
      ariaTitle="Pie chart example"
      constrainToVisibleArea={true}
      data={props.data}
      height={275}
      labels={({ datum }) => `${datum.x}: ${datum.y}`}
      legendData={[{ name: 'Math: 700' }, { name: 'Writing: 640' }, { name: 'Critical Reading: 665' }]}
      legendPosition="bottom"
      legendAllowWrap={true}
      padding={{
        bottom: 75,
        top: 20
      }}
      centerTitle='true'
      themeColor={ChartThemeColor.multiOrdered}
      width={300}
      className='pie'
    />
  </div>
)

export default PieChart;