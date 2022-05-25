import React, { MouseEventHandler } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { H3, Box, Text, Grid, GridItem } from '@bigcommerce/big-design';

export const StyledAbilitySelect = styled(Box) <{ selected: boolean }>`
  background-color: ${({ selected, theme }) => selected ? theme.colors.brand : theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  ${({ theme }) => theme.border.box}; 
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  grid-template: "name charges" "description description"/1fr auto;
  padding: ${({ theme }) => theme.spacing.medium};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary10};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.primary20};
  }
`;

interface Props {
  name: string;
  description: string;
  charges: number | 'passive';
  selected: boolean;
  onClick: MouseEventHandler;
}

export const AbilitySelect: React.FC<Props> = ({ name, description, charges, selected, onClick }) => {
  return (
    <StyledAbilitySelect selected={selected} onClick={onClick}>
      <Grid gridTemplate={`"name charges" "description description"/1fr auto`} gridGap="xSmall">
        <GridItem gridArea="name">
          <H3>{name}</H3>
        </GridItem>
        <GridItem gridArea="description">
          <Text>{description}</Text>
        </GridItem>
        <GridItem gridArea="charges">
          <Text>Charges: <Text color="primary" as="span">{charges}</Text> </Text>
        </GridItem>
      </Grid>
    </StyledAbilitySelect>
  )
}