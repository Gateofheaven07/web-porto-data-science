import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] border-2 border-foreground disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-pop-active",
  {
    variants: {
      variant: {
        default: 'bg-accent text-white shadow-pop hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-pop-hover',
        destructive:
          'bg-destructive text-white shadow-pop hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-pop-hover',
        outline:
          'bg-background shadow-pop hover:bg-accent hover:text-white',
        secondary:
          'bg-transparent text-foreground hover:bg-tertiary shadow-none active:shadow-none hover:-translate-y-[2px]',
        ghost:
          'border-transparent hover:bg-accent/10 focus-visible:border-transparent active:translate-x-0 active:translate-y-0 active:shadow-none',
        link: 'border-transparent text-primary underline-offset-4 hover:underline active:translate-x-0 active:translate-y-0 active:shadow-none bg-transparent',
      },
      size: {
        default: 'h-12 px-6 py-2 has-[>svg]:px-3',
        sm: 'h-10 px-4 has-[>svg]:px-2.5',
        lg: 'h-14 px-8 has-[>svg]:px-4',
        icon: 'size-12',
        'icon-sm': 'size-10',
        'icon-lg': 'size-14',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
