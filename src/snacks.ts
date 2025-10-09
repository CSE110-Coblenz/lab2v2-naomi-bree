import { animation } from "./animation";

let snacks: string[] = ['watermelon', 'tortilla chips', 'salsa']

export function print_snacks(): void {
    animation("snacks");
    console.log('Snacks: ');
    for (let snack of snacks) {
        console.log(snack);
    }
}