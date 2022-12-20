
import { Observable } from 'rxjs';

const randomValue = () => Math.round(Math.random() * 10);

const coldByDefault = new Observable((observer) => {
  observer.next(randomValue());
  observer.complete();
});

//Each subscription is likely to get different output
coldByDefault.subscribe(v => console.log(v))
coldByDefault.subscribe(v => console.log(v))
coldByDefault.subscribe(v => console.log(v))

