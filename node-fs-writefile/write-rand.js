import { writeFile } from 'node:fs/promises';

const randomNumber = Math.random();

try {
  await writeFile('random.txt', randomNumber + '\n');
  console.log('Random number saved to file!');
} catch (error) {
  console.error('Error:', error);
  process.exit(1);
}
