
import * as React from 'react';

import ReactHighcharts from 'react-highcharts';

import InputWrapper from './InputWrapper';

import languageDetails from '../services/getLanguageDetails';
import chartConfig from '../services/chartConfig';

import './index.css';

const Dashboard = () => {

    const [chartData, updateChartData] = React.useState({});
    const [showLoader, toggle] = React.useState(true);

    const fetchData = (input = {}) => {
        languageDetails.getData(input).then((response) => {

            chartConfig.setData(response)

            updateChartData(chartConfig.getData())

            toggle(false)
        })
    }

    const handleSubmit = (input) => {
        toggle(true)
        fetchData(input)
    }

    React.useEffect(() => {
        fetchData()
    }, []);

    const renderContent = () => {
        
        if (showLoader) {
            return <div className='loader'></div>
        }

        const data = chartData.series[0].data;

        if(!data.length){
            return <div>No Data Available</div>
        }
        return <ReactHighcharts config={chartData}></ReactHighcharts>
    }

    return (
        <div className='wrapper'>
            <InputWrapper onFormSubmit={handleSubmit} />
            <div className='chart-container'>
                {renderContent()}
            </div>
        </div>
    )
}

export default Dashboard;