import { initializeApp } from 'firebase';
import { config } from '../../firebase.config';

const app = initializeApp(config);
export const db = app.database();
