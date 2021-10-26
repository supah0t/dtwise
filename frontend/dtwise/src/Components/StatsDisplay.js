import React, { useEffect } from 'react';
import { Grid, Card, Spacer } from '@geist-ui/react';
import { ArrowDown, ArrowUp, Minus } from '@geist-ui/react-icons';

export const StatsDisplay = props => {
  useEffect(() =>{
  });

  return (
    <div>
      <Grid.Container gap={1}>
        <Grid xs={4}> 
          <Card shadow type="dark" width="100%">
            <h3>Minimum <Spacer inline w={1.5}/><ArrowDown size={32} color="white" /></h3>
            <h5>{props[0]}</h5>
          </Card> </Grid>
        <Grid xs={4}> 
          <Card shadow type="cyan" width="100%">
            <h3>Maximum<Spacer inline w={1.5}/><ArrowUp size={32} color="black" /></h3>
            <h5>{props[1]}</h5>
          </Card> </Grid>
        <Grid xs={4}> 
          <Card shadow type="violet" width="100%">
            <h3>Average<Spacer inline w={1.5}/><Minus size={32} color="white" /></h3>
            <h5>{props[2]}</h5>
          </Card> </Grid>
      </Grid.Container>

    </div>
  );
};
