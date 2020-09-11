import { defineComponent,h } from "@vue/runtime-core";
import GamePage from "./page/GamePage";

export default defineComponent({
    render(){
        return h('Container',{},[
            h(GamePage)
        ])
    }
})