// src/Utils/Worker.ts
import { Worker } from 'worker_threads';
import { resolvePath } from './Utils/resolvePath';
import { pathToFileURL } from 'url';

type SubWorkerData = { [key: string]: any };

export function spawnWorker<M extends SubWorkerData>(
  path: string,
  workerData: M,
): Worker {
  const transpileURL = pathToFileURL(path);

  for (const dataKey of Object.keys(workerData)) {
    transpileURL.searchParams.set(dataKey, workerData[dataKey]);
  }

  // Spawn the worker with the entryfile because Node.JS doesn't handle non `.js` files for the worker filename.
  const transpileWorker = new Worker(
    resolvePath('./Utils/workerEntry.js', import.meta.url),
    {
      workerData: {
        workerPath: transpileURL.href,
      },
    },
  );

  return transpileWorker;
}

export function getWorkerData<T extends SubWorkerData>(
  importUrlString: string,
): T {
  const importUrl = new URL(importUrlString);

  // eslint-disable-next-line prefer-const
  let workerData: T = {} as T;
  for (const [searchKey, searchData] of importUrl.searchParams.entries()) {
    // @ts-expect-error
    workerData[searchKey] = searchData;
  }

  return workerData as T;
}
