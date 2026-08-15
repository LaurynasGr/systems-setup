import type { ToolToInstall } from '../constants'

export const HOMEBREW: ToolToInstall = {
    name: 'Homebrew',
    description:
        'The missing package manager for macOS (and Linux). Installs command-line tools and apps from the terminal — other brew commands depend on it.',
    command: '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"',
    url: 'https://brew.sh',
}

export const linuxTools = [HOMEBREW] as const
