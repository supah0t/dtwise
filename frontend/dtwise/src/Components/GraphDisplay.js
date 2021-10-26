import React, { useEffect, useState, useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { DataContext } from '../Context/DataContext';
import { Select } from '@geist-ui/react';

export const GraphDisplay = (props) => {
  const items = useContext(DataContext);

  useEffect(() => {
    let sortable = [];
    for(let i=0; i<Object.keys(items).length; i++){
      sortable.push(items[i]);
    }
    sortable.sort(function(a, b) {
      return a.timestamp - b.timestamp;
    });
    setChosenMetric(props.metric);
    feedChartOne(sortable, props.metric);

    //eslint-disable-next-line
  }, [items], props);

  const [chosenMetric, setChosenMetric] = useState('');
  const [datesArray, setDatesArray] = useState([]);
  const [metricArray, setMetricArray] = useState([]);
  const [currentMonth, setCurrentMonth] = useState([]);
  const [currentMetric, setCurrentMetric] = useState([]);

  const convertTimestamp = item => {
    let time = new Date(item.timestamp);
    return String(time.getDate() + "/" + (time.getMonth()+1));
  };

  //Function to feed data to the charts
  const feedChartOne = (data, metric) => {
    let tempDates = [];
    let tempMetric = [];
    for(let i=0; i<data.length; i++){
      tempDates.push(convertTimestamp(data[i]));
      tempMetric.push(data[i][metric]);
    }
    setDatesArray(tempDates);
    setMetricArray(tempMetric);
  };

  const feedChartTwo = val => {
    let date = '';
    let temp = '';
    let tempDate = [];
    let tempMetric = [];
    for(let i=0; i<items.length; i++){
      date = convertTimestamp(items[i]);
      temp = date.split("/")[1];
      if(val === temp){
        tempDate.push(date);
        tempMetric.push(items[i][chosenMetric]);
      }
    }
    setCurrentMonth(tempDate);
    setCurrentMetric(tempMetric);
  }

  const data_1 = {
    labels: datesArray,
    datasets: [
      {
        data: metricArray,
        label: 'Metric 1',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(75, 192, 192)',
      }
    ]
  };

  const options_1 = {
    plugins: {
      title: {
        display: true,
        text: 'Complete Display',
      },
      legend: {
        display: true,
        position: 'right'
      }
    }
  };

  const data_2 = {
    labels: currentMonth,
    datasets: [
      {
        data: currentMetric,
        label: 'Metric 1',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(75, 192, 192)',
      }
    ]
  };

  const options_2 = {
    plugins: {
      title: {
        display: true,
        text: 'Monthly Display',
      },
      legend: {
        display: true,
        position: 'right'
      },
      scales: {
        yAxes: [{
          ticks: {
            min: 0
          }
        }]
      }
    }
  };

  return (
    <div>
      <Line data={data_1} options={options_1} height={80}/>
      <div className="gap-20"/>
      <div className="gap-20"/>
      <div className="gap-20"/>

      <Select type="warning" placeholder="Chose Month" onChange={feedChartTwo}>
        <Select.Option value="6">June</Select.Option>
        <Select.Option value="7">July</Select.Option>
        <Select.Option value="8">August</Select.Option>
        <Select.Option value="9">September</Select.Option>
        <Select.Option value="10">October</Select.Option>
      </Select>

      <Line data={data_2} options={options_2} height={80}/>
    </div>
  );
};
