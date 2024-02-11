// Tell Typescript to allow .css imports
declare module '*.css' {
    const content: string;
    export default content;
}