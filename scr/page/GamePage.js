import {
    defineComponent,
    h,
    reactive
} from "@vue/runtime-core";
import Map from "../component/Map";
import MyBoard from "../component/MyBoard";
import Ball from "../component/Ball";
import {game} from "../Game";
import ENUM from "../util/enum";

export default defineComponent({
    setup() {
        const {myBoardAdd} = myBoardMethod();
        const {ballAdd,ballMove} = ballMethod();
        mainProcess(ballMove)
        return {
            myBoardAdd,
            ballAdd
        }
    },
    render(ctx) {
        return h("Container", [
            h(Map),
            h(MyBoard, {
                x: ctx.myBoardAdd.x,
                y: ctx.myBoardAdd.y
            }),
            h(Ball,{
                x: ctx.ballAdd.x,
                y: ctx.ballAdd.y,
            })
        ])
    }
})

function myBoardMethod() {
    let myBoardAdd = reactive({
        x: 357,
        y: 550
    });
    let myBoardSpeed = ENUM.MY_MOVE_SPEED;
    window.addEventListener('keydown', e => {
        let keyCode = e.keyCode;
        switch (keyCode) {
            case 38:
                console.log('up')
                myBoardAdd.y -= myBoardSpeed;
                break;
            case 40:
                console.log('down')
                myBoardAdd.y += myBoardSpeed;
                break;
            case 37:
                console.log('left')
                myBoardAdd.x -= myBoardSpeed;
                break;
            case 39:
                console.log('right')
                myBoardAdd.x += myBoardSpeed;
                break;
            default:
                break;
        }
    })
    return {
        myBoardAdd
    }
}
function ballMethod() {
    const ballMoveSpeed = ENUM.BALL_MOVE_SPEED;
    let direction = 'up'
    const ballAdd = reactive({
        x:420,
        y:535
    })
    function ballMove() {
        // if(direction == 'up'){
        //     if(ballAdd.y>0) ballAdd.y-=ballMoveSpeed;
        //     if(ballAdd.y<=0) direction = 'down'
        // }else{
        //     if(ballAdd.y<560) ballAdd.y+=ballMoveSpeed;
        //     if(ballAdd.y>=560) direction = 'up'
        // }
    }
    return {
        ballAdd,
        ballMove
    }
}
function mainProcess() {
    game.ticker.add(()=>{
        Array.prototype.forEach.call(arguments,(cb)=>{
            cb&&cb()
        })
    })
}
