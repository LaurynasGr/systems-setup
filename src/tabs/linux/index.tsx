import { AppsSection } from '@/components/apps-section'
import { EmptyState } from '@/components/empty-state'
import { ToolsSection } from '@/components/tools-section'
import type { TabProps } from '../constants'
import { linuxApps } from './apps'
import { linuxTools } from './tools'

export function LinuxTab({ tab }: TabProps) {
    return (
        <>
            <AppsSection apps={linuxApps} />
            <ToolsSection tools={linuxTools} />
            <EmptyState
                icon={tab.Icon}
                accentClassName={tab.accentClassName}
                title="More coming soon"
                description="More Linux setup tips and tricks will show up here soon."
            />
        </>
    )
}
