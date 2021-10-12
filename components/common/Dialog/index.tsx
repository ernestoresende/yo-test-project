import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { DialogContentProps, DialogProps as DefaultDialogProps } from '@radix-ui/react-dialog';
import { IoClose } from 'react-icons/io5';
import * as S from './styled';

type CommonProps = {
  children: React.ReactNode;
};

type DialogProps = CommonProps & DefaultDialogProps;

export function Dialog({ children, ...props }: DialogProps) {
  return (
    <DialogPrimitive.Root {...props}>
      <S.StyledDialogOverlay />
      {children}
    </DialogPrimitive.Root>
  );
}

export const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(
  ({ children, ...props }, componentRef) => {
    return (
      <S.StyledDialogContent {...props} ref={componentRef}>
        {children}
        <DialogPrimitive.DialogClose asChild>
          <button className="close-button">
            <IoClose />
          </button>
        </DialogPrimitive.DialogClose>
      </S.StyledDialogContent>
    );
  }
);
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;
