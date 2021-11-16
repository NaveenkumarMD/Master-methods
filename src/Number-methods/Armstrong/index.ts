import '../Length'
export {}
declare global{
    interface Number{
        /**
         * MD
         * 
         * A number method returns  whether a number is Armstrong number or not.
         *
         *  Example:
         * 
         * ```typescript
         * var x=1634;
         * x.isArmstrong()//returns true;
         * ```
         */
        isArmstrong():boolean;
    }
}
Number.prototype.isArmstrong=function():boolean{    
    var x:number=0;
    for(let i:any=0;i<this.length();i++){
        x+=Math.pow(Number(this.toString()[i]),this.length());
    }
    return x==this ? true :false;
}