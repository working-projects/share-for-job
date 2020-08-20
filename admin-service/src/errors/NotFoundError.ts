export default class NotFound extends Error{
    constructor(message:string,status:number){
        super(message)
        this.name=this.constructor.name;
    }
}