import { MonitorCog } from 'lucide-react'
import { cn } from '@/lib/utils'
import { TABS, type TabId } from '../tabs/constants'

export function Header({ activeTab, selectTab }: HeaderProps) {
    return (
        <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 py-3 sm:px-8">
                <div className="flex items-center gap-2.5">
                    <div className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm">
                        <MonitorCog className="size-5" />
                    </div>
                    <div className="leading-tight">
                        <h1 className="text-base font-semibold tracking-tight">System Setup</h1>
                        <p className="text-xs text-muted-foreground">Tips &amp; tricks for a fresh install</p>
                    </div>
                </div>

                <div
                    className="flex rounded-lg bg-muted p-1 shadow-inner"
                    role="tablist"
                    aria-label="Operating systems"
                >
                    {TABS.map(({ id, Icon, label, accentClassName }) => {
                        const isActive = activeTab === id
                        return (
                            <button
                                key={id}
                                type="button"
                                role="tab"
                                aria-selected={isActive}
                                aria-controls={`panel-${id}`}
                                onClick={() => selectTab(id)}
                                className={cn(
                                    'flex items-center gap-2 rounded-md px-4 py-1.5 text-sm font-medium transition-all',
                                    isActive
                                        ? 'bg-background text-foreground shadow-sm'
                                        : 'text-muted-foreground hover:text-foreground',
                                )}
                            >
                                <Icon className={cn('size-4', isActive && accentClassName)} />
                                {label}
                            </button>
                        )
                    })}
                </div>
            </div>
        </header>
    )
}

interface HeaderProps {
    activeTab: TabId
    selectTab: (id: TabId) => void
}
