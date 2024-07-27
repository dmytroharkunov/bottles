
export interface IBottle {
  id: string;
  layers: ILayer[];
}

export interface ILayer {
  id: string;
  colorCode: string;
}

// @ts-ignore
export function randomEnum(anEnum: any): any {
  const enumValues = Object.keys(anEnum)
    .map(n => Number.parseInt(n))
    .filter(n => !Number.isNaN(n));
  const randomIndex = Math.floor(Math.random() * enumValues.length);
  const randomEnumValue = enumValues[randomIndex];
  return randomEnumValue;
}

export function randomNumber(max = 1, min = 0): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function getRandomColors(quantity: number): string[] {
  return new Array(quantity)
    .fill('')
    .map(() => '#' + Math.floor(Math.random()*16777215).toString(16))
}

export function mockBottles(bottlesQuantity = 8, layersQuantity = 4, emptyBottles = 2): IBottle[] {
  const bottles: IBottle[] = [];
  const selectedColors = getRandomColors(bottlesQuantity - emptyBottles);
  const colorsBalance: Record<string, number> = {};

  for (let i = 0; i < selectedColors.length; i++) {
    colorsBalance[selectedColors[i]] = layersQuantity;
  }

  for (let i = 0; i < selectedColors.length; i++) {
    const layers: ILayer[] = [];

    for (let i = 0; i < layersQuantity; i++) {
      const colorCode = selectedColors[randomNumber(selectedColors.length)];
      const quantity = colorsBalance[colorCode];

      if (quantity > 0) {
        colorsBalance[colorCode]--;
        layers.push({ colorCode, id: `${ Math.random() }` });
      } else {
        i--;
      }
    }

    bottles.push({ layers, id: `${ Math.random() }` });
  }

  for (let i = 0; i < emptyBottles; i++) {
    bottles.push({
      id: `${ Math.random() }`,
      layers: []
    });
  }

  return bottles;
  // return new Array<IBottle>(bottlesQuantity)
  //   .fill({ layers: [], id: '' })
  //   .map((i: IBottle) => ({
  //     id: `${ Math.random() }`,
  //     layers: mockLayers(layersQuantity)
  //   }));
}
