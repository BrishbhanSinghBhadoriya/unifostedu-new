"use client";

import * as React from "react";
import * as RadixAlertDialog from "@radix-ui/react-alert-dialog";



type AlertDialogProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
};

export function AlertDialog({
  open,
  onOpenChange,
  children,
}: AlertDialogProps) {
  return (
    <RadixAlertDialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </RadixAlertDialog.Root>
  );
}



type AlertDialogTriggerProps = {
  asChild?: boolean;
  children: React.ReactNode;
};

export function AlertDialogTrigger({
  asChild = true,
  children,
}: AlertDialogTriggerProps) {
  return (
    <RadixAlertDialog.Trigger asChild={asChild}>
      {children}
    </RadixAlertDialog.Trigger>
  );
}



type AlertDialogContentProps = {
  children: React.ReactNode;
  className?: string;
};

export function AlertDialogContent({
  children,
  className = "",
}: AlertDialogContentProps) {
  return (
    <RadixAlertDialog.Portal>
      <RadixAlertDialog.Overlay className="fixed inset-0 bg-black/40" />
      <RadixAlertDialog.Content
        className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md rounded-xl bg-white p-6 shadow-xl ${className}`}
      >
        {children}
      </RadixAlertDialog.Content>
    </RadixAlertDialog.Portal>
  );
}



type AlertDialogHeaderProps = {
  children: React.ReactNode;
};

export function AlertDialogHeader({ children }: AlertDialogHeaderProps) {
  return <div className="mb-4">{children}</div>;
}



type AlertDialogTitleProps = {
  children: React.ReactNode;
};

export function AlertDialogTitle({ children }: AlertDialogTitleProps) {
  return (
    <RadixAlertDialog.Title className="text-lg font-semibold">
      {children}
    </RadixAlertDialog.Title>
  );
}



type AlertDialogDescriptionProps = {
  children: React.ReactNode;
};

export function AlertDialogDescription({
  children,
}: AlertDialogDescriptionProps) {
  return (
    <RadixAlertDialog.Description className="mt-2 text-sm text-gray-600">
      {children}
    </RadixAlertDialog.Description>
  );
}



type AlertDialogFooterProps = {
  children: React.ReactNode;
};

export function AlertDialogFooter({ children }: AlertDialogFooterProps) {
  return <div className="mt-6 flex justify-end gap-3">{children}</div>;
}


type AlertDialogCancelProps = {
  children: React.ReactNode;
};

export function AlertDialogCancel({ children }: AlertDialogCancelProps) {
  return (
    <RadixAlertDialog.Cancel className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
      {children}
    </RadixAlertDialog.Cancel>
  );
}


type AlertDialogActionProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export function AlertDialogAction({
  children,
  onClick,
}: AlertDialogActionProps) {
  return (
    <RadixAlertDialog.Action
      onClick={onClick}
      className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
    >
      {children}
    </RadixAlertDialog.Action>
  );
}
