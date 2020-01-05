declare module 'smart-timeout' {
  declare class Timeout {
    static clear: (id: string) => void;

    static exists: (id: string) => boolean;

    static resume: (id: string) => void;

    static pause: (id: string) => void;

    static set: (id: string, callback: () => void, delay?: number) => void;
  }

  export default Timeout;
}
