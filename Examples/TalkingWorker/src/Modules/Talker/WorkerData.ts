// Examples/TalkingWorker/src/Modules/Talker/WorkerData.ts
export interface TalkerData {
  /**
   * Message to return on the first recieved message
   */
  initialResponse: string;

  /**
   * Message to annoyingly respond with on all recieved messages after the first
   */
  furtherResponse: string;
}
