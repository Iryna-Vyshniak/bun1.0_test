export function assertDefined(value: any, message: string) {
    if (value === undefined) throw new Error(message);
}