class ServerError extends Error{
    constructor(message: string | undefined,status: number){
        super(message)
        this.name = this.constructor.name;
    }
}



export default ServerError