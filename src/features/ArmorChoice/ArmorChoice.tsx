import React, { useState } from 'react';
import { Grid, H3, Panel } from '@bigcommerce/big-design';
import { ToggleButton } from 'features/ToggleButton';
import type { Armor } from 'db/types';
import { DescriptionBox } from 'features/DescriptionBox';

export const ArmorChoice = () => {
  const [armor, setArmor] = useState<Armor>()

  return (
    <Panel header="Armor">
      <H3>Choose one of the armor options below</H3>
      <Grid gridColumns="1fr 1fr">
        <ToggleButton onClick={() => setArmor('protective')} toggled={armor == 'protective'}>Protective</ToggleButton>
        <ToggleButton onClick={() => setArmor('evasive')} toggled={armor == 'evasive'}>Evasive</ToggleButton>
        <DescriptionBox>
          Protective armor is armor that helps you soak up attacks and continue fighting. It increases your HP by 4.
        </DescriptionBox>
        <DescriptionBox>
          Evasive armor is armor that doesn't burden you and allows you to get hit less. It reduces failure range for in-combat rolls.
        </DescriptionBox>
      </Grid>
    </Panel>
  );
};