import type { AppsToInstall } from '../tabs/constants'
import { ExternalLink } from './external-link'

export function AppCard({ app }: AppCardProps) {
    return (
        <article className="relative flex flex-col overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md">
            <a href={app.url} target="_blank" rel="noreferrer">
                <img
                    src={app.picture}
                    alt={`${app.name} screenshot`}
                    loading="lazy"
                    className="aspect-video w-full border-b object-cover object-top"
                />
            </a>
            <div className="flex flex-1 flex-col gap-1.5 p-4">
                <h3 className="font-semibold">
                    <ExternalLink href={app.url}>{app.name}</ExternalLink>
                </h3>
                <p className="text-sm text-muted-foreground">{app.description}</p>
                {app.repoUrl && (
                    <ExternalLink
                        href={app.repoUrl}
                        className="mt-auto w-fit gap-1 pt-2 text-xs text-muted-foreground hover:text-foreground"
                        iconClassName="size-3 text-current"
                    >
                        Source on GitHub
                    </ExternalLink>
                )}
            </div>
        </article>
    )
}

interface AppCardProps {
    app: AppsToInstall
}
