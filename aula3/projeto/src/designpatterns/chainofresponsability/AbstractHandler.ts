import { request } from 'http';
import { Handler } from './Handler';

export abstract class AbstractHandler implements Handler{
    private nexthandler: Handler;

    public  setNext(handler: Handler): Handler {
        this.nexthandler = handler;
        return handler;
    }

    public  handle(request: string): string {
        if (this.nexthandler) {
            return this.nexthandler.handle(request);
        }

        return null;
    }
}