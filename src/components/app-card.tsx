import { ExternalLink } from 'lucide-react'
import type { AppsToInstall } from '../tabs/constants'

export function AppCard({ app }: AppCardProps) {
    return (
        <article className="relative flex flex-col overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md">
            <img
                src={app.picture}
                alt={`${app.name} screenshot`}
                loading="lazy"
                className="aspect-video w-full border-b object-cover object-top"
            />
            <div className="flex flex-1 flex-col gap-1.5 p-4">
                <h3 className="flex items-center gap-1.5 font-semibold">
                    <a
                        href={app.url}
                        target="_blank"
                        rel="noreferrer"
                        className="after:absolute after:inset-0 hover:underline"
                    >
                        {app.name}
                    </a>
                    <ExternalLink className="size-3.5 text-muted-foreground" />
                </h3>
                <p className="text-sm text-muted-foreground">{app.description}</p>
                {app.repoUrl && (
                    <a
                        href={app.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="relative z-10 mt-auto inline-flex w-fit items-center gap-1 pt-2 text-xs text-muted-foreground hover:text-foreground hover:underline"
                    >
                        Source on GitHub
                        <ExternalLink className="size-3" />
                    </a>
                )}
            </div>
        </article>
    )
}

interface AppCardProps {
    app: AppsToInstall
}
