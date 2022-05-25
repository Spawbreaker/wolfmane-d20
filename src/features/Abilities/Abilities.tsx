import React, { useState } from 'react';
import { Grid, H3, Panel } from '@bigcommerce/big-design';
import { ToggleButton } from 'features/ToggleButton';

type Rank = 'low' | 'high';

export const Abilities = () => {
  const [rank, setRank] = useState<Rank>();
  return (
    <Panel header="Pack Abilities">
      <H3>Select your rank to see the options available</H3>
      <Grid gridColumns="1fr 1fr">
        <ToggleButton>Newcommer | Greenhorn</ToggleButton>
        <ToggleButton>Aspirant | Kin | Honored Kin</ToggleButton>
      </Grid>
    </Panel>
  );
};