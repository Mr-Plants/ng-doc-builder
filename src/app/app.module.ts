import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { PreloadAllModules, RouterModule } from '@angular/router';
import {environment} from '../environments/environment';
import { routes } from './app.routing.module';

import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {AboutComponent} from './about/about.component';
registerLocaleData(zh);

@NgModule({
    declarations: [
        AppComponent,
      AboutComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NgZorroAntdModule,
        RouterModule.forRoot(routes, environment.production ? { preloadingStrategy: PreloadAllModules } : {})
    ],
    providers: [{provide: NZ_I18N, useValue: zh_CN}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
