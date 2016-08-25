import {Server} from "./Server.model";

export class User {
  constructor(
    public Id: number,
    public Name: string,
    public Username: string,
    public Password: string,
    public Role: string,
    public IsActive: boolean,
    public uProduceDetail: Server,
    public LastLogin?: Date
    //public uProduceServer?:string,
    //public uProduceUsername?:string,
    //public uProducePassword?:string,
    //public NwPath?:string,
    //public NwUsername?:string,
    //public NwPassword?:string
  ) { }
}