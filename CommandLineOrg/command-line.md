# Commands

    pwd -   Present working directory. (ex. /User/tylernguyen)

    ls  -   List all contents in current folder or location.

        ls -l   -   Long. Gives more information.
        ls -a   -   All. List everything. Even hidden items. Starts with a dot.

    cd  -   Change directory.

        cd /    -   Root directory.
        cd ~    -   Home directory.

---

# Git:

    git init    -   Initializes the current directory.
    git status
    git add
    git commit -m "First Commit"    -   -m allows for message.

When you make a git, it installs 3 locations.

    - Working Directory
    - Staging Area
    - Local Repository

Github has a remote repository. When you _clone_ a file, it creates two copies, one in the **local repository** and another in the **working directory**.

All changes happen in the working directory and once you are ready to save and update, you add and commit into the **staging area** and into the **local repository**. Pushing uploads it back into the remote repository.

When you _pull_ a file, it goes into your local repository first and then goes straight into the working directory.

---

## To add to repository:

> 1. git add "file-name"
> 2. git commit -m "message"

3. Make a new repository.
4. Copy the http url. Run. Do the same for origin master. (Should be remote add then push.)

## To edit an existing repository:

> 1. git add "file-name"
> 2. git commit -m "message"
> 3. git push

## To remove a file from github:

1. Go into file location in terminal.
   > 2. git rm \<file1> \<file2> \<file3>
   > 3. git commit -m "message"
   > 4. git push

## To make a new repository:

1. First make a repository in GitHub. Make with README.
2. Copy HTTPS.
3. Pull up terminal and make a directory.
   > 4. git clone
   > 5. Paste copied HTTPS
   > 6. vim README.md
4. Edit the README.md
   > 8. git add README.md
   > 9. git commit -m "comment"
   > 10. git push

## To remove a .git from a parent repository.

> 1. rm -rf .git

## .gitignore

To ignore folder, do /{filename}
config.js ignores ipa keys. Gives access to google stuff.

new add
