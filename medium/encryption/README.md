# encryption

An English text needs to be encrypted using the following encryption scheme. 
First, the spaces are removed from the text. Let L be the length of this text. 
Then, characters are written into a grid, whose rows and columns have the following constraints:

[square root of L] <= row <= column <= [square root of L], where [x] is floor function and [x] is cei function

For example, the sentence

a = if man was meant to sstay on the ground god would have given us roots , after removing spaces is  54characters long. Square root of 54 is between 7 and 8, so it is written in the form of a grid with 7 rows and 8 columns.

ifmanwas  
meanttos          
tayonthe  
groundgo  
dwouldha  
vegivenu  
sroots

Ensure that rows x columns >= L
If multiple grids satisfy the above conditions, choose the one with the minimum area, i.e. rows x column.

The encoded message is obtained by displaying the characters in a column, inserting a space, and then displaying the next column and inserting a space, and so on. For example, the encoded message for the above rectangle is:

imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau

You will be given a message to encode and print.

Function Description

Complete the encryption function in the editor below. It should return a single string composed as described.

encryption has the following parameter(s):

s: a string to encrypt
Input Format

One line of text, the string 

Constraints

1 <= |s| <= 81
 
 is comprised only of characters in the range ascii[a-z].

Output Format

Print the encoded message on one line as described.

Sample Input

haveaniceday
Sample Output 0

hae and via ecy