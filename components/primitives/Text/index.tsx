import * as React from 'react';
import * as S from './styled';

type CommonProps = {
  fontSize?: string;
  fontWeight?: number;
  textColor?: string;
  as?: string;
};

type TextProps = CommonProps & React.ComponentPropsWithRef<'p'>;

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (
    { children, textColor = 'blueGray1', fontSize = 'xs', fontWeight = 400, as = 'p', ...props },
    componentRef
  ) => {
    const styleProps = {
      'data-fontsize': fontSize,
      'data-textcolor': textColor,
      'data-fontweight': fontWeight,
    };

    switch (as) {
      case 'p':
        return (
          <S.Paragraph ref={componentRef} {...styleProps} {...props}>
            {children}
          </S.Paragraph>
        );
      case 'span':
        return (
          <S.Span ref={componentRef} {...styleProps} {...props}>
            {children}
          </S.Span>
        );
    }
  }
);

export default React.memo(Text);
