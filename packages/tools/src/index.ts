
export type Class = string | { [name: string]: boolean}
export function classNames(...input: Class[]): string {
  const toRet: string[] = [];

  for(const className of input) {
    if (typeof className === 'string' && !!className) {
      toRet.push(className)
    } else if (className) {
      for (const key of Object.keys(className)) {
        className[key] && toRet.push(key);
      }
    }
  }

  return toRet.join(' ');
}