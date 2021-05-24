export{}
declare global{
    interface Number{
        /**
         * MD
         * 
         * A number method returns  whether a number is Composite.
         *
         *  Example:
         * 
         * ```typescript
         * var x=3;
         * 3.isComposite()//returns false;
         * ```
         */
        isComposite():boolean;
    }
}
Number.prototype.isComposite=function():boolean{
    if(this==1 || this==2) return false;
    for(let x:any=2;x<this;x++){
        if(<any>this%x==0){
            return true;
        }
    }
    return false;
}