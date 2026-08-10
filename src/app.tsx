import { useEffect, useState } from 'react'
import { Header } from './components/header'
import { Tabs } from './tabs'
import { TABS, type TabId } from './tabs/constants'

function tabFromPath(pathname: string): TabId {
    const segment = pathname.split('/').filter(Boolean)[0]
    const tab = TABS.find((t) => t.id === segment)
    return tab?.id ?? 'linux'
}

export function App() {
    const [activeTab, setActiveTab] = useState<TabId>(() => tabFromPath(location.pathname))

    useEffect(() => {
        const onPopState = () => setActiveTab(tabFromPath(location.pathname))
        window.addEventListener('popstate', onPopState)
        return () => window.removeEventListener('popstate', onPopState)
    }, [])

    const selectTab = (id: TabId) => {
        if (id === activeTab) return
        setActiveTab(id)
        history.pushState(null, '', `/${id}`)
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header activeTab={activeTab} selectTab={selectTab} />
            <Tabs activeTab={activeTab} />
        </div>
    )
}
