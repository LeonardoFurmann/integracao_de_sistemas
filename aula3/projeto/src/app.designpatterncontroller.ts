import { Controller, Get } from "@nestjs/common";
import { AppDesignPatternService } from "./app.designpatternservice";


@Controller('/designpatterns')
export class AppDesignPatternController{
    public constructor(
        private readonly appDesignPatternService: AppDesignPatternService
    ) {}

    @Get('/singleton')
    public singleton(): object {
        return this.appDesignPatternService.singleton();
    }
}