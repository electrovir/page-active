import {check} from '@augment-vir/assert';
import {Observable} from 'observavir';

const globalDocument = globalThis.document as typeof globalThis.document | undefined;

/**
 * The observable that keeps track of page activation. This is not exported by the package as we
 * can't have multiple instances of it.
 */
export class PageActiveObservable extends Observable<boolean> {
    constructor() {
        super({
            defaultValue: !!globalDocument?.hidden,
            equalityCheck: check.strictEquals,
        });
        if (!globalDocument) {
            return;
        }

        globalThis.addEventListener('visibilitychange', (event) =>
            this.updateVisibility(event, globalDocument),
        );
        const visibilityHandler = (event: Event) => this.updateVisibility(event, globalDocument);

        globalThis.onpageshow = visibilityHandler;
        globalThis.onpagehide = visibilityHandler;
        globalThis.onfocus = visibilityHandler;
        globalThis.onblur = visibilityHandler;
    }

    protected updateVisibility(event: Event, document: Document) {
        const isChangeToActive = activeEvents.includes(event.type);
        const isChangeToInactive = inactiveEvents.includes(event.type);

        const isActiveNow = isChangeToActive
            ? true
            : isChangeToInactive
              ? false
              : document.hasFocus() || !document.hidden;

        this.setValue(isActiveNow);
    }
}

const inactiveEvents = [
    'blur',
    'focusout',
    'pagehide',
];
const activeEvents = [
    'focus',
    'focusin',
    'pageshow',
];
