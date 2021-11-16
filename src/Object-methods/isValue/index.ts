export {}
declare global{
    interface Object{
        /**
         * MD
         *
         */
        isValue(value:any):boolean;
    }
}
Object.prototype.isValue=function(value:any):boolean{
    
}