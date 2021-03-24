Git commands
---
* **git status** state of the staging area
* **gitt add filename.txt** add file to staging area
* **git add .** add everything to staging area
* **git rm -f file.txt** remove file from git repository and folder/directory
* **git rm --cached file.txt** remove file from git stage area (file remain in folder/directory)
* **git config --global user.email "name@gmail.com"** set user email for git commits in all terminals
* **git config --global user.name "firstname.lastname"** set user name for git commits in all terminals
* **git commit --help** list of all git commit options
* **git commit -m "Message of the commit"** commit staging area with specified message to local repository
* **git commit -m "Initial commit"** usual message for initial commit
* **git commit -a** commit "all known" git files (so not the new onew which were to added to git tracking via git add)
* **git commit -am "Message of the commit"** 
* **git log** log / list of git commits
* **git log --oneline** log / list of git commits as one liners
* **git checkout COMMIT_ID** go back in time via specific commit ID
* **git checkout 3d7d553d898af9247fd2088ddf5fef9c204342b9** 
* **git checkout master** go back to the last commit
* **ger revert COMMIT_ID** revert commit (you can revert revert to cancel the effect out)
* **git reset** 
* **git reset --hard COMMIT_ID** permannetly reseting to the specified commit, should be rarely used
* **git reset --soft COMMIT_ID** change commit, but not remove any changes you have made; useful for fixing spelling errors
* **git reset --mixed COMMIT_ID** default reset command, so no need to specify it; useful for removing files which were commited accidentally (e.g. larger files)
* **git branch brach_name** create new branch
* **git checkout -b branch_name** create new branch and switch to it
* **git checkout -b dev** 
* **git checkout master** switch back to master branch
* **git branch -a** list of all branches
* **git branch -d branch_name** delete a branch
* **git merge branch_name** mege currently selected branch to the specified branch
* **git merge dev** 
