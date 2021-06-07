List of commands learned:

command: short explanation <example>

git init: initializes a local repository <git init>
git add: copies the selected files into the stage area, adding a dot at the end adds all files. <git add .>
git commit: replaces the files in the local repository with the ones in the stage area, updating in the case of already existing versions of the same file. Adding -m at the end allows you to write a message <git commit -m "Initial Commit">
mkdir: creates a directory <mkdir newFolder>
rmdir: deletes a directory <rmdir newFolder>
git status: shows the status <git status>
git log: shows the commits you've made <git log>
git checkout: switches to anoter branch, can also be used to switch to a specific commit of any branch <git checkout devBranch>
git branch: lists branches, adding -d and a branch name deletes branches, adding -f a branch name and a target commit id allows to move the id of the branch  <git branch>
git merge: merges the branch you are in with another <git merge main>
git rebase: is similar to merge but instead of having two parents, it fuses the branch you are on with the selected one by applying the changes and doing a commit.
git clone: takes your local and uploads it into a remote <git clone>
git fetch: takes the commits from the remote without mingling them. <git fetch>
git pull: fetch+merge in a single action, so takes all commits from the remote repository and merges them with your local <git pull>
git push: takes the commits from your local and merges them with the remote repository <git push>