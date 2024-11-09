---
slug: /gfz/configuration
sidebar_position: 3
---

# Configuring Git

We’ve got Git installed, but now it’s time to make it our own! Let’s configure it so it works the way we want and make our life a little easier.

## Git Identity

First things first: Git needs to know who you are so it can tag your commits with your name and email. Let's tell Git who you are:

Start by setting your name:
```
git config --global user.name "Your Name"
```

Next, give Git your email:
```
git config --global user.email "your.email@example.com"
```
**Pro tip**: Use the same email you registered with on GitHub/GitLab or any other Git provider you're using. This makes things smooth when pushing your commits.

## Colored Output

Git's output is functional, but let’s make it prettier! You can enable color to give it some flair. Just type:
```
git config --global color.ui auto
```

## SSH Keys

SSH keys are your ticket to connecting securely with remote repositories (like GitHub or GitLab) without having to enter your password every time. It’s secure and super handy — as long as you keep your private key to yourself!

### Generating a New SSH Key
Let’s generate a shiny new SSH key:
```
ssh-keygen -t ed25519 -C "your_email@example.com"
```

If you’re on an older system and don’t support ED25519 (don’t worry, we’ve all been there), you can use RSA instead:
```
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
Boom! You’ve got an SSH key. Now, remember: only share your **public** key. Keep that private key locked up tight.

### Getting Your Public Key

Next, let’s grab your public key so we can add it to your remote Git account. Run this:

```
cat ~/.ssh/id_ed25519.pub
```

Now just copy the output (your public key) — we’ll need it in the next step.

### Adding the Key to Your Remote Git Account

There are lots of Git providers out there, but we’ll use GitHub as an example (since it’s the most popular). Here’s how to add your SSH key to GitHub:

1. Go to your GitHub profile settings.
2. In the left-hand menu, click on **SSH and GPG keys**.
3. Hit **Add New SSH Key**.
4. Paste in the public key you copied earlier.

### Adding Your Key to the SSH Agent

To make sure your SSH key is used properly, we need to add it to the SSH agent. Just run:
```
eval "$(ssh-agent -s)"
```

Then add your key to the agent:
```
ssh-add ~/.ssh/id_ed25519
```

### Testing the key

Finally, let’s make sure everything’s working! Try connecting to GitHub via SSH to see if your setup is good to go:

```
ssh git@github.com
```

If it works, you should see something like this:
```
[10.11.2024 03:23:17] [buxx@Halcyon] [~/Desktop/Projects/post]
$ ssh git@github.com
PTY allocation request failed on channel 0
Hi herobuxx! You've successfully authenticated, but GitHub does not provide shell access.
Connection to github.com closed.
```