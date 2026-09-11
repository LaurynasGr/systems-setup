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

export const GH_CLI: ToolToInstall = {
    name: 'GitHub CLI',
    description:
        'GitHub on the command line — clone repos, open pull requests, review issues and run workflows without leaving the terminal.',
    commands: ['brew install gh'],
    url: 'https://cli.github.com',
}

export const LLM_CODING_TOOLKIT: ToolToInstall = {
    name: 'LLM Coding Toolkit',
    description:
        'CLI with helpful commands for coding with LLM agents — pull unresolved PR review comments into a clean markdown file, manage reusable prompt templates and GitHub tokens.',
    commands: ['bun install -g llm-coding-toolkit'],
    url: 'https://github.com/LaurynasGr/llm-coding-toolkit',
}

export const linuxTools = [HOMEBREW, NVM, BUN, GH_CLI, LLM_CODING_TOOLKIT] as const
