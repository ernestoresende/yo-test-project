import styled from 'styled-components';
import * as SliderPrimitive from '@radix-ui/react-slider';

export const StyledSlider = styled(SliderPrimitive.Root)`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: 100%;
  height: 20px;
`;

export const StyledTrack = styled(SliderPrimitive.Track)`
  background-color: var(--colors-blueGray1);
  position: relative;
  flex-grow: 1;
  border-radius: 9999px;
  height: 3px;
`;

export const StyledRange = styled(SliderPrimitive.Range)`
  position: absolute;
  background-color: var(--colors-orange1);
  border-radius: 9999px;
  height: 100%;
`;

export const StyledThumb = styled(SliderPrimitive.Thumb)`
  all: unset;
  display: block;
  width: 20px;
  height: 20px;
  background-color: var(--colors-orange1);
  border-radius: 9999px;
`;
