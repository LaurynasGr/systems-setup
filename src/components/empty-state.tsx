import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface EmptyStateProps {
    icon: LucideIcon
    title: string
    description: string
    accentClassName?: string
}

export function EmptyState({ icon: Icon, title, description, accentClassName }: EmptyStateProps) {
    return (
        <div className="flex flex-1 flex-col items-center justify-center gap-4 rounded-xl border border-dashed bg-muted/20 p-12 text-center">
            <div className="grid size-14 place-items-center rounded-xl bg-muted">
                <Icon className={cn('size-7', accentClassName ?? 'text-muted-foreground')} />
            </div>
            <div className="space-y-1">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
        </div>
    )
}
