import { interval, timer, Subject } from 'rxjs';
import { take, tap } from 'rxjs';

const source = interval(1000).pipe(
  take(2),
  tap((x) => console.log('Emits: ', x)),
);

source.subscribe((v) => console.log('subscription1: ', v)),
source.subscribe((v) => console.log('subscription2: ', v));

