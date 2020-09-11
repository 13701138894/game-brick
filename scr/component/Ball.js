import { defineComponent, h } from "@vue/runtime-core";
import BallImg from "../../assets/ball.png";

export default defineComponent({
    render(){
        return h('Container',{},[
            h('Sprite',{
                texture: BallImg
            })
        ])
    }
})