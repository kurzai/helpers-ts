import seedrandom from 'seedrandom';

export enum RandomMode {
  NORMAL,
  GAUSSIAN,
}

export class Randomizer {
  mode: RandomMode = RandomMode.NORMAL;
  seed?: string;
  rng?: () => number;

  constructor(mode?: RandomMode, seed?: string) {
    if (mode) {
      this.mode = mode;
    }
    if (seed) {
      this.seed = seed;
      this.rng = seedrandom(this.seed);
    }
  }

  #baseRandom(): number {
    if (this.rng) {
      return this.rng();
    }
    return Math.random();
  }
  random(v: number = 4): number {
    if (this.mode === RandomMode.NORMAL) {
      return this.#baseRandom();
    } else {
      let r = 0;
      for (let i: number = v; i > 0; i--) {
        r += this.#baseRandom();
      }
      return r / v;
    }
  }
  randomBetween(min: number, max: number): number {
    return this.random() * (max - min) + min;
  }
  randomIntBetween(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(this.random() * (max - min) + min);
  }
  randomIntBetweenInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(this.random() * (max - min + 1) + min);
  }
}

export function shuffleArray(arr: Array<any>): void {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
