import { Grid } from '@bigcommerce/big-design';
import { ToggleButton } from 'features/ToggleButton';
import React, { useState } from 'react';


interface Props {
  isCrosstrained: boolean;
}

export const NewcommerAbilities = ({ isCrosstrained }) => {
  const [selected, setSelected] = useState([]);

  return (
    <Grid gridColumns="1fr 1fr">
      <ToggleButton>Healer</ToggleButton>
      <ToggleButton>Defender</ToggleButton>
      <ToggleButton>Lucky</ToggleButton>
      <ToggleButton>Counter</ToggleButton>
      <ToggleButton>Fleet</ToggleButton>
    </Grid>
  )
};