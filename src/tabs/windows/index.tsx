import { AppsSection } from '@/components/apps-section'
import { EmptyState } from '@/components/empty-state'
import { ToolsSection } from '@/components/tools-section'
import type { TabProps } from '../constants'
import { windowsApps } from './apps'
import { windowsTools } from './tools'

export function WindowsTab({ tab }: TabProps) {
    return (
        <>
            <AppsSection apps={windowsApps} />
            <ToolsSection tools={windowsTools} />
            <EmptyState
                icon={tab.Icon}
                accentClassName={tab.accentClassName}
                title="More coming soon"
                description="More Windows setup tips and tricks will show up here soon."
            />
        </>
    )
}
