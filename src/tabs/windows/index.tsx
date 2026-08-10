import { AppsSection } from '@/components/apps-section'
import { EmptyState } from '@/components/empty-state'
import type { TabProps } from '../constants'
import { windowsApps } from './apps'

export function WindowsTab({ tab }: TabProps) {
    return (
        <>
            <AppsSection apps={windowsApps} />
            <EmptyState
                icon={tab.Icon}
                accentClassName={tab.accentClassName}
                title="More coming soon"
                description="More Windows setup tips and tricks will show up here soon."
            />
        </>
    )
}
