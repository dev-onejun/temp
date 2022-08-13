## branch
### How to use branch
1) make
`git branch ${branch_name}`
2) select
`git checkout ${branch_name}`

* if you want ADD,COMMIT,PUSH for this branch
every thing is same.
* if you want merge
`git checkout main(master)`<br/>
`git merge ${branch_name}`<br/>
Furthermore, you can PUSH after upward things.

3) delete
`git branch -d ${branch_name}`

## Connect by SSH with GITHUB
### How
https://www.lainyzine.com/ko/article/creating-ssh-key-for-github/

## undo commit
https://www.lainyzine.com/ko/article/git-reset-and-git-revert-and-git-commit-amend/

## About `git rm`
https://confluence.curvc.com/display/public/ASD/git+rm

## Setting the default editor for Git
1) `$ git config --global core.editor 'vim'`
2) `$ export GIT_EDITOR=vim`
