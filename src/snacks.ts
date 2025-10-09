import { animation } from "./animation";

let snacks: string[] = ['watermelon', 'tortilla chips', 'salsa', 'oranges', 'string cheese', 
    'brie cheese', 'crackers'];

export function print_snacks(): void {
    animation("snacks");
    console.log('Snacks: ');
    for (let snack of snacks) {
        console.log(snack);
    }
}