import { initializeApp } from 'firebase';
import { config } from '../../firebase';

const app = initializeApp(config);
export const db = app.database();
