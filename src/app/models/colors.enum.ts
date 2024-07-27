export enum Colors {
  Yellow,
  Purple,
  Red,
  Pink,
  Blue,
  Orange
}

export const ColorsDictionary: Record<Colors, string> = {
  [Colors.Yellow]: 'yellow',
  [Colors.Purple]: 'purple',
  [Colors.Red]: 'red',
  [Colors.Pink]: 'pink',
  [Colors.Blue]: 'blue',
  [Colors.Orange]: 'orange',
};

export function getColorsQuantity(): Record<Colors, number> {
  return {
    [Colors.Yellow]: 4,
    [Colors.Purple]: 4,
    [Colors.Red]: 4,
    [Colors.Pink]: 4,
    [Colors.Blue]: 4,
    [Colors.Orange]: 4,
  };
}

