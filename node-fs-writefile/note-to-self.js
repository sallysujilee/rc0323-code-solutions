import { writeFile } from 'node:fs/promises';

const [, , note] = process.argv;

try {
  await writeFile('note.txt', note + '/n');
} catch (error) {
  console.error(error);
  process.exit(1);
}
