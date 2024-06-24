export function cleanAndSortViewSeconds(viewSeconds: number[][]) : number[] {
    const allNumbers = viewSeconds.flat();
    const uniqueNumbers = Array.from(new Set(allNumbers));
    return uniqueNumbers.sort((a, b) => a - b);
  }