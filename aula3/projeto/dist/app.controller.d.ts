import { AppService } from './app.service';
import { BookDTO } from './dtos/BookDTO';
import { ResponseBookDTO } from './dtos/ResponseBookDTO';
import { ResponseDeleteDTO } from './dtos/ResponseDeleteDTO';
import { Booking } from './models/Booking';
import { ResponseCreateBooking } from './dtos/ResponseCreateBooking';
import { ResponseUpdateBooking } from './dtos/ResponseUpdateBooking';
export declare class AppController {
    private booking;
    private readonly appService;
    constructor(booking: typeof Booking, appService: AppService);
    getHello(): string;
    insertObject(postData: {
        title: string;
        content?: string;
        authorEmail: string;
    }): {
        result: {
            title: string;
            content: string;
            authorEmail: string;
        };
    };
    insertObjectWithDTO(postData: BookDTO): ResponseBookDTO;
    createBooking(postData: BookDTO): Promise<ResponseCreateBooking>;
    createBookingWithService(postData: BookDTO): Promise<ResponseCreateBooking>;
    getBooking(): Promise<Booking[]>;
    getBookingById(id: number): Promise<Booking[]>;
    getBookingByQueryString(id: number): Promise<Booking[]>;
    private validation;
    validationBody(body: BookDTO): void;
    validationIdElement(id: number): void;
    putBooking(id: number, body: BookDTO): Promise<ResponseUpdateBooking>;
    deleteBooking(id: number): Promise<ResponseDeleteDTO>;
}
