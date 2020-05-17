// Examples/TalkingWorker/src/Modules/Talker/Worker.ts
import { parentPort } from 'worker_threads';
import { getWorkerData } from '@k-foss/ts-worker';
import { TalkerData } from './WorkerData';

export const workerName = 'Talker';

if (!!!parentPort) throw new Error('Parent port not open to worker');

const { initialResponse, furtherResponse } = getWorkerData<TalkerData>(
  import.meta.url,
);

let response = initialResponse;

parentPort.on('message', (msg) => {
  parentPort!.postMessage(response);

  if (response === initialResponse) response = furtherResponse;
});
