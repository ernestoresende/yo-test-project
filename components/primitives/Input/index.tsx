import * as React from 'react';
import * as S from './styled';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

type CommonProps = {
  name: string;
  label: string;
  placeholder?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  isLabelVisible?: boolean;
  value?: any;
  onChange?: (textValue: string) => void;
  children?: React.ReactNode;
};

type InputProps = Omit<React.ComponentProps<'input'>, 'onChange'> & CommonProps;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      label,
      placeholder,
      isDisabled = false,
      isRequired = false,
      isLabelVisible = true,
      children,
      value,
      onBlur,
      onFocus,
      onChange,
      ...props
    },
    componentRef
  ) => {
    const [uncontrolledValue, setUncontrolledValue] = React.useState<any>('');
    const [focused, setFocused] = React.useState<boolean>(false);

    return (
      <S.MainWrapper>
        {isLabelVisible ? (
          <S.InputLabel data-disabled={isDisabled} data-focused={focused} htmlFor={name}>
            {label}
          </S.InputLabel>
        ) : (
          <VisuallyHidden.Root>
            <label htmlFor={name}>{label}</label>
          </VisuallyHidden.Root>
        )}
        <S.InputWrapper data-disabled={isDisabled} data-focused={focused}>
          <S.InputComponent
            {...props}
            name={name}
            aria-label={label}
            aria-required={isRequired}
            required={isRequired}
            placeholder={!isLabelVisible ? label : placeholder}
            disabled={isDisabled}
            onFocus={(e) => {
              if (onFocus) {
                onFocus(e);
              }
              setFocused(true);
            }}
            onBlur={(e) => {
              if (onBlur) {
                onBlur(e);
              }
              setFocused(false);
            }}
            onChange={(e) => {
              if (onChange) {
                onChange(e);
              }
              setUncontrolledValue(e.target.value);
            }}
            ref={componentRef}
            value={value ? value : uncontrolledValue}
          />
        </S.InputWrapper>
      </S.MainWrapper>
    );
  }
);
