import * as React from 'react';
import * as S from './styled';

export const Select = ({ children, ...props }: React.ComponentProps<'select'>) => {
  return (
    <S.MainWrapper>
      <S.SelectComponent {...props}>{children}</S.SelectComponent>
    </S.MainWrapper>
  );
};
