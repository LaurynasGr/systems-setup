import { Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function Code({ code, className }: CodeProps) {
    const [copied, setCopied] = useState(false)

    async function copy() {
        await navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className={cn('flex items-start gap-2 rounded-lg border bg-muted px-3 py-2 pr-1.5', className)}>
            <pre className="whitespace-pre-wrap break-all">
                <code className="font-mono text-sm">{code}</code>
            </pre>
            <button
                type="button"
                onClick={copy}
                aria-label="Copy to clipboard"
                title="Copy to clipboard"
                className="relative z-10 p-1 ml-auto shrink-0 text-muted-foreground transition-colors hover:text-foreground"
            >
                {copied ? <Check className="size-4 text-green-500" /> : <Copy className="size-4" />}
            </button>
        </div>
    )
}

interface CodeProps {
    code: string
    className?: string
}
