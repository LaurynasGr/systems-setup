import { useEffect, useState } from 'react'
import { Header } from './components/header'
import { TABS, type Tab } from './tabs/constants'

function tabFromPath(pathname: string) {
    const segment = pathname.split('/').filter(Boolean)[0]
    const tab = TABS.find((t) => t.id === segment)
    return tab ?? TABS[0]
}

export function App() {
    const [activeTab, setActiveTab] = useState(() => tabFromPath(location.pathname))

    useEffect(() => {
        const onPopState = () => setActiveTab(tabFromPath(location.pathname))
        window.addEventListener('popstate', onPopState)
        return () => window.removeEventListener('popstate', onPopState)
    }, [])

    const selectTab = (tab: Tab) => {
        if (tab === activeTab) return
        setActiveTab(tab)
        history.pushState(null, '', `/${tab.id}`)
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header activeTab={activeTab} selectTab={selectTab} />
            <main className="flex flex-1 flex-col px-4 py-8 sm:px-8">
                <section role="tabpanel" className="flex flex-1 flex-col gap-8">
                    <activeTab.Content tab={activeTab} />
                </section>
            </main>
        </div>
    )
}
