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
  validationError?: boolean;
  validationMessage?: string;
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
      required = false,
      isLabelVisible = true,
      validationError,
      validationMessage,
      children,
      onBlur,
      onFocus,
      ...props
    },
    componentRef
  ) => {
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
        <S.InputWrapper
          data-validation-error={validationError}
          data-disabled={isDisabled}
          data-focused={focused}
        >
          <S.InputComponent
            {...props}
            name={name}
            aria-label={label}
            aria-required={required}
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
            ref={componentRef}
          />
        </S.InputWrapper>
        <S.InputValidationContainer>
          {validationMessage ? (
            <S.InputValidationMessage>{validationMessage}</S.InputValidationMessage>
          ) : null}
        </S.InputValidationContainer>
      </S.MainWrapper>
    );
  }
);
