let matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
  ];
  
  console.log(matrix[0]);      // Output: [1, 2]
  console.log(matrix[0][1]);   // Output: 2
  
  // Iterating over a multidimensional array
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j]);
    }
  }
  