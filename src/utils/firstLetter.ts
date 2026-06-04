/** First alphabetic character of a string, uppercased; `"?"` when none exists. */
export function firstLetter(value: string): string {
  return (value.match(/[A-Za-z]/)?.[0] ?? "?").toUpperCase();
}
