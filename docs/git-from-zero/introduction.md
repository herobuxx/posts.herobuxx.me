---
slug: /gfz/introduction
sidebar_position: 1
pagination_prev: null
---

# Introduction to Git

Git is one of the most popular tools for version control. It’s free, open-source, fast, and used everywhere!

## What is Version Control?

Version control software (VCS) helps keep track of every change you make to your code. It makes it easy to look back at changes, undo mistakes, and work with others on the same project.

## So, What is Git? And Why Does It Exist?

Out of all the version control systems, Git is super popular, especially because it’s open-source. It was created by Linus Torvalds (the guy behind Linux) because there weren’t many good, free options that could handle the big demands of developing the Linux kernel. So, in 2005, Git was born—and it’s been the go-to tool ever since!

## Basic Git Terms You Should Know

**1. Repository (Repo):**  
A repo is where Git stores all your project files and the history of changes. It can live on your computer (local) or on platforms like GitHub or GitLab (remote). Think of it as your project’s home base.

**2. Commit:**  
A commit is like taking a snapshot of your project at a certain point in time. It saves your changes and gives them a unique ID (called a “hash”). You also add a short message to describe what you did.

**3. Branch:**  
A branch is like a separate workspace for your project. Git starts you off with a branch called `main` (or `master`). You can make new branches to try out different features without messing up the main project.

**4. Clone:**  
Cloning means making a full copy of a repo on your computer. When you clone, you get everything—files, branches, and history.

**5. Fork:**  
A fork is your own copy of someone else’s repo. You can mess with it, make changes, and experiment without touching the original project. It’s handy for contributing to open-source projects.

**6. Merge:**  
Merging is how you bring changes from one branch into another, like when you finish a feature and want to add it back into the `main` branch. Git tries to combine the changes for you, but if things don’t line up perfectly, you’ll get a “conflict” (more on that later).

**7. Pull and Push:**  
- **Pull:** Grab the latest changes from a remote repo and bring them to your local one.
- **Push:** Send your local changes up to the remote repo for everyone else to see.

**8. Cherry-picking:**  
Cherry-picking is when you take specific changes (commits) from one branch and apply them to another. It’s like picking only the best parts and adding them to your project.

**9. Staging Area (Index):**  
The staging area is like a waiting room for changes before they’re committed. You use `git add` to move changes here before committing them.

**10. Working Directory:**  
This is where your project files live on your computer. Changes here are untracked by Git until you stage them.

**11. Conflict:**  
A conflict happens when Git doesn’t know how to merge changes from different branches, usually because two people changed the same part of a file. You’ll have to jump in and decide which changes to keep.

**12. Rebase:**  
Rebasing is another way to bring changes from one branch into another, but instead of merging, it rewrites the history to make it look cleaner. It’s powerful but can be tricky, so use with care!
