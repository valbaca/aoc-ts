/**
 * TIL: setting up the file-watcher is really nice.
 * TIL: While it's tempting to reach for ramda/lodash, don't need to always.
 */
import * as fs from 'fs'

export function d01() {
    let f: string = fs.readFileSync("./in/d01.txt", 'utf-8');
    f += f[f.length - 1];
    let sum = 0;
    for (let i = 0; i < f.length; i++) {
        if (f[i] == f[i + 1]) sum += (+f[i]);
    }
    console.log(sum);
}

export function d01p2() {
    let f: string = fs.readFileSync("./in/d01.txt", 'utf-8');
    let mid = f.length / 2;
    let sum = 0;
    for (let i = 0; i < f.length; i++) {
        let next = (i + mid) % f.length;
        if (f[i] == f[next]) sum += (+f[i]);
    }
    console.log(sum);
}