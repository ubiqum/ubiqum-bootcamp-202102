**BASICS**

**git init** to create git repository in the current directory

**git status** to check the status of a repository

**git** **add filename** to move a file or a change to the staging area

**git add .** to add everything to a repository (**.** means
**everything**)

**git rm -f** to force removing a file

**git rm \--cached** ***filename*** to not track a file (such as one
that is automatically generated anyway or just not needed)

**git commit** to commit (and follow instructions for configuring the
e-mail and username, **git commit -m** to add a message (ex: "Initial
commit")

**git log** to see the changes, **git log -a** to include all the
tracked files, **git log \--oneline** to see a simplified form of the
log

**git checkout** ***commit id*** to change the HEAD to the desired
commit, **git checkout master** to go back to the master branch (the
latest commit)

**git reset \--hard** ***commit id*** to hard reset to a certain commit

**git revert** ***commit id*** to revert to a certain commit (or revert
a revert)

**touch .gitignore** to untrack a file; inside the file write the name
of the files that you want to ignore; (if you modified the files you
don't want to track BEFORE committing, then you need to remove the
cached files by typing **git rm -r \--cached .;** then **git add .** and
then **git commit -m "added .gitignore"** (or similar message) to track
**.gitignore** so that it untracks your files, lmao); for a directory,
inside the **.gitignore** file, add **dirname/\*** (don't forget to
**git add . and git commit**); adding a line starting with \# with a
comment is also useful

**GIT BRANCHES**

you need to commit before you create a branch, otherwise your
development branch is going to be considered the master branch, the
master branch should be the release branch, what you actually want to
release as a stable version

**git checkout -b** ***branch\_name*** to create a branch and switch to
it

**git branch** ***branch\_name*** to just create a branch

**git checkout master** to switch back to the master branch from other
branches

**git branch -a** to list all branches (**\*** signifies the branch
you're currently on)

**git branch -d** ***branch\_name*** to delete a branch

**git merge** ***branch\_name*** to merge a branch into your current
branch

**git checkout HEAD\^** to checkout backwards in time, one commit at a
time

**git checkout** ***commit\_id*****\^** to checkout to the parent commit
of the commit specified

**git checkout HEAD\~*****number*** to checkout the number of times
specified after "\~" (e.g.: **git checkout HEAD\~4** for 4 commits down
the line)

**git branch -f** ***branch\_name*** **HEAD\~*****number*** to create a
branch forcibly moving from the specified branch onto the parent ones
using **HEAD\~*****number*** (e.g.: **git branch -f main HEAD\~3**) or
**git branch -f** ***branch\_to\_move current\_branch***

**git cherry-pick** ***commit\_id\_1 commit\_id\_2 etc.*** to copy the
desired commits to the current branch

**git rebase -i** ***commit\_id*** for interactive rebase = git will
open up a UI to show which commits will be copied below the target of
the rebase and their details

**git tag** ***desired\_tag\_name*** ***commit\_id*** to tag a certain
commit (e.g.: **git tag v1 frcv476c74983275893**)

**git describe** ***branch\_name*** to show where you are relative to
the closest tag

**GIT & GITHUB**

**git remote add origin** ***link*** to connect your local git
repository to your github repository (create a **remote repository**)

**git remote -v** to see the origin of your git repository to check if
you've connected your git repo and girhub repo properly (you should see
**fetch** and **push**)

**git pull** to pull a github repo; **git pull origin**
***branch\_name*** for pulling a specific branch

**git push -u origin** ***branch\_name*** to push and remember branch
that you're pushing (you won't have to type the name of the branch
again, you will just have to type **git pull** or **git push**); you
have to commit first

**git push origin \--delete** ***branch\_name*** to delete a branch from
Git and GitHub without pushing and pulling so much

**git rebase** ***branch\_name*** to move a branch onto the tip/HEAD of
another branch (instead of merging branches); to merge branches using
**git rebase**, you have to **git** **checkout** the name of the branch
you want to merge onto the main/master branch and then **git rebase
main/master**

**git fetch** to fetch data from a remote repository

**git pull** to **git fetch** and **git merge** ***origin\_branch***
(merge whatever branch was fetched) at the same time

**git flow init** on existing repo will create the ***develop*** branch
