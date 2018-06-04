# Automate daily development tasks with bash

This is the GitHub repo to accompany the Egghead Course "Automate daily development tasks with bash". Watch it on [egghead.io](https://egghead.io/courses/automate-daily-development-tasks-with-bash).

This repository is structured more as a "cheatsheet" rather than having any runnable code. Click the lesson links to see the code that's covered in each lesson.

---

Whether it’s for npm install or some git commands, most front-end devs have used bash sometime. Bash has been around awhile (first released in 1989) and it’s proven to be very efficient at automating tasks. Plus, bash is available on every commonly used operating system—it comes with macOS, is the default shell for many Linux distros, and is available on Windows via an emulator or the new Linux subsystem. In this course, we’ll learn the essentials of what every front-end developer should know about bash. The topics we cover will give you confidence in doing things like creating build scripts that run on continuous integration servers or quickly testing and debugging an API with `curl`. We’ll go over:
- Interacting with the file system
- Creating, moving, copying, and deleting files and folders
- Finding files and text patterns in files
- Creating and running scripts
- Language syntax like variables and conditionals

## Lessons
1. [Navigate the filesystem in bash](#navigate-the-file-system)
2. [View files and folders in bash](#view-files-and-folders-in-bash)
3. [Create and Delete Files and Folders in bash](#create-and-delete-files-and-folders)
4. Move and Copy Files and Folders with bash
5. Find Files and Folders with `find` in bash
6. Search for text with `grep`
7. Make HTTP requests in bash with `curl`
8. Create and run bash scripts
9. Store and Use Values with bash Variables
10. Understand and use functions in bash
11. Understand exit statuses in bash
12. Use Conditional Statements in bash
13. Chain Commands with Pipes and Redirect Output in bash

## [Navigate the file system](https://egghead.io/lessons/bash-navigate-the-filesystem-in-bash)

#### Change bash's current working directory
```bash
cd <file path here>
# to go up a directory from your current directory
cd ..
```

#### List a directory's contents
```bash
ls
# for more details, add -l (long)
ls -l
# this will output something like this:
# -rw-r--r--  1 cameronnokes  staff  1237 Jun  2 22:46 index.js
# in order, those columns are:
#   permissions for you, your group, all
#   number of links (hardlinks & softlinks)
#   owner user
#   owner group
#   file size
#   last modified time
#   file name

# to see hidden files/folders (like .git or .npmignore)
ls -a
# Note, flags can be combined like so
ls -la
```

## [View files and folders in bash](https://egghead.io/lessons/bash-view-files-and-folders-in-bash)

#### Output a file to the screen (stdout)
```bash
cat <file name>
# shows it with line numbers
cat -n <file name>
```

#### View a file in bash
```bash
# view the file without dumping it all onto your screen
less <file name>
# Some useful shortcuts in less
#   Shift+g   jump to end
#   g         go back to top
#   /         search
#   q         quit/close
```

#### View file/folder in default application associated with it
```bash
open <file/folder name>
# view current directory in Finder
open .
# specify an application to use
open -a TextEdit <file name>
```

## [Create and delete files and folders](https://egghead.io/lessons/bash-create-and-delete-files-and-folders-in-bash)

#### Create a file
```bash
touch <file name>
```

#### Set or append to a file
```bash
# set the file's contents
echo 'hi' > file.txt
# append to file's contents
echo 'hi' >> file.txt
# note that if you pass a file name that doesn't exist, it'll get created on the fly
```

#### Create a directory
```bash
mkdir <folder name>
# make intermediary directories as needed
mkdir -p parent/child/grandchild
```

#### Remove a file
```bash
# Note, this permanently deletes a file
rm <file name>
# Remove a folder and it's contents, recursively
rm -rf <folder name>
```


## [Move and Copy Files and Folders with bash]()
## [Find Files and Folders with `find` in bash]()
## [Search for text with `grep`]()
## [Make HTTP requests in bash with `curl`]()
## [Create and run bash scripts]()
## [Store and Use Values with bash Variables]()
## [Understand and use functions in bash]()
## [Understand exit statuses in bash]()
## [Use Conditional Statements in bash]()
## [Chain Commands with Pipes and Redirect Output in bash]()
