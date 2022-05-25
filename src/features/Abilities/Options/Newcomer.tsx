import { Grid } from '@bigcommerce/big-design';
import { ToggleButton } from 'features/ToggleButton';
import React, { useState } from 'react';
import { NewcomerAbilitiesList } from '../AbilitiesList';
import { AbilitySelect } from '../AbilitySelect';


interface Props {
  isCrosstrained: boolean;
}

export const NewcommerAbilities = ({ }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const onSelect = (value: string) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((v) => v !== value));
    } else {
      setSelected([...selected, value]);
    }
  }

  return (
    <Grid style={{ maxWidth: '400px' }}>
      {
        NewcomerAbilitiesList.map(({ name, description, charges, key }) => (
          <AbilitySelect
            name={name}
            description={description}
            charges={charges}
            selected={selected.includes(key)}
            onClick={() => onSelect(key)}
          />
        ))
      }
    </Grid>
  )
};