import React from 'react';
import { ChartDonut,ChartThemeColor } from '@patternfly/react-charts';
import "../styles/donutChart.css";

 const RightAlignedLegend = (props) => {
 
  return(
  <div className='donutBody'>
    <ChartDonut
      ariaDesc={props.ariaDesc}
      ariaTitle="Donut chart example"
      constrainToVisibleArea={true}
      data={props.data}
      labels={({ datum }) => `${datum.x}: ${datum.y}%`}
      themeColor={ChartThemeColor.multiOrdered}
      subTitle={props.subtitle}
      title={props.title}
      width={350}
    />
  </div>)
 }

export default RightAlignedLegend;