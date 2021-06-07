List of commands learned:

LOCAL

- git init: initializes a local repository on the directory you are currently (so be careful), using git flow init will create an additional branch called develop

- git add: copies the selected files into the stage area, adding a dot at the end adds all files. (git add .)

- git commit: replaces the files in the local repository with the ones in the stage area, updating in the case of already existing versions of the same file. Adding -m at the end allows you to write a message

- mk: creating command, mkdir creates a directory (ex: mkdir newFolder)

- rm: a deleting command that can be used in diferent ways, -f for force deleting a file or rmdir to delete a directory. Using --cached can be used to not track files (ex: rmdir newFolder)

- git status: shows the status of the repository

- git log: shows the commits you've made, adding --oneline shows a simplified version.

- git checkout: switches the HEAD to anoter branch, can also be used to switch HEAD to a specific commit of any branch (ex: git checkout devBranch)

- git tag: tags a commit with a specific message

- git revert: it cancels the last commit made

- git reset: there are three kinds, the soft one takes back the commit with the files returning to the stage area, the mix takes back the commit and the files from the staging area, and the hard one deletes entirely the commit and the changes on the files


BRANCHES

- git branch: lists branches, adding a name creates a branch with that name adding -d and a branch name deletes branches, adding -f a branch name and a target commit id allows to move the id of the branch, adding -a lists branches local and remote.

- git merge: merges the specified branch with the one you are in (ex: git merge hotFix)

- git rebase: is similar to merge but instead of having two parents, it fuses the branch you are on with the selected one by applying the changes and doing a commit

- git cherry-pick: applies the selected commit to the branch you are in


REMOTE

- git clone: takes your local and uploads it into a remote

- git remote add origin: links you local repository with a remote repository

- git fetch: takes the commits from the remote to your local without mingling them, simply takes the data

- git pull: fetch+merge in a single action, so takes all commits from the remote repository and merges them with your local, add origin and the name of a branch to pull a specific branch

- git push: takes the commits from your local and merges them with the remote repository