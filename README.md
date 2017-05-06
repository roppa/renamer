# Renamer

Problem:

 1. There is a bunch of badly named files
 2. We have a JSON array, with a title for each file, in order of the files in #1
 3. The title needs to be formatted as such to make it suitable for use over http
 4. The files need to be renamed, using the formatted title from #3

## rename(path, array)

Takes a directory path and an array of new file names and renames those files to those specified in the array.

If number of files in directory do not match the length of array, an error is thrown.

## formatTitle(string)

Takes a string and converts it to lowercase, replaces any non-alphanumeric to a hyphen.

Example:

'The Declaration of Independence 1817–1819' becomes 'the-declaration-of-independence-1817-1819'.
