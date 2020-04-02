import { enableAkitaProdMode } from '@datorama/akita';

if (process.env.ENV === "production") {
  enableAkitaProdMode();
}
