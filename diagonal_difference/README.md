# diagonal difference

Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix arr is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = 1+5+9 = 15. The right to left diagonal = 3+5+9 = 17 . Their absolute difference is |15-17| = 2.

Function description

Complete the diagonalDifference function in the editor below. It must return an integer representing the absolute diagonal difference.

diagonalDifference takes the following parameter:

arr: an array of integers .
Input Format

The first line contains a single integer, n, the number of rows and columns in the matrix arr. 
Each of the next n lines describes a row, arr[i], and consists of n space-separated integers arr[i][j].

