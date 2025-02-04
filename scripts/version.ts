import packageJson from '../package.json';
import { writeFile } from 'fs/promises';

const getVersion = async () => {
  await writeFile('./version.txt', packageJson.version, 'utf-8');
}
await getVersion();