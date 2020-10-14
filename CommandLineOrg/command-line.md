# Commands
    pwd -   Present working directory. (ex. /User/tylernguyen)

    ls  -   List all contents in current folder or location.

        ls -l   -   Long. Gives more information.
        ls -a   -   All. List everything. Even hidden items. Starts with a dot.
    
    cd  -   Change directory.

        cd /    -   Root directory.
        cd ~    -   Home directory.  

# Git:
    git init    -   Initializes the current directory.
    git status
    git add
    git commit -m "First Commit"    -   -m allows for message.

To add to repository:  
> 1. git add "file-name"
> 2. git commit -m "message"

3. Make a new repository.
4. Copy the http url. Run. Do the same for origin master. (Should be remote add then push.)

To edit an existing repository:
> 1. git add "file-name"
> 2. git commit -m "message"
> 3. git push origin

To remove a file from github:
1. Go into file location in terminal.
> 2. git rm \<file1> \<file2> \<file3>
> 3. git commit -m "message"
> 4. git push

To make a new repository:
1. First make a repository in GitHub. Make with README.
2. Copy HTTPS.
3. Pull up terminal and make a directory.
> 4. git clone
> 5. Paste copied HTTPS
> 6. vim README.md
7. Edit the README.md
> 8. git add README.md
> 9. git commit -m "comment"
> 10. git push