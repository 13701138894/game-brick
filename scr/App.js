import { defineComponent,h } from "@vue/runtime-core";
import GamePage from "./page/GamePage";
console.log('123')
export default defineComponent({
    render(){
        return h('Container',{},[
            h(GamePage)
        ])
    }
})