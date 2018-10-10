import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';

{{imports}}

@NgModule({
    imports : [
        ShareModule,
        RouterModule.forChild([
            { path: '', component: NzDemo{{component}}Component}
        ])
    ],
    declarations: [
        {{declarations}}
    ],
    entryComponents: [
        {{entryComponents}}
    ]
})
export class NgDemo{{component}}Module {

}
