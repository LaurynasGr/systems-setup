import windowsTerminalPicture from '@/assets/apps/windows-terminal.webp'
import wslPicture from '@/assets/apps/wsl.webp'
import type { AppsToInstall } from '../constants'

const WSL: AppsToInstall = {
    name: 'WSL 2',
    description: 'Windows Subsystem for Linux — run a full Linux environment directly on Windows.',
    url: 'https://apps.microsoft.com/detail/9p9tqf7mrm4r?hl=en-US&gl=LT',
    repoUrl: 'https://github.com/microsoft/WSL',
    picture: wslPicture,
}

const WINDOWS_TERMINAL: AppsToInstall = {
    name: 'Windows Terminal',
    description: "Microsoft's modern terminal with tabs, panes and profiles for PowerShell, CMD and WSL.",
    url: 'https://apps.microsoft.com/detail/9n0dx20hk701?hl=en-US&gl=LT',
    repoUrl: 'https://github.com/microsoft/terminal',
    picture: windowsTerminalPicture,
}

export const windowsApps = [WSL, WINDOWS_TERMINAL] as const
