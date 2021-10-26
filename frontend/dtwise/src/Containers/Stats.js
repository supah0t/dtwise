import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from '../Context/DataContext';
import { Grid, Card, Radio } from '@geist-ui/react';
import { StatsDisplay } from '../Components/StatsDisplay';

export const Stats = () => {
  const items = useContext(DataContext);

  useEffect(() => {
    calculateMinMax(items);
  }, [items])

  const [chosenMetric, setChosenMetric] = useState('0');
  const [metric_1, setMetric_1] = useState([]);
  const [metric_2, setMetric_2] = useState([]);

  const displayMetric = metric => {
    switch(metric){
      case 'metric_1':
        return (
          <div>
            <StatsDisplay {...metric_1}/>
          </div>
        );
      case 'metric_2':
        return (
          <div>
            <StatsDisplay {...metric_2}/>
          </div>
        );
      default:
        return <div />
    }
  }

  //Finds minimum, maximum and average of each metric in given data
  function calculateMinMax(values) {
    let min_1 = values[0].metric_1;
    let max_1 = min_1;
    let total_1 = 0;
    let min_2 = values[0].metric_2;
    let max_2 = min_2;
    let total_2 = 0;
    let len = values.length;
    let average_1, average_2;

    for(let i=1; i<len; i++){
      let temp_1 = values[i].metric_1;
      let temp_2 = values[i].metric_2;
      min_1 = (temp_1 < min_1) ? temp_1 : min_1;
      max_1 = (temp_1 > max_1) ? temp_1 : max_1;
      min_2 = (temp_2 < min_2) ? temp_2 : min_2;
      max_2 = (temp_2 > max_2) ? temp_2 : max_2;
      total_1 += temp_1;
      total_2 += temp_2;
    }

    average_1 = total_1 / len;
    average_2 = total_2 / len;
    
    setMetric_1([min_1, max_1, average_1, 'metric_1']);
    setMetric_2([min_2, max_2, average_2, 'metric_2']);
  }

  return (
    <div>

      <Grid.Container gap={1}>
        <Grid xs={12}> 
          <Card shadow type="warning" width="100%">
            <h3>Please choose a metric to see its stats</h3>
            <div className="gap-10"/>
            <Radio.Group value={chosenMetric} useRow onChange={setChosenMetric}>
              <Radio value="metric_1">
                Metric 1
              </Radio>
              <Radio value="metric_2">
                Metric 2
              </Radio>
            </Radio.Group>
          </Card> </Grid>
      </Grid.Container>
      <div className="gap-10" />

      {displayMetric(chosenMetric)}

    </div>
  );
}
