---
slug: /gfz/installation
sidebar_position: 2
---

# Installing Git
Now that we've introduced Git and its basic terminology, let's begin by installing it.

## Linux
Installing Git is quite easy, especially on Linux distributions. Here, I am using Arch Linux, so I can simply type:
```
sudo pacman -S git
```

On Ubuntu/Debian (apt):
```
sudo apt install git-all
```

On RHEL/CentOS (dnf):
```
sudo dnf install git-all
```

Or you might need to refer to [this page](https://git-scm.com/downloads/linux) for other distros.

### macOS
For Apple users, you can use Homebrew to install Git on your Mac. Just type:

```
brew install git
```
If you prefer a GUI for Git, you can install it with:
```
brew install git-gui
```

### Windows
For Windows users, you can install Git using Winget with this command:
```
winget install --id Git.Git -e --source winget
```

Alternatively, you can download the installer from [here](https://git-scm.com/downloads/win).