import {
  decryptCaesarCipher, encryptCaesarCipher, englishAlphabet, mapAlphabet,
} from '../caesarCipher';

describe('testing caesar cipher', () => {
  test('testing mapping alphabet', () => {
    const mappedAlphabet = {
      a: 'd',
      b: 'e',
      c: 'f',
      d: 'g',
      e: 'h',
      f: 'i',
      g: 'j',
      h: 'k',
      i: 'l',
      j: 'm',
      k: 'n',
      l: 'o',
      m: 'p',
      n: 'q',
      o: 'r',
      p: 's',
      q: 't',
      r: 'u',
      s: 'v',
      t: 'w',
      u: 'x',
      v: 'y',
      w: 'z',
      x: 'a',
      y: 'b',
      z: 'c',
    };

    const result = mapAlphabet(englishAlphabet, 3);

    expect(mappedAlphabet).toEqual(expect.objectContaining(result));
  });

  test('testing encrypt method', () => {
    const target = 'wellencryptme';
    const encryptedMessage = encryptCaesarCipher(target, -1, englishAlphabet);

    expect(encryptedMessage).toEqual('vdkkdmbqxosld');
  });

  test('testing decrypt method', () => {
    const target = 'vdkkdmbqxosld';
    const decryptedMessage = decryptCaesarCipher(target, -1, englishAlphabet);

    expect(decryptedMessage).toEqual('wellencryptme');
  });
});

/**
 * Time complexity:
 * O(n)
 */
