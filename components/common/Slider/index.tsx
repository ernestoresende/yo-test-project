import * as React from 'react';
import * as S from './styled';

import { SliderProps } from '@radix-ui/react-slider';

export const Slider = React.forwardRef(
  ({ defaultValue, value, ...props }: SliderProps, forwardedRef) => {
    const currentValue = value || defaultValue;

    return (
      <S.StyledSlider {...props} ref={forwardedRef}>
        <S.StyledTrack>
          <S.StyledRange />
        </S.StyledTrack>
        {currentValue.map((_, i) => (
          <S.StyledThumb key={i} />
        ))}
      </S.StyledSlider>
    );
  }
);
