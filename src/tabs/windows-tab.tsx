import { EmptyState } from '@/components/empty-state'
import type { TabProps } from './constants'

export function WindowsTab({ tab }: TabProps) {
    return (
        <EmptyState
            icon={tab.Icon}
            accentClassName={tab.accentClassName}
            title="Nothing here yet"
            description="Windows setup tips and tricks will show up here soon."
        />
    )
}
