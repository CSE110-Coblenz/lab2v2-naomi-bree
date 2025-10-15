import { animation } from "./animation";

export let snacks: string[] = ['watermelon', 'chips']

export function print_snacks(): void {
    animation("snacks");
    console.log('Snacks: ');
    for (let snack of snacks) {
        console.log(snack);
    }
}