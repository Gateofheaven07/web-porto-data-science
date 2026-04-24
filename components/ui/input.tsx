import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'file:text-foreground placeholder:text-muted-foreground selection:bg-accent selection:text-white border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 h-12 w-full min-w-0 rounded-lg px-4 py-2 text-base font-medium transition-all outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-accent focus-visible:shadow-[4px_4px_0px_0px_#8B5CF6]',
        'aria-invalid:border-destructive aria-invalid:shadow-[4px_4px_0px_0px_#ef4444]',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
