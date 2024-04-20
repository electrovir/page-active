# page-active

Check and listen to all page activity changes. Combines several different methods for detecting activity changes into one to ensure maximum coverage.

The following are covered:

-   when the user changes tabs
-   when the user user changes applications (alt+tab)
-   when the user user minimizes browser
-   when the user opens dev tools
-   desktop browsers
-   mobile browsers
-   and more...

**Warning:** this package sets the following callbacks on the global `window` object. Do not overwrite them or this package may stop functioning correctly:

-   `onpageshow`
-   `onpagehide`
-   `onfocus`
-   `onblur`

## Installation

```sh
npm i page-active
```

## Usage

Use `listenToPageActivation` to setup a page activation listener. You can setup multiple listeners without any issues.

<!-- example-link: src/readme-examples/listen.example.ts -->

```TypeScript
import {listenToPageActivation} from 'page-active';

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
```

At any time you can also call `isPageActive` to get the current page activation:

<!-- example-link: src/readme-examples/get-current-value.example.ts -->

```TypeScript
import {isPageActive} from 'page-active';

console.info(isPageActive());
```
