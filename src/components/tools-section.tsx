import type { ToolToInstall } from '../tabs/constants'
import { Code } from './code'
import { ExternalLink } from './external-link'

export function ToolsSection({ tools }: ToolsSectionProps) {
    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold tracking-tight">Tools</h2>
            <div className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-3">
                {tools.map((tool) => (
                    <article
                        key={tool.name}
                        className="relative flex flex-col gap-1.5 rounded-xl border bg-card p-4 text-card-foreground shadow-sm transition-shadow hover:shadow-md"
                    >
                        <h3 className="font-semibold">
                            {tool.url ? <ExternalLink href={tool.url}>{tool.name}</ExternalLink> : tool.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{tool.description}</p>
                        <Code code={tool.command} className="mt-auto" />
                    </article>
                ))}
            </div>
        </section>
    )
}

interface ToolsSectionProps {
    tools: readonly ToolToInstall[]
}
