interface Options {
    analytics: boolean;
    onAuthIdTokenChange: (idToken: string | undefined) => void;
}
export declare function WithFirebase({ analytics, onAuthIdTokenChange, }?: Partial<Options>): null;
export {};
