import * as React from 'react';
import * as S from './styled';

type CommonProps = {
  size: number;
};
export type SpinnerProps = CommonProps & React.ComponentProps<'div'>;

export const Spinner = React.forwardRef<any, SpinnerProps>(({ size }, componentRef) => {
  return (
    <S.SpinnerContainer size={size} ref={componentRef}>
      <S.SpinnerBody size={size} />
    </S.SpinnerContainer>
  );
});
