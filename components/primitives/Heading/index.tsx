import * as React from 'react';
import * as S from './styled';

type CommonProps = {
  fontSize?: string;
  fontWeight?: number;
  textColor?: string;
  center?: boolean;
  as?: string;
};

type HeadingProps = CommonProps & React.ComponentPropsWithRef<'h1'>;

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      fontSize = 'md',
      fontWeight = 700,
      textColor = 'orange1',
      as = 'h1',
      center,
      children,
      ...props
    },
    componentRef
  ) => {
    const styleProps = {
      'data-fontsize': fontSize,
      'data-textcolor': textColor,
      'data-fontweight': fontWeight,
      'data-center': center,
    };

    switch (as) {
      case 'h1':
        return (
          <S.Heading1 ref={componentRef} {...styleProps} {...props}>
            {children}
          </S.Heading1>
        );
      case 'h2':
        return (
          <S.Heading2 ref={componentRef} {...styleProps} {...props}>
            {children}
          </S.Heading2>
        );
      case 'h3':
        return (
          <S.Heading3 ref={componentRef} {...styleProps} {...props}>
            {children}
          </S.Heading3>
        );
      case 'h4':
        return (
          <S.Heading4 ref={componentRef} {...styleProps} {...props}>
            {children}
          </S.Heading4>
        );
      case 'h5':
        return (
          <S.Heading5 ref={componentRef} {...styleProps} {...props}>
            {children}
          </S.Heading5>
        );
      case 'h6':
        return (
          <S.Heading6 ref={componentRef} {...styleProps} {...props}>
            {children}
          </S.Heading6>
        );
    }
  }
);
