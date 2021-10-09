import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { IoIosClose } from 'react-icons/io';
import * as S from './styled';

type CommonProps = {
  children: React.ReactNode;
};

export function Dialog({ children, ...props }: CommonProps) {
  return (
    <DialogPrimitive.Root {...props}>
      <S.StyledDialogOverlay />
      {children}
    </DialogPrimitive.Root>
  );
}

export const Button = React.forwardRef<HTMLDivElement, CommonProps>(
  ({ children, ...props }, componentRef) => {
    return (
      <S.StyledDialogContent {...props} ref={componentRef}>
        {children}
        <DialogPrimitive.Close>
          <IoIosClose />
        </DialogPrimitive.Close>
      </S.StyledDialogContent>
    );
  }
);
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;
