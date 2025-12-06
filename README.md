# Git Practice Demo

This small demo website is designed so you can practice common Git commands locally.

Files included:

- `index.html` — simple UI with a task list and buttons
- `style.css` — basic styling with a dark toggle
- `script.js` — small JS to add items and toggle theme

Quick start (local):

1. Open a terminal and change to the project folder:

```bash
cd ~/Desktop/GitPractice
```

2. Initialize a git repository and make the first commit:

```bash
git init
git add .
git commit -m "chore: initial demo site"
```

3. Make a small change (edit `README.md` or `index.html`) and commit:

```bash
# edit a file, then
git add README.md
git commit -m "docs: tweak README"
```

4. Create a branch, make changes, and merge back:

```bash
git checkout -b feature/add-task-example
# edit script.js to add a sample task or change UI
git add .
git commit -m "feat: add example task"
# switch back and merge
git checkout main
git merge feature/add-task-example
```

5. Practice other commands:

- `git log --oneline --graph --decorate` — view history
- `git diff` — see unstaged changes
- `git stash` / `git stash pop` — stash work
- `git reset --soft HEAD~1` — undo last commit but keep changes staged
- `git revert <commit>` — create a revert commit

Optional: add a remote and push:

```bash
# create a repo on GitHub, then
git remote add origin git@github.com:YOUR_USER/YOUR_REPO.git
git branch -M main
git push -u origin main
```

Have fun practicing! If you want, I can run a few git commands here to demonstrate (I won't push anything without permission).
