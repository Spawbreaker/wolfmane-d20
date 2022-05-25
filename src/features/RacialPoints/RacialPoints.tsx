import React, { useState } from 'react';
import { H3, Panel } from '@bigcommerce/big-design';
import { Stats } from 'db/types';
import { RACIAL_POINTS } from 'db/constants';
import { ToggleButton } from 'features/ToggleButton'
import { StyledRacialGrid } from './styled';

export const RacialPoints = () => {
  const [selected, setSelected] = useState<Array<Stats>>([])

  const toggleRacial = (value: Stats) => {
    let newSelected;
    if (selected.includes(value)) newSelected = selected.filter((v) => v !== value);
    else newSelected = [...selected, value];

    setSelected(newSelected);
  };

  const shouldDisable = selected.length >= RACIAL_POINTS;

  return (
    <Panel header="Racial points">
      <H3>You have selected {selected.length}/{RACIAL_POINTS} abilities.</H3>
      <StyledRacialGrid>
        <ToggleButton onClick={() => toggleRacial('str')} toggled={selected.includes('str')} disabled={shouldDisable}>Strength</ToggleButton>
        <ToggleButton onClick={() => toggleRacial('dex')} toggled={selected.includes('dex')} disabled={shouldDisable}>Dexterity</ToggleButton>
        <ToggleButton onClick={() => toggleRacial('con')} toggled={selected.includes('con')} disabled={shouldDisable}>Constitution</ToggleButton>
        <ToggleButton onClick={() => toggleRacial('wis')} toggled={selected.includes('wis')} disabled={shouldDisable}>Wisdom</ToggleButton>
        <ToggleButton onClick={() => toggleRacial('int')} toggled={selected.includes('int')} disabled={shouldDisable}>Intelligence</ToggleButton>
        <ToggleButton onClick={() => toggleRacial('cha')} toggled={selected.includes('cha')} disabled={shouldDisable}>Charisma</ToggleButton>
      </StyledRacialGrid>
    </Panel>
  );
}
