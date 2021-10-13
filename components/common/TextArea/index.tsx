import * as React from 'react';
import * as S from './styled';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

type CommonProps = {
  name: string;
  label: string;
  placeholder?: string;
  isDisabled?: boolean;
  isLabelVisible?: boolean;
  children?: React.ReactNode;
};

type TextAreaProps = React.ComponentProps<'textarea'> & CommonProps;

export const TextArea = React.forwardRef<HTMLInputElement, TextAreaProps>(
  (
    {
      name,
      label,
      placeholder,
      isDisabled = false,
      required = false,
      isLabelVisible = true,
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
          <S.TextAreaLabel data-disabled={isDisabled} data-focused={focused} htmlFor={name}>
            {label}
          </S.TextAreaLabel>
        ) : (
          <VisuallyHidden.Root>
            <label htmlFor={name}>{label}</label>
          </VisuallyHidden.Root>
        )}
        <S.TextAreaWrapper data-disabled={isDisabled} data-focused={focused}>
          <S.TextAreaComponent
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
        </S.TextAreaWrapper>
      </S.MainWrapper>
    );
  }
);
