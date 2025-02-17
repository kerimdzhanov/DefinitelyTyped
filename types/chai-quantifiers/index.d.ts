// Type definitions for chai-quantifiers 1.0
// Project: https://github.com/frankthelen/chai-quantifiers#readme
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="chai" />

declare global {
    namespace Chai {
        interface Assertion {
            // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
            containAll<T = unknown>(cb: (item: T) => boolean): void;
            // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
            containOne<T = unknown>(cb: (item: T) => boolean): void;
            // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
            containExactlyOne<T = unknown>(cb: (item: T) => boolean): void;
        }
    }
}

declare const ChaiQuantifiers: Chai.ChaiPlugin;

export = ChaiQuantifiers;
