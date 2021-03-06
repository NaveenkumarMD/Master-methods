export { }
declare global {
    interface String {

        /**
         * MD
         * A method that returns the reverse of a given string.
         * Example
         * ```typescript
         * const mystr="naveen";
         * mystr.sreverse();//return "neevan";
         * 
         * ```
         */
        sreverse():string;
    }
}
String.prototype.sreverse = function (): string {
    return this.split('').reverse().join('');
}