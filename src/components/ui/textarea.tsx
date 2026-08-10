import type * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
    return (
        <textarea
            data-slot="textarea"
            className={cn(
                'flex field-sizing-content min-h-16 w-full rounded-md border px-3 py-2',
                'text-base md:text-sm',
                'border-input bg-transparent shadow-xs dark:bg-input/30',
                'outline-none transition-[color,box-shadow]',
                'placeholder:text-muted-foreground',
                'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
                'disabled:cursor-not-allowed disabled:opacity-50',
                'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
                className,
            )}
            {...props}
        />
    )
}

export { Textarea }
