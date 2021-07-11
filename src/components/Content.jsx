import React from 'react';
import StaticData from './StaticData';
import Chart from './Chart';
import PieChart from './PieChart'
import Button from './Button'
import {GetData} from '../hooks';
import '../styles/content.css'

const Content = () => {
 const school_info = GetData().school_info
 const programGraph = GetData().programdata
 const ethnicGraph = GetData().ethnicData
 const pieChart = GetData().pieData
 const loading  = GetData().loading
    
const printScreen = () =>{
        window.print()
    }

    return (
        <div className="contentBody">
            <StaticData name={school_info.name} web={school_info.webSite} city={school_info.city} state={school_info.state} zip={school_info.zip} pop={school_info.studentPop}/>
            <div className="chartContainer">
              { !loading ?  <><Chart data={programGraph} ariaDesc={'programs offered by precent'} title={'Program'} subtitle={'percent'}/> <Chart data={ethnicGraph} ariaDesc={'Ethnicity by precent'} title={'Ethnic'} subtitle={'breakdown'}/> <PieChart data={pieChart} /> </>: <p>loading charts...</p>}
             </div>
                <div className="buttonBox">
             <a href="EA.pdf"  download>
                    <Button name={"PDF"}/>
             </a> 
             <a href="data.json"  download>
                    <Button name={"JSON"}/>
             </a>
            <Button name={"PRINT"} data={printScreen}/>
        </div>
        </div>
    );
}

export default Content;
