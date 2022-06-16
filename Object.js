// 检查值是否相等
function recursivelyCheckEqual (x, ...rest) {
    return Object.is(x, rest[0]) && (rest.length < 2 || recursivelyCheckEqual(...rest));
}
