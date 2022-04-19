class NotificationManager {
    static info(message?: string, title?: string | null, timeOut?: number | null, callback?: () => void | null): void;
    static error(message?: string, title?: string | null, timeOut?: number | null, callback?: () => void | null): void;
  }
  
declare module 'react-notifications' {
    export { NotificationManager }
}