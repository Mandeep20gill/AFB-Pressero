//<reference path="../node_modules/angular2/typings/browser.d.ts"/> 
import { browserDynamicPlatform } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app.module';
browserDynamicPlatform().bootstrapModule(AppModule);