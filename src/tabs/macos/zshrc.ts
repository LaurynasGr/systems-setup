import type { ConfigSnippet } from '../constants'

export const macosZshrcSnippets = [
    {
        code: "alias ll='gls -alF --color=auto'",
        description:
            'Creates an ll shortcut that lists files using GNU ls (gls, from Homebrew coreutils) in long format (-l), including hidden dotfiles (-a), with a type indicator appended to each name (-F, e.g. / for directories and * for executables) and colorized output.',
    },
    {
        code: "alias grep='grep --color=auto'",
        description:
            'Makes grep highlight the matching part of each line in color whenever output goes to a terminal, so matches are easier to spot in search results.',
    },
    {
        code: "PROMPT='%B%F{green}%n@%m%f:%F{blue}%~%f%b$ '",
        description:
            'Customizes the zsh prompt: %B/%b make it bold, %F{green}%n@%m%f shows username@hostname in green, and %F{blue}%~%f shows the current directory in blue (with your home folder abbreviated as ~), followed by a plain "$ ".',
    },
] as const satisfies ConfigSnippet[]
