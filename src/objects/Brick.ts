import { Vector2 } from '../types';

export class Brick {
  constructor(
    private brickWidth: number,
    private brickHeight: number,
    private position: Vector2,
    private brickEnergy: number,
    private brickImage: HTMLImageElement,
    image: string
  ) {
    this.brickWidth = brickWidth;
    this.brickHeight = brickHeight;
    this.position = position;
    this.brickEnergy = brickEnergy;
    this.brickImage.src = image;
  }
}