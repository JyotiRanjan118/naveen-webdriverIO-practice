import { setWorldConstructor } from "@wdio/cucumber-framework";
import chai from "chai";

class CustomWorld{
    appid: string
    constructor(){
        this.appid = ""
    }
}
setWorldConstructor(CustomWorld)