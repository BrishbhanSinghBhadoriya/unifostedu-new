"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"

/* ---------------- Root ---------------- */

type SelectProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Root
>

function Select(props: SelectProps) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

/* ---------------- Group ---------------- */

type SelectGroupProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Group
>

function SelectGroup(props: SelectGroupProps) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

/* ---------------- Value ---------------- */

type SelectValueProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Value
>

function SelectValue(props: SelectValueProps) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

/* ---------------- Trigger ---------------- */

type SelectTriggerProps =
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
    className?: string
    size?: "default" | "sm"
  }

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: SelectTriggerProps) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      type="button"
      className={cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

/* ---------------- Content ---------------- */

type SelectContentProps =
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & {
    className?: string
    position?: "item-aligned" | "popper"
    portalled?: boolean
  }

function SelectContent({
  className,
  children,
  position = "popper",
  portalled = true,
  ...props
}: SelectContentProps) {
  const content = (
    <SelectPrimitive.Content
      data-slot="select-content"
      position={position}
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 relative z-[30002] max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-hidden rounded-md border shadow-md",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1",
        className
      )}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport className="p-1">
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  )

  return portalled ? (
    <SelectPrimitive.Portal>{content}</SelectPrimitive.Portal>
  ) : (
    content
  )
}

/* ---------------- Label ---------------- */

type SelectLabelProps =
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label> & {
    className?: string
  }

function SelectLabel({ className, ...props }: SelectLabelProps) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn(
        "text-muted-foreground px-2 py-1.5 text-xs",
        className
      )}
      {...props}
    />
  )
}

/* ---------------- Item ---------------- */

type SelectItemProps =
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & {
    className?: string
    children: React.ReactNode
  }

function SelectItem({
  className,
  children,
  ...props
}: SelectItemProps) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="h-4 w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>
        {children}
      </SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

/* ---------------- Separator ---------------- */

type SelectSeparatorProps =
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> & {
    className?: string
  }

function SelectSeparator({
  className,
  ...props
}: SelectSeparatorProps) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn(
        "bg-border pointer-events-none -mx-1 my-1 h-px",
        className
      )}
      {...props}
    />
  )
}

/* ---------------- Scroll Buttons ---------------- */

function SelectScrollUpButton(
  props: React.ComponentPropsWithoutRef<
    typeof SelectPrimitive.ScrollUpButton
  >
) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className="flex cursor-default items-center justify-center py-1"
      {...props}
    >
      <ChevronUpIcon className="h-4 w-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton(
  props: React.ComponentPropsWithoutRef<
    typeof SelectPrimitive.ScrollDownButton
  >
) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className="flex cursor-default items-center justify-center py-1"
      {...props}
    >
      <ChevronDownIcon className="h-4 w-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

/* ---------------- Exports ---------------- */

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
