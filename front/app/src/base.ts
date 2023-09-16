export function assertDefined(value: any, message: string) {
    if (value === null) throw new Error(message);
}