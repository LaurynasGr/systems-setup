import type { ToolToInstall } from '../constants'

export const HOMEBREW: ToolToInstall = {
    name: 'Homebrew',
    description:
        'The missing package manager for macOS (and Linux). Installs command-line tools and apps from the terminal — other brew commands depend on it.',
    commands: ['/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"'],
    url: 'https://brew.sh',
}

export const NVM: ToolToInstall = {
    name: 'nvm',
    description:
        'Node Version Manager — install and switch between multiple Node.js versions per shell or per project.',
    commands: ['curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.7/install.sh | bash', 'nvm i --lts'],
    url: 'https://github.com/nvm-sh/nvm',
}

export const BUN: ToolToInstall = {
    name: 'Bun',
    description:
        'Fast all-in-one JavaScript runtime, bundler, test runner and package manager — a drop-in replacement for Node.js and npm.',
    commands: ['curl -fsSL https://bun.com/install | bash'],
    url: 'https://bun.com/docs/installation',
}

export const linuxTools = [HOMEBREW, NVM, BUN] as const
