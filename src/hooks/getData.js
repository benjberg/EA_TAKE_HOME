import { useEffect, useState} from 'react';
import {REST_API_ROOT_ENDPOINT} from './constants.js'
import { removeNull } from './removeNull.js';
import axios from 'axios';
import { GetChartData } from './GetChartData.js';

export const GetData = () =>{
    // define states
    const [school_info,setSchool_info] = useState({
    name: '',
    webSite: '',
    city: '',
    state: '',
    zip: '',
    studentPop: ''
})

const [loading, setLoading] = useState(true)
const [programdata,setProgramData] = useState([])
const [ethnicData,setEthnicData] = useState([])
const [pieData, setPieData] = useState([])

// use effect to call API
useEffect(  () => {
     axios.get(REST_API_ROOT_ENDPOINT).then( res => {
        
            const schoolData = res.data.results[0].school
            const latestData = res.data.results[0].latest
            setProgramData(GetChartData(latestData.academics.program_percentage)) 
           
            // filter out all enteries in data that have null value
            let nulledData = removeNull(latestData.student.demographics.race_ethnicity)
        
            setEthnicData(GetChartData(nulledData))
       

            // set data for pie chart
            setPieData(GetChartData(latestData.admissions.sat_scores.midpoint))


            setSchool_info({ name:schoolData.name,
            webSite: schoolData.school_url,
            city: schoolData.city,
            state: schoolData.state,
            zip: schoolData.zip,
            studentPop: res.data.results[0].latest.student.size})    
    }).catch(err => console.log(err))
    setLoading(false)
}, []);
    return { loading,school_info, programdata,ethnicData,pieData}
}