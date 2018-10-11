import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';

import { NzDemoButtonComponent} from './index.component';
import { NzDemoButtonBasicComponent} from './basic';
import { NzDemoButtonIconComponent} from './icon';
import { NzDemoButtonSizeComponent} from './size';
import { NzDemoButtonDisabledComponent} from './disabled';
import { NzDemoButtonLoadingComponent} from './loading';
import { NzDemoButtonMultipleComponent} from './multiple';
import { NzDemoButtonButtonGroupComponent} from './button-group';
import { NzDemoButtonGhostComponent} from './ghost';
import { NzDemoButtonBlockComponent} from './block';


@NgModule({
    imports : [
        ShareModule,
        RouterModule.forChild([
            { path: '', component: NzDemoButtonComponent}
        ])
    ],
    declarations: [
        NzDemoButtonComponent,
	NzDemoButtonBasicComponent,
	NzDemoButtonIconComponent,
	NzDemoButtonSizeComponent,
	NzDemoButtonDisabledComponent,
	NzDemoButtonLoadingComponent,
	NzDemoButtonMultipleComponent,
	NzDemoButtonButtonGroupComponent,
	NzDemoButtonGhostComponent,
	NzDemoButtonBlockComponent,

    ],
    entryComponents: [
        NzDemoButtonBasicComponent
    ]
})
export class NzDemoButtonModule {

}
