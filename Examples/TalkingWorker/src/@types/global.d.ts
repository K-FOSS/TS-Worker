// Examples/TalkingWorker/src/@types/global.d.ts
interface ImportMeta {
  url: string;

  resolve(specifier: string, parentUrl?: string): Promise<string>;
}
