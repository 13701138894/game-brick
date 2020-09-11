import { defineComponent,h } from "@vue/runtime-core";
import MyBoardImg from '../../assets/myBoard.png'

export default defineComponent({
    props: ['x','y'],
    setup(){

    },
    render(ctx){
        return h("Container",{x:ctx.x||0,y:ctx.y||0},[
            h('Sprite',{
                texture:MyBoardImg
            })
        ])
    }
})