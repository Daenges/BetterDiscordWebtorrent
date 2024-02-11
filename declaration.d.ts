// Tell Typescript to allow .css imports
declare module '*.css' {
    const content: string;
    export default content;
}
// Tell Typescript to accept the already integrated React
declare const React: typeof BdApi.React;
