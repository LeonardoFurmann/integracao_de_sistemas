import { Injectable } from "@nestjs/common";
import { Service } from "./designpatterns/singleton/Service";

@Injectable()
export class AppDesignPatternService {
    public constructor () {}
   
    public singleton(): object{
        const service1 = Service.getInstance();

        service1.setState({message : "I was set in service1"})
    
        const service2 = Service.getInstance();

        return service2.getState();
    }
}
