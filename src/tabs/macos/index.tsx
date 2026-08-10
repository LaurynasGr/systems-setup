import { AppsSection } from '@/components/apps-section'
import { EmptyState } from '@/components/empty-state'
import type { TabProps } from '../constants'
import { TABBY } from '../linux/apps'

export function MacosTab({ tab }: TabProps) {
    return (
        <>
            <AppsSection apps={[TABBY]} />
            <EmptyState
                icon={tab.Icon}
                accentClassName={tab.accentClassName}
                title="More coming soon"
                description="More MacOS setup tips and tricks will show up here soon."
            />
        </>
    )
}
