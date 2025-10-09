let snacks: string[] = ['watermelon', 'tortilla chips', 'salsa']

export function print_snacks(): void {
    console.log('Snacks: ');
    for (let snack of snacks) {
        console.log(snack);
    }
}