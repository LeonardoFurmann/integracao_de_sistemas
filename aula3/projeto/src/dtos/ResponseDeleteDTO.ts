import { BookDTO } from "./BookDTO";

export class ResponseDeleteDTO{
    public message: string;

    public constructor(){
        this.message = "This delete of this booking was sucessuful"
    }
}