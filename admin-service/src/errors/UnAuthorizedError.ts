export default class UnauthorizedError extends Error{
    constructor(message:string,status:401){
        super(message)
        this.name=this.constructor.name;
    }
}