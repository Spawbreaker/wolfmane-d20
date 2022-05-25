import styled from 'styled-components';
import { Grid } from '@bigcommerce/big-design';

export const StyledStatsGrid = styled(Grid)`
  grid-template-columns: repeat(2, 1fr);
  align-items: end;
  justify-items: center;
  grid-gap: 0.75rem 0.5rem;

  ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: repeat(3, 1fr)
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: repeat(6, 1fr)
  }
`;