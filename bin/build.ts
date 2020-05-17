// bin/build.ts
import { promises as fs } from 'fs';
import { buildPath } from './Utils/buildPath';

async function build(): Promise<void> {
  console.log('Starting build of TS-Worker');

  console.info(`Removing 'out/dist' directory`);
  await fs.rmdir('dist', { recursive: true });

  console.info('Building TS-Worker');

  await Promise.all([buildPath('.')]);

  console.debug('Finished Building');
}

build();
