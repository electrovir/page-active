import {listenToPageActivation} from './index.js';

listenToPageActivation(true, (isActive) => console.info('is active:', isActive));
