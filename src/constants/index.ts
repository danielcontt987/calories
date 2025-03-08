import { v4 as uuidv4 } from 'uuid';
import { Activity } from '../types';

export const INITIAL_STATE : Activity= {
    id: uuidv4(),
    category: 0,
    name: '',
    calories: 0,
}