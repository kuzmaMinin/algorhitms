export const englishAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

export function mapAlphabet(alphabet: string[], shift: number): { [key: string]: string } {
  return alphabet.reduce((prev, current, index) => {
    let mappedIndex = (index + shift) % alphabet.length;

    if (mappedIndex < 0) {
      mappedIndex += alphabet.length;
    }

    return { ...prev, [current]: alphabet[mappedIndex] };
  }, {});
}

export function encryptCaesarCipher(target: string, shift: number, alphabet = englishAlphabet) {
  const mappedAlphabet = mapAlphabet(alphabet, shift);

  return target
    .toLowerCase()
    .split('')
    .map((char) => mappedAlphabet[char])
    .join('');
}

export function decryptCaesarCipher(target: string, shift: number, alphabet = englishAlphabet) {
  const mappedAlphabet = mapAlphabet(alphabet, -shift);

  return target
    .toLowerCase()
    .split('')
    .map((char) => mappedAlphabet[char])
    .join('');
}
