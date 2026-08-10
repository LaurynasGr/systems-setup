import { Command, Grid2x2, Terminal } from 'lucide-react'
import { LinuxTab } from './linux-tab'
import { MacosTab } from './macos-tab'
import { WindowsTab } from './windows-tab'

export interface Tab {
    id: string
    label: string
    Icon: typeof Terminal
    accentClassName: string
    Content: React.ComponentType<TabProps>
}

export interface TabProps {
    tab: Omit<Tab, 'Content'>
}

export const TABS = [
    { id: 'linux', label: 'Linux', Icon: Terminal, accentClassName: 'text-amber-500', Content: LinuxTab },
    { id: 'windows', label: 'Windows', Icon: Grid2x2, accentClassName: 'text-sky-500', Content: WindowsTab },
    { id: 'macos', label: 'MacOS', Icon: Command, accentClassName: 'text-violet-500', Content: MacosTab },
] as const satisfies Tab[]

export type TabId = (typeof TABS)[number]['id']
