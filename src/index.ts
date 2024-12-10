import {PageActiveObservable} from './page-active.observable.js';

const pageActiveObservable = new PageActiveObservable();

/**
 * Listen to changes in page activation.
 *
 * @returns A callback used to remove the listener.
 */
export function listenToPageActivation(
    /** If true, the callback will immediately be fired with whatever the current value is. */
    fireImmediately: boolean,
    /** This listener will be called any time the page activation changes. */
    listener: (isPageActive: boolean) => void | Promise<void>,
) {
    return pageActiveObservable.listen(fireImmediately, listener);
}

/** Check if the current page is currently active. */
export function isPageActive(): boolean {
    return pageActiveObservable.value;
}
