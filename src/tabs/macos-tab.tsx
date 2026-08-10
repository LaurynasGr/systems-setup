import { EmptyState } from '@/components/empty-state'
import type { TabProps } from './constants'

export function MacosTab({ tab }: TabProps) {
    return (
        <EmptyState
            icon={tab.Icon}
            accentClassName={tab.accentClassName}
            title="Nothing here yet"
            description="MacOS setup tips and tricks will show up here soon."
        />
    )
}
