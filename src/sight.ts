interface Target {
    [ins: string]: undefined | {cvalue: undefined | number | string | Target}
}

function summ(a: Target) {

    const x = Object.keys(a).map((k) => {
        const elem = a[k];
        if (typeof elem === 'undefined') {
            return 2022
        }
        if (typeof elem.cvalue === 'string') {
            return Number(elem.cvalue) || 2022
        };
        if (typeof elem.cvalue === 'object' && elem.cvalue !== null) {
            return summ(elem.cvalue as Target)
        }
        if (typeof elem.cvalue === 'number') {
            return elem.cvalue
        }


        return 2022
    });

    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum = sum + x[i];
    }
    return sum;
}

console.log(summ({ hello: {cvalue: 1}, world: { cvalue: { yay: { cvalue: "2" } } } } ))