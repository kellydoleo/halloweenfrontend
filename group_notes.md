## Setting up local repo and branch

1. `git clone https://github.com/xxxxxxxxxxxxxxx.git anyNameForRepo` to initially clone it
2. `git checkout -b dev --track origin/dev` to then clone the dev branch
3. `git branch` to check that you are now in the dev branch
4. `git checkout -b christineTest` to create a new branch that just you work on
5. Make changes on your branch.
6. `git add .` and `git commit -m 'christinesTest'` to get your changes committed
7.  `git push origin christineTest` to push your branch that you created up to github.

## Pull Request
1.  Click on Pull requests at the top to go to the pull requests page
2. Click on "New Pull Request" 
3. Set the 'base' branch to dev and the 'compare' branch to yours .. ex christineTest branch
4. Click "Create pull request" and enter any comments for James

