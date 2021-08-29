
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || !matrix.length || !matrix[0].length) return [];

  const result = matrix[0].slice();

  for (let i = 1; i < matrix.length; ++i) {
    if (i % 2) {
      for (let j = matrix[i].length - 1; j >= 0; --j) {
        result.push(matrix[i][j]);
      }

    } else {
      for (let j = 0; j < matrix[i].length; ++j) {
        result.push(matrix[i][j]);
      }
    }
  }

  return result;
}
