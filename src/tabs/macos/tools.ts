import type { ToolToInstall } from '../constants'
import { BUN, GH_CLI, GNUPG, HOMEBREW, LLM_CODING_TOOLKIT, NVM } from '../linux/tools'

export const GNU_COREUTILS: ToolToInstall = {
    name: 'GNU coreutils',
    description:
        'The GNU core utilities (ls, cat, cp, and friends), installed with a g prefix so they don’t clash with the macOS BSD versions. Provides the gls command used by the ll alias below.',
    commands: ['brew install coreutils'],
    url: 'https://www.gnu.org/software/coreutils/',
}

/** Shared GnuPG steps, minus the GPG_TTY one — pinentry-mac replaces the terminal prompt entirely. */
const gnupgSharedSteps = GNUPG.commands.filter(
    (command) => typeof command === 'string' || !command.code.includes('GPG_TTY'),
)

export const GNUPG_MACOS: ToolToInstall = {
    ...GNUPG,
    description: `${GNUPG.description} On macOS, pair it with pinentry-mac so the passphrase is asked for in a native dialog (and can be stored in Keychain) instead of the terminal — otherwise every signed commit prompts again, and signing fails outright when git runs without a TTY, e.g. from an editor or an agent.`,
    commands: [
        ...gnupgSharedSteps,
        {
            code: 'brew install pinentry-mac',
            description: 'A native macOS passphrase dialog for gpg-agent, with a "Save in Keychain" checkbox.',
        },
        {
            code: `printf 'pinentry-program %s\\ndefault-cache-ttl 34560000\\nmax-cache-ttl 34560000\\n' "$(brew --prefix)/bin/pinentry-mac" > ~/.gnupg/gpg-agent.conf`,
            description:
                'Points gpg-agent at pinentry-mac and raises the passphrase cache to 400 days (34560000 seconds), so the agent keeps the passphrase for as long as it is running.',
        },
        {
            code: 'gpgconf --kill gpg-agent',
            description: 'Restarts gpg-agent so it picks up the new config (it relaunches on the next gpg call).',
        },
        {
            code: 'echo test | gpg --clearsign > /dev/null',
            description:
                'Triggers a signing prompt once. In the dialog that appears, enter the passphrase and tick "Save in Keychain" — from then on, signing never asks again.',
        },
    ],
}

export const macosTools = [HOMEBREW, GNU_COREUTILS, NVM, BUN, GH_CLI, LLM_CODING_TOOLKIT, GNUPG_MACOS] as const
