import { AppsSection } from '@/components/apps-section'
import { EmptyState } from '@/components/empty-state'
import type { TabProps } from '../constants'
import { linuxApps } from './apps'

export function LinuxTab({ tab }: TabProps) {
    return (
        <>
            <AppsSection apps={linuxApps} />
            <EmptyState
                icon={tab.Icon}
                accentClassName={tab.accentClassName}
                title="More coming soon"
                description="More Linux setup tips and tricks will show up here soon."
            />
        </>
    )
}
