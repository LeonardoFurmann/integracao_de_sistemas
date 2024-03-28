export interface Handler {
    setNext(handler: Handler) : Handler;
    handle(Request: string) : string;
}