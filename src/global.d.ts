import React, { ButtonHTMLAttributes } from 'react';
import { ButtonProps } from '@bigcommerce/big-design';
import { StyleableButton } from '@bigcommerce/big-design/dist/components/Button/Button';

declare module '@bigcommerce/big-design/dist/es/components/Button/Button' {
  export = React.ForwardRefExoticComponent < ButtonProps & React.RefAttributes < HTMLButtonElement >> {}
}