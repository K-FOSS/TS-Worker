// Examples/TalkingWorker/src/index.ts
import { spawnWorker } from '@k-foss/ts-worker';
import { fileURLToPath } from 'url';
import { TalkerData } from './Modules/Talker/WorkerData';

const workerModulePath = await import.meta.resolve(
  './Modules/Talker/Worker.ts',
  import.meta.url,
);

const talkingWorker = await spawnWorker<TalkerData>(
  fileURLToPath(workerModulePath),
  {
    initialResponse: 'Hello World, I can talk',
    furtherResponse: 'Hello, what can I help you with?',
  },
);

talkingWorker.on('message', (message) => {
  console.log(`Recived message from worker: `, message);
});

talkingWorker.on('online', () => {
  setInterval(() => talkingWorker.postMessage('HelloWorld'), 1000);
});
