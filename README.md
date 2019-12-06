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

Click on a lesson below to jump to the code samples for that lesson.

## Lessons
1. [Navigate the filesystem in bash](#navigate-the-file-system)
2. [View files and folders in bash](#view-files-and-folders-in-bash)
3. [Create and Delete Files and Folders in bash](#create-and-delete-files-and-folders)
4. [Move and Copy Files and Folders with bash](#move-and-copy-files-and-folders-with-bash)
5. [Find Files and Folders with `find` in bash](#find-files-and-folders-with-find-in-bash)
6. [Search for text with `grep`](#search-for-text-with-grep)
7. [Make HTTP requests in bash with `curl`](#make-http-requests-in-bash-with-curl)
8. [Create and run bash scripts](#create-and-run-bash-scripts)
9. [Store and Use Values with bash Variables](#store-and-use-values-with-bash-variables)
10. [Understand and use functions in bash](#understand-and-use-functions-in-bash)
11. [Understand exit statuses in bash](#understand-exit-statuses-in-bash)
12. [Use Conditional Statements in bash](#use-conditional-statements-in-bash)
13. [Chain Commands with Pipes and Redirect Output in bash](#chain-commands-with-pipes-and-redirect-output-in-bash)

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
#   Shift+g   (jump to end)
#   g         (go back to top)
#   /         (search)
#   q         (quit/close)
```

#### View file/folder in default application associated with it
```bash
open <file/folder name>
# view current directory in Finder
open .
# specify an application to use
open <file name> -a TextEdit
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


## [Move and Copy Files and Folders with bash](https://egghead.io/lessons/bash-move-and-copy-files-and-folders-with-bash)

#### Move a file
```bash
mv <target> <destination>
# for example, to rename a file
mv a.js b.js
# move all files in a folder to another folder
mv lib/* src
```

#### Copy a file
```bash
cp <target> <destination>
# copy everything recursively from one folder to another
cp -R src/* lib
```

## [Find Files and Folders with `find` in bash](https://egghead.io/lessons/bash-find-files-and-folders-with-find-in-bash)
```bash
# find all the PNGs in a folder
find <path> -name "*.png"
# find all the JPGs (case insensitive) in a folder
find <path> -iname "*.jpg"
# find only directories
find <path> -type d
# delete all matching files
find <path> -name "*.built.js" -delete
# execute an arbitrary action on each match
# remember `{}` will be replaced with the file name
find <path> -name "*.png" -exec pngquant {} \;
```

## [Search for text with `grep`](https://egghead.io/lessons/grep-search-for-text-with-grep)

```bash
# Basic usage
grep <pattern> <target file or glob>
# Useful flags
# --color     (colorizes matches)
# -n          (show line numbers)
# -C <number> (show N lines above/below match for context)
# -e          (regex search)
```

## [Make HTTP requests in bash with `curl`](https://egghead.io/lessons/http-make-http-requests-in-bash-with-curl)
The test server is available in the `curl-practice-server` directory. Run `npm install && npm start` to run it.
```bash
curl <url>
# Useful flags
# -i    (show response headers only)
# -L    (follow redirects)
# -H    (header flag)
# -X    (set HTTP method)
# -d    (request body)
# -o    (output to a file)

# to POST JSON
# (technically you don't need -X POST because -d will make it POST automatically, but I like to be explicit)
curl -X POST -H "Content-Type: application/json" -d '{ "title": "Curling" }' http://localhost:3000/api/posts

# POST a url encoded form
curl -X POST --data-urlencode title="Curling again" http://localhost:3000/api/posts

# multiline curl (applies to any bash command)
curl -i -X PUT \
-d '{ "title": "Changed title" }' \
-H "Content-Type: application/json" \
http://localhost:3000/api/posts

# pretty print JSON with jsome
curl https://swapi.co/api/people/1/ | jsome
```

Here's the [jsome](https://www.npmjs.com/package/jsome) package that pretty prints JSON

## [Create and run bash scripts](https://egghead.io/lessons/bash-create-and-run-bash-scripts)

```bash
echo 'echo Hello World' > script.sh
chmod u+x script.sh
./script.sh
```
The `init-js.sh` script for scaffolding a JS project
```bash
echo "Initializing JS project at $(pwd)"
git init
npm init -y # create package.json with all the defaults
mkdir src
touch index.js
code .
```

One way to add that script to your `$PATH`:
```bash
cp init-js.sh /usr/local/bin/init-js
```

## [Store and Use Values with bash Variables](https://egghead.io/lessons/bash-store-and-use-values-with-bash-variables)
```bash
# no spaces between name, =, and value
var=123
echo $var
# to make it accessible to all child processes of current shell, export it
export var
# this deletes the variable
unset var
```
To see all environment variables
```bash
env
```
`clone-to-temp.sh` script:
```bash
temp=$(mktemp -d)
git clone --branch $1 $PWD $temp
echo "branch $1 cloned to $temp"
# run some tasks, tests, etc here
```

## [Understand and use functions in bash](https://egghead.io/lessons/bash-understand-and-use-functions-in-bash)

```bash
greet() {
  echo "$1 world"
}

greeting=$(greet "howdy")

echo "the greeting is $greeting"
```

```bash
global=123

test() {
  echo "global = $global"
  local local_var="i'm a local"
  echo "local_var = $local_var"
}

test

echo "global = $global"
echo "local_var = $local_var" # will be empty because it's out of scope
```

## [Understand exit statuses in bash](https://egghead.io/lessons/bash-understand-exit-statuses-in-bash)

Get the last run command's exit status
```bash
ls
# will be 0 if it ran successfully, 1 - 255 for an error
echo $?
```
Exit statuses and functions. `script.sh`
```bash
ok() {
  return 0
}

fail() {
  return 1
}

fail
ok
```

```bash
./script.sh
echo $? # exit status is same as the last run function/command
```

## [Use Conditional Statements in bash](https://egghead.io/lessons/bash-use-conditional-statements-in-bash)

Basic form
```bash
# Some conditional primaries that can be used in the if expression:
#   =, !=      string (in)equality
#   -eq, -ne   numeric (in)equality
#   -lt, -gt   less/greater than
#   -z         check variable is not set
#   -e         check file/folder exists

if [[ $USER = 'cameronnokes' ]]; then
  echo "true"
else
  echo "false"
fi
```

Conditionals can be used inline in a more ternary-like format
```bash
[[ $USER = 'cameronnokes' ]] && echo "yes" || echo "no"
```

`check-status.sh` for checking a URL is responding with a 200
```bash
check_status() {
  local status=$(curl -ILs $1 | head -n 1 | cut -d ' ' -f 2)
  if [[ $status -lt 200 ]] || [[ $status -gt 299 ]]; then
    echo "$1 failed with a $status"
    return 1
  else
    echo "$1 succeeded with a $status"
  fi
}

check_status https://example.org
check_status https://example.org/404
```

## [Chain Commands with Pipes and Redirect Output in bash](https://egghead.io/lessons/bash-chain-commands-with-pipes-and-redirect-output-in-bash)

Pipes
```bash
# ps ax will list all running processes
ps ax | grep Chrome | less
# get the file size after uglify + gzip
uglifyjs -c -m -- index.js | gzip -9 | wc -c
```

Redirection
```bash
# redirect stdout to a file
ls > ls.txt
# append stdout to a file
echo "hi" >> ls.txt
```


# Additional learning resources
- You can view a command's documentation right in bash with `man <command name>`.
- [Official bash manual](https://www.gnu.org/software/bash/manual/bash.html)
- [TLDP bash programming intro, basic](http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html)
- [TLDP bash programming intro, advanced](http://www.tldp.org/LDP/abs/html/)
