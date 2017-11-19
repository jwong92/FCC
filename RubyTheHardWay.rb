#pwd - print working directory. A directory is a folder. They are interchangeable in meaning. Files = Folders

#if ever you're lost, type pwd, followed by cd ~ to get back home. Before anything is written in terminal, ensure you are back home first.

#mkdir - make directories, also known as folders.
mkdir temp
mkdir temp/stuff
mkdir temp/stuff/fruit
mkdir temp/stuff/fruit/apples
#you're making directories in directories (files in files) called a "path". Directions to the computer of where you want to put something in the folders that make up computers hard disk.

#cd - change directories. You can move around inside the directories you made previously using cd.
$ cd temp
$ pwd
#~/users/Jessica/temp
$ cd temp/stuff
$ pwd
#~/users/Jessica/temp/stuff

#you can also input the entire directory at once, but you can't do it from the middle.
$ cd temp/stuff/fruit/apples
$ pwd
#~/Users/Jessica/temp/stuff/fruit/apples

$ cd ../../
$ pwd
#~Users/Jessica/temp/stuff
#../../ will move "up" in your directory or tree path.

#ls - lists out the contents of the directory you are currently in.

#rmdir to remove a directory
$ cd temp/stuff/fruit/apples
$ pwd
#~/users/Jessica/temp/stuff/fruit/apples
$ cd ..
$ pwd
#~/users/Jessica/temp/stuff/fruit
$ ls
# apples
$ rmdir apples
#Mac have .DS_store file inside so you can use (rm -rf apples)
#go to the directory above the file/directory you want to remove

#pushd and popd
$ cd temp
$ mkdir -p hello/there/path/jello
#This will automatically make a new directory path
$ pwd
#~users/Jessica/temp/hello/there/path/jello
$ cd ../../../
$ pwd
#~users/Jessica/temp/hello
$ pushd path/jello
#~users/Jessica/temp/hello/path/jello ~users/Jessica/temp/hello ~/temp
# I am pushing path "~users/Jessica/temp/hello" to a temporary folder, and simultanroously changing the current directory to ""~users/Jessica/temp/hello/path/jello". Notice the second output says ~/temp at the end, indicuating that path is in a temporary foler, while the first output will be your current working directory. You MUST specify a different path when you're pushing a saved path.
$ pwd
#~users/Jessica/temp/hello/there/path/jello
$ cd ../../
$ pwd
#~users/Jessica/temp/hello/there
$ mkdir loser
$ pwd
#~users/Jessica/temp/hello/there/loser
$ popd
#~users/Jessica/temp/hello
$ pwd
 #~users/Jessica/temp/hello
 #you use popd to go back to your previously saved file directory, and this is now your working directory.

 #touch (new-item in windows)
 $ cd temp
 $ touch iamcool.txt
 #you make a new text document in your temp folder
 $ ls
 #iamcool.txt
 $ touch presentation.ppt code.js
 $ ls
 # iamcool.txt presentation.ppt code.js
 #you can make blank files with a variety of extensions for the software of your choice.
 $ rm iamcool.txt
 #this will delete your file
 $ ls
 # presentation.ppt code.js

#cp and cp -r
$ cd temp
#~users/Jessica/temp
$ mkdir file1 file2
$ touch paper1.txt paper2.txt
$ ls
#file1 file2 paper1.txt paper2.txt
$ cp paper1 file1
$ cd file1
#~users/Jessica/temp/file1
$ ls
#paper1.txt
$ cp paper1.txt paper2.txt file2
$ cd ..
#~users/Jessica/temp/
$ cd file2
#~users/Jessica/temp/file2
$ ls
#paper1.txt paper2.txt
$ cd ..
#~users/Jessica/temp/
$ cp -r file1 file2
$ cd file2
#~users/Jessica/temp/file2
$ ls
#file1 paper1.txt paper2.txt
#cp-r allows you to copy a directory (folder) while cp just allows you to copy a or multiple files.
$ cp paper1.txt paper10.txt
#you can also copy a new text without having to create a new text, as long as there is another file
$ ls
#file1 paper1.txt paper2.txt paper10.txt

#mv
$ cd temp
$ mv awesome.txt uncool.txt
$ ls
#newplace uncool.txt
$ mv newplace oldplace
$ ls
#oldplace newplace
$ mv oldplace newplace
$ ls
#newplace uncool.txt
