import { Application } from "pixi.js";

export const game = new Application({
    width:855,
    height: 580
})
document.body.append(game.view);
export function gameContainer(){
    return game.stage
}