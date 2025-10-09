let decorationList: string[] = ['streamers', 'balloons', 'confetti', 
    'tablecloths', 'flowers', 'flower vases'];

export function printDecorations() {
    console.log("Decorations:");
    for (let decoration of decorationList) {
        console.log(decoration);
    }
}