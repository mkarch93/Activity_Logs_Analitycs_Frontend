import React, {useState, useEffect} from "react";
import { Layout, Spin } from 'antd';
import { SearchForm, FinalPieChart } from './components';
import {url, fetchConfig} from './components/settings';


let State = {
    activityTypes: [],
    statuses: ['SUCCESS', 'FAIL', 'IN_PROCESS'],
    dateTime: ["2018-01-01T00:00:00.001Z", "2022-01-01T00:00:00.001Z"]
};

const initChartState = { loading: false, error: null, data: [] };



function App() {

    const [chart, setChartData] = useState(initChartState)

    const fetchData = async (formData) => {

        setChartData({ loading: true, error: null, data: [] })
        try{
            const data = []
            const res = await fetch(url, {...fetchConfig, body: JSON.stringify(formData)});
            const dataJson= await res.json();

            let i;
            for (i=0; i < dataJson.length; i++) {
                data.push({name: dataJson[i]['stName'], value:  dataJson[i]['stCount'], activityTypes: dataJson[i].atList})
            }

                setChartData({ loading: false, error: null, data:  data })


        } catch (e) {
            setChartData({ loading: false, error: 'Shit happens', data: [] })
        }

    }

    useEffect(() => fetchData(State),[])
    //
    // useEffect(async () => {
    //     await fetchData(State);
    // }, [])

    const handleFormChange = async (name, value) => {
        State = {...State, [name]: value};
        await fetchData(State);
    }



  return (
      <Layout>
        <SearchForm onChange={handleFormChange} />
          {chart.loading ? <Spin  />: null}
        <FinalPieChart chartData={chart.data} />
      </Layout>
  );
}

export default App;
