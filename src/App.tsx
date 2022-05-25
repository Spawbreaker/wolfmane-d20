import React from 'react';
import { createTheme } from '@bigcommerce/big-design-theme';
import { Box, H1, GlobalStyles } from '@bigcommerce/big-design';

import { ThemeProvider } from 'styled-components';

import { RacialPoints } from './features/RacialPoints';
import { colors } from './db/theme';
import { StatPoints } from 'features/StatPoints';
import { ArmorChoice } from 'features/ArmorChoice/ArmorChoice';
import { Abilities } from 'features/Abilities';
import { NewcommerAbilities } from 'features/Abilities/Options/Newcomer';


export const App = () => {

  const theme = createTheme();
  theme.colors = { ...theme.colors, ...colors };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Box paddingHorizontal="xLarge" paddingVertical="medium">
          <H1>Wolfmane D20 (Ver 2.0)</H1>
          <RacialPoints />
          <StatPoints />
          <ArmorChoice />
          <Abilities />
          <NewcommerAbilities />
        </Box>
      </ThemeProvider>
    </div>
  );
}
