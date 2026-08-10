import windowsTerminalPicture from '@/assets/apps/windows-terminal.webp'
import type { AppsToInstall } from '../constants'

export const WINDOWS_TERMINAL: AppsToInstall = {
    name: 'Windows Terminal',
    description: "Microsoft's modern terminal with tabs, panes and profiles for PowerShell, CMD and WSL.",
    url: 'https://apps.microsoft.com/detail/9n0dx20hk701?hl=en-US&gl=LT',
    repoUrl: 'https://github.com/microsoft/terminal',
    picture: windowsTerminalPicture,
}
