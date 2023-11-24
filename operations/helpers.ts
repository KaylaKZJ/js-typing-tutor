export const getNewLineTutorText = (code: string[], currentLine: number) => {
  let nextLineCode = code[currentLine + 1];
  if (nextLineCode) {
    return nextLineCode;
  } else {
    return 'Code complete!';
  }
};
export const getLineUpdates = (doneLines: number[], currentLine: number) => {
  return {
    done: [...doneLines, currentLine],
    current: currentLine + 1,
  };
};

export const getUserDiffedTutorText = (
  code: string[],
  currentLine: number,
  userInput: string
) => code[currentLine].slice(userInput.length);

export function shuffleArrayOfArrays(arrayOfArrays: any[]) {
  const newArray = arrayOfArrays.slice(); // Create a shallow copy to avoid modifying the original array

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements using destructuring assignment
  }

  return newArray;
}
