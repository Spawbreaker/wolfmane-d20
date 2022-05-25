import React from 'react';
import { Box, Text } from '@bigcommerce/big-design';

interface Props {
  children: string;
}

export const DescriptionBox: React.FC<Props> = ({ children }) => {
  return (
    <Box border="box" padding="medium">
      <Text>{children}</Text>
    </Box>
  )
};