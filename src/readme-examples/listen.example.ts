import {listenToPageActivation} from '../index.js';

listenToPageActivation(
    /**
     * Pass in `true` here to fire your callback immediately when it is hooked up so you get an
     * initial value.
     *
     * Pass in `false` to only fire your callback on future changes.
     */
    true,
    (isActive) => console.info(isActive),
);
