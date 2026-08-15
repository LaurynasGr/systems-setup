import { ExternalLinkIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ExternalLink({ href, children, className, iconClassName }: ExternalLinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className={cn('inline-flex items-center gap-1.5 hover:underline', className)}
        >
            {children}
            <ExternalLinkIcon className={cn('size-3.5 text-muted-foreground', iconClassName)} />
        </a>
    )
}

interface ExternalLinkProps {
    href: string
    children: React.ReactNode
    className?: string
    iconClassName?: string
}
