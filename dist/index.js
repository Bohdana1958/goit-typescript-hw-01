import { concatenation } from "./concatenation";
const button = document.querySelector('button');
const input = document.querySelector('input');
if (button && input) {
    button.addEventListener('click', () => {
        concatenation(input.value, 'hello!');
    });
}
// let total: number = 100;
// let name: string = 'Bob';
// let isActive: boolean = false;
// let empty: null = null;
// let undf: undefined = undefined;
// let age = 10;
// age = 12;
// const numbers: number[] = [1, 2, 3, 4, 5, 6, 0];
// numbers.push('12')
// const user: { name: string, age: number} = {
//     name: 'Bob',
//     age: 12
// };
// type User = { name: string, age: number | string }
// const user: User = {
//     name: 'Bob',
//     age: 12,
// }
// user.age = '15';
// user.name = 'Dana'
// // type eventType = 'lesson' | 'deadline';
// // const event: eventType = 'homework';
// type size = 'small' | 'medium' | ' large';
//# sourceMappingURL=index.js.map