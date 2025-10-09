import { animation } from "./animation";

let decorationList: string[] = ['streamers', 'balloons', 'confetti', 
    'tablecloths', 'flowers', 'flower vases'];

export function printDecorations() {
    animation("decoration");
    console.log("Decorations:");
    for (let decoration of decorationList) {
        console.log(decoration);
    }
}