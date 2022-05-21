import crypto from 'crypto';

export function percDisplay(num: number): string {
  return (num * 100).toFixed(2) + '%';
}

export const randomString = (length: number): string =>
  crypto.randomBytes(length).toString('hex');

export const encode64 = (str: string): string => {
  const buff = Buffer.from(str, 'utf-8');
  return buff.toString('base64');
};

export const camelCase = (str: string): string =>
  str[0].toUpperCase() + str.slice(1);
