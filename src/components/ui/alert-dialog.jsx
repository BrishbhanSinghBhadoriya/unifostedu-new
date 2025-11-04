"use client";

import * as React from "react";
import * as RadixAlertDialog from "@radix-ui/react-alert-dialog";

export function AlertDialog({ open, onOpenChange, children }) {
  return (
    <RadixAlertDialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </RadixAlertDialog.Root>
  );
}

export function AlertDialogTrigger({ asChild = true, children }) {
  return (
    <RadixAlertDialog.Trigger asChild={asChild}>{children}</RadixAlertDialog.Trigger>
  );
}

export function AlertDialogContent({ children, className = "" }) {
  return (
    <RadixAlertDialog.Portal>
      <RadixAlertDialog.Overlay className="fixed inset-0 bg-black/40" />
      <RadixAlertDialog.Content className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md rounded-xl bg-white p-6 shadow-xl ${className}`}>
        {children}
      </RadixAlertDialog.Content>
    </RadixAlertDialog.Portal>
  );
}

export function AlertDialogHeader({ children }) {
  return <div className="mb-4">{children}</div>;
}

export function AlertDialogTitle({ children }) {
  return <RadixAlertDialog.Title className="text-lg font-semibold">{children}</RadixAlertDialog.Title>;
}

export function AlertDialogDescription({ children }) {
  return <RadixAlertDialog.Description className="mt-2 text-sm text-gray-600">{children}</RadixAlertDialog.Description>;
}

export function AlertDialogFooter({ children }) {
  return <div className="mt-6 flex justify-end gap-3">{children}</div>;
}

export function AlertDialogCancel({ children }) {
  return (
    <RadixAlertDialog.Cancel className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
      {children}
    </RadixAlertDialog.Cancel>
  );
}

export function AlertDialogAction({ children, onClick }) {
  return (
    <RadixAlertDialog.Action onClick={onClick} className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700">
      {children}
    </RadixAlertDialog.Action>
  );
}


