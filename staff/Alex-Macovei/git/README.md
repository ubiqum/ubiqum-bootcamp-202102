##List of git commands learned


1. **git init** 
    - creates a local repository in the selected directory

2. **git clone**
    - creates a copy of specified repository (remote or local)

3. **git branch**
    - creates a branch with specific name
    - with -d it deletes the branch with specified name after

4. **git checkout/switch**
    - moves between branches
    - with checkout -b it creates a branch with specified name after and switches to it

5. **git add**
    - adds specified file/s to the staging area, from where the it can be committed

6. **git commit -m "msg"**
    - applies the changes added in the staging area to the repository

7. **git rebase**
    - repositions a specified branch from one branch to another specified branch

8. **git revert**
    - reverts the repository back to the last commit by creating a new commit

9. **git status**
    - brings up a list of files changed and/or deleted

10. **git log**
    - lists all commits, branches, positions, the HEAD position, author, date and message of commits

11. **git remote add origin**
    - connects to a remote repository

12. **git merge**
    - combines the HEAD branch with speficied branch

13. **git fetch**
    - pulls from the remote repository without merging, creating another branch if you've commited before fetching

14. **git pull**
    - same as git fetch, but with git merge
    
15. **git push**
    - pushes all added uppdates to the remote repository
    - in push, pull and fetch, it can be specified where and from where, by typing push/pull/fetch origin(source:destination)
    - they can also be used to create or remove branches
