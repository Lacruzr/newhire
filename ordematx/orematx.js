let matrix = [  [1,4,6],
                [9,0,3],
                [7,5,2]];

let int = 0, i = 0, j = 0, k = 0, l = 0;
console.log("-------Original -------");
for (i = 0; i < 3; i++) 
{
    console.log(matrix[i]);
}

for (i = 0; i < 3; i++) 
{
    for (j = 0; j < 3; j++) 
    {
       for (k = 0; k < 3; k++) 
       {
            for (l = 0; l < 3; l++) 
            {
        
                if (matrix[i][j] > matrix[k][l])
                    {
                    int = matrix[i][j];
                    matrix[i][j] = matrix[k][l];
                    matrix[k][l] = int;
                    }
            }
        }
    }
}
console.log("-------Ordenada -------");
for (i = 0; i < 3; i++) 
{

        console.log(matrix[i]);
 
}