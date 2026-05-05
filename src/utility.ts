// Напишіть функцію, яка приймає:
// 1) Деякі дані умовного типу Т, але не з усіма полями
// 2) функцію-доповнювач, яка приймає такі штуки як із п.1,
//     а повертає повноцінний об'єкт типу Т
// ... як ви зрозуміли, саму функцію писати не треба:)
// нас цікавить лише її сигнатура.

function someFunc<T>(obj: Partial<T>, func: (obj: Partial<T>) => T) {}

interface hasId {
    id:string
}

// Більш складний варіант:
// Напишіть функцію, яка приймає:
// 1) Деякі дані умовного типу Т (у якого поле id: string),
//    але можливо без поля id
// 2) функцію-доповнювач, яка приймає такі штуки як із п.1,
//     а повертає повноцінний об'єкт типу Т
// ... як ви зрозуміли, саму функцію писати не треба:)
// нас цікавить лише її сигнатура.
function someFunc2<T extends hasId> (obj: Partial<T>, func: (obj: Partial<T>) => T) {}

// Останнє завдання:
// Напишіть сигнатуру функції, що приймає
// - якийсь клас
// - кількість
// ...а повертає масив екземплярів цього класу

class Rectangle {
    w!: number;
    h!: number;
}

class Circle {
    radius!: number;
}

// Зробіть норм сигнатуру тут.
// НІ, Rectangle | Circle це не варіант, треба зробити універсальну функцію
function replicate<T>(SOMECLASS: new (...args: any[]) => T, count: number): T[]  {
    let a: T[] = []
    for (let i = 0; i < count; i++)
        a.push(new SOMECLASS());

    return a;
}

let a: Rectangle[] = replicate(Rectangle, 10);
let b: Circle[] = replicate(Circle, 20)

console.log(a)


