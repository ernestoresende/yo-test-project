import * as React from 'react';
import * as S from './styled';

type BoxProps = React.ComponentPropsWithRef<'div'> & {
  children?: React.ReactNode;
  flex?: boolean;
  direction?: 'row' | 'column';
  center?: boolean;
};

export const Box = ({ children, flex, direction, center, ...props }: BoxProps) => {
  return (
    <S.StyledBox {...props} data-center={center} data-flex={flex} data-direction={direction}>
      {children ? children : null}
    </S.StyledBox>
  );
};
