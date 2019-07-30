# forming a Magic Square

We define a magic square to be an n x n matrix of distinct positive integers from 1 to n raised to power 2 where the sum of any row, column, or diagonal of length n is always equal to the same number: the magic constant.

You will be given a 3 x 3 matrix s  of integers in the inclusive range [1,9]. We can convert any digit a to any other digit b in the range [1,9] at cost of [a - b]. Given s, convert it into a magic square at minimal cost. Print this cost on a new line.

Note: The resulting magic square must contain distinct integers in the inclusive range [1,9].

For example, we start with the following matrix :

5 3 4
1 5 8
6 4 2
We can convert it to the following magic square:

8 3 4
1 5 9
6 7 2
This took three replacements at a cost of |5 - 8|+|8 - 9|+|4 - 7|=7.

Function Description

Complete the formingMagicSquare function in the editor below. It should return an integer that represents the minimal total cost of converting the input square to a magic square.

formingMagicSquare has the following parameter(s):

s: a 3 x 3 array of integers
Input Format

Each of the lines contains three space-separated integers of row .

Constraints
s[i][j]E [1,9]

Output Format

Print an integer denoting the minimum cost of turning matrix  into a magic square.