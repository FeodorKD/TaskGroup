export const createUrls = (...args: string[]): string => {
    let resultPath = ''
    args.forEach((arg) => {
        resultPath += arg
    })
    return resultPath
}