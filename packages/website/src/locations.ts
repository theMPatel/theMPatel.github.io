
export const enum Locations {
  HOME = "/home",
  ABOUT = "/about",
  THOUGHTS = "/thoughts"
}


export function toHashPath(input: string): string {
  return "#" + input;
}