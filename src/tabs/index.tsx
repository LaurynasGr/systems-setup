import { cn } from '@/lib/utils'
import { TABS, type TabId } from './constants'

export function Tabs({ activeTab }: TabsProps) {
    return (
        <main className="flex flex-1 flex-col px-4 py-8 sm:px-8">
            {TABS.map(({ Content, ...tab }) => (
                <section
                    key={tab.id}
                    id={`panel-${tab.id}`}
                    role="tabpanel"
                    hidden={activeTab !== tab.id}
                    className={cn(activeTab === tab.id && 'flex flex-1 flex-col')}
                >
                    <Content tab={tab} />
                </section>
            ))}
        </main>
    )
}

interface TabsProps {
    activeTab: TabId
}
