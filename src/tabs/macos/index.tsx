import { AppsSection } from '@/components/apps-section'
import { EmptyState } from '@/components/empty-state'
import { SystemConfigSection } from '@/components/system-config-section'
import { ToolsSection } from '@/components/tools-section'
import type { TabProps } from '../constants'
import { macosApps } from './apps'
import { macosTools } from './tools'
import { macosZshrcSnippets } from './zshrc'

export function MacosTab({ tab }: TabProps) {
    return (
        <>
            <AppsSection apps={macosApps} />
            <ToolsSection tools={macosTools} />
            <SystemConfigSection
                intro="Add these lines to your ~/.zshrc, then run source ~/.zshrc to apply them."
                snippets={macosZshrcSnippets}
            />
            <EmptyState
                icon={tab.Icon}
                accentClassName={tab.accentClassName}
                title="More coming soon"
                description="More MacOS setup tips and tricks will show up here soon."
            />
        </>
    )
}
