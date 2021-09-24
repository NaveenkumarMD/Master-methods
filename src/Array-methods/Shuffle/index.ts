export{}
declare global{
    interface Array<T>{
        /**
         * An array method that returns a shuffled array.
         *
         *  Example
         * ```typescript
         * const arr=[1,2,3];
         * arr.shuffle();//returns [3,2,1] or anything;
         * ```
         */
        shuffle():T[];
    }
}
Array.prototype.shuffle=function(){
    for (let index:number = 0; index < this.length; index++) {
        let a:number=Math.floor(Math.random() *this.length)
        let temp:any = this[index];
        this[index]=this[a]
        this[a]=temp
    }
    return this;
}
