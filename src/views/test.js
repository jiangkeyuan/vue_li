export default function test() {
    return new Promise((res) => {
        setTimeout(() => {
            res(10)
        })
    }, 2000)
}