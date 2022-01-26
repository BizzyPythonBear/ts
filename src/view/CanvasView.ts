// Types
// -----
import { Brick } from "~/objects/Brick";
import { Ball } from "~/objects/Ball";
import { Paddle } from "~/objects/Paddle";

export class CanvasView {
  public canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D | null;
  private scoreDisplay: HTMLObjectElement | null;
  private start: HTMLObjectElement | null;
  private info: HTMLObjectElement | null;

  constructor(canvasName: string) {
    this.canvas = document.querySelector(canvasName) as HTMLCanvasElement;
    this.context = this.canvas.getContext('2d');
    this.scoreDisplay = document.querySelector('#score');
    this.start = document.querySelector('#start');
    this.info = document.querySelector('#info');
  }

  clear(): void {
    this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  init_start(start_func: (view: CanvasView) => void): void {
    this.start?.addEventListener('click', () => start_func(this))
  }

  draw_score(score: number): void {
    if (this.scoreDisplay) this.scoreDisplay.innerHTML = score.toString();
  }

  draw_info(text: string): void {
    if (this.info) this.info.innerHTML = text;
  }

  draw_sprite(sprite_to_draw: Brick | Paddle | Ball): void {
    if (!sprite_to_draw) return;
    this.context?.drawImage(
      sprite_to_draw.image,
      sprite_to_draw.pos.x,
      sprite_to_draw.pos.y,
      sprite_to_draw.width,
      sprite_to_draw.height
    );
  }

  drawBricks(brick: Brick[]): void {
    brick.forEach(brick => this.draw_sprite(brick));
  }
}