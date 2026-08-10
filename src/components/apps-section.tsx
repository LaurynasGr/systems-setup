import type { AppsToInstall } from '../tabs/constants'
import { AppCard } from './app-card'

export function AppsSection({ apps }: AppsSectionProps) {
    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold tracking-tight">Apps to install</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                {apps.map((app) => (
                    <AppCard key={app.name} app={app} />
                ))}
            </div>
        </section>
    )
}

interface AppsSectionProps {
    apps: readonly AppsToInstall[]
}
