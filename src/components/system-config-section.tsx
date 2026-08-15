import type { ConfigSnippet } from '../tabs/constants'
import { Code } from './code'

export function SystemConfigSection({ intro, snippets }: SystemConfigSectionProps) {
    return (
        <section className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
                <h2 className="text-xl font-semibold tracking-tight">System config</h2>
                <p className="text-sm text-muted-foreground">{intro}</p>
            </div>
            <div className="flex flex-col gap-3">
                {snippets.map((snippet) => (
                    <article
                        key={snippet.code}
                        className="flex flex-col gap-2 rounded-xl border bg-card p-4 text-card-foreground shadow-sm"
                    >
                        <Code code={snippet.code} />
                        <p className="text-sm text-muted-foreground">{snippet.description}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}

interface SystemConfigSectionProps {
    intro: string
    snippets: readonly ConfigSnippet[]
}
