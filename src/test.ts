import {listenToPageActivation} from './index';

listenToPageActivation(true, (isActive) => console.info('is active:', isActive));
