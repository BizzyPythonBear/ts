import { CanvasView } from "./view/CanvasView";
import { Ball } from "./objects/Ball";
import { Brick } from "./objects/Brick";
import { Paddle } from "./objects/Paddle";

// Imgs
import PADDLE_IMAGE from './images/paddle.png';
import BALL_IMAGE from './images/ball.png';

// Level and Colors
import {
  PADDLE_SPEED,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  PADDLE_STARTX,
  BALL_SPEED,
  BALL_SIZE,
  BALL_STARTX,
  BALL_STARTY
} from './setup';

let game_over = false;
let score = 0;

function set_game_over(view: CanvasView): void {
  view.draw_info("Game Over!");
  game_over = false;
}

function set_game_win(view: CanvasView): void {
  view.draw_info("Game Won!");
  game_over = false;
}

function gameLoop(
  view: CanvasView,
  bricks: Brick[],
  paddle: Paddle,
  ball: Ball,
) {}

function start_game(view: CanvasView) {}

const view = new CanvasView('#playField');
view.init_start(start_game);