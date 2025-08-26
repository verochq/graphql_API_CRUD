// // src/subscriptions/pubsub.service.ts

// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class PubSubService {
//   private subscribers: Map<string, (( unknown) => void)[]> = new Map();

//   publish(event: string,  unknown) {
//     const listeners = this.subscribers.get(event) || [];
//     listeners.forEach(listener => listener(data));
//   }

//   subscribe(event: string, callback: ( unknown) => void) {
//     const listeners = this.subscribers.get(event) || [];
//     listeners.push(callback);
//     this.subscribers.set(event, listeners);

//     return () => {
//       const updated = listeners.filter(fn => fn !== callback);
//       this.subscribers.set(event, updated);
//     };
//   }

//   asyncIterator<T>(event: string): AsyncIterator<T> {
//     const queue: T[] = [];
//     const listeners: Array<(result: IteratorResult<T, any>) => void> = [];

//     const unsubscribe = this.subscribe(event, (T) => {
//       if (listeners.length > 0) {
//         const resolve = listeners.shift()!;
//         resolve({ value: data, done: false });
//       } else {
//         queue.push(data);
//       }
//     });

//     return {
//       next(): Promise<IteratorResult<T, any>> {
//         if (queue.length > 0) {
//           const value = queue.shift()!;
//           return Promise.resolve({ value, done: false });
//         }

//         return new Promise((resolve) => {
//           listeners.push(resolve);
//         });
//       },

//       return(): Promise<IteratorResult<T, any>> {
//         unsubscribe();
//         return Promise.resolve({ value: undefined, done: true });
//       },

//       throw(error?: any): Promise<IteratorResult<T, any>> {
//         unsubscribe();
//         return Promise.reject(
//           error instanceof Error ? error : new Error(String(error)),
//         );
//       },
//     };
//   }
// }
