import {config as baseConfig} from "../wdio.conf";

Object.assign(baseConfig,{
    //All the test env specific key value pair
    environment:"TEST",
    sauuceDemoURL:"https://www.saucedemo.com/"
})

