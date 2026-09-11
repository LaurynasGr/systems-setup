import type { ToolToInstall } from '../constants'
import { BUN, GH_CLI, HOMEBREW, NVM } from '../linux/tools'

export const GNU_COREUTILS: ToolToInstall = {
    name: 'GNU coreutils',
    description:
        'The GNU core utilities (ls, cat, cp, and friends), installed with a g prefix so they don’t clash with the macOS BSD versions. Provides the gls command used by the ll alias below.',
    commands: ['brew install coreutils'],
    url: 'https://www.gnu.org/software/coreutils/',
}

export const macosTools = [HOMEBREW, GNU_COREUTILS, NVM, BUN, GH_CLI] as const
