import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';

import { NzDemoInputComponent} from './index.component';
import { NzDemoInputBasicComponent} from './basic';
import { NzDemoInputSizeComponent} from './size';
import { NzDemoInputAddonComponent} from './addon';
import { NzDemoInputGroupComponent} from './group';
import { NzDemoInputSearchInputComponent} from './search-input';
import { NzDemoInputTextareaComponent} from './textarea';
import { NzDemoInputAutosizeTextareaComponent} from './autosize-textarea';
import { NzDemoInputTooltipComponent} from './tooltip';
import { NzDemoInputPresuffixComponent} from './presuffix';


@NgModule({
    imports : [
        ShareModule,
        RouterModule.forChild([
            { path: '', component: NzDemoInputComponent}
        ])
    ],
    declarations: [
        NzDemoInputComponent,
	NzDemoInputBasicComponent,
	NzDemoInputSizeComponent,
	NzDemoInputAddonComponent,
	NzDemoInputGroupComponent,
	NzDemoInputSearchInputComponent,
	NzDemoInputTextareaComponent,
	NzDemoInputAutosizeTextareaComponent,
	NzDemoInputTooltipComponent,
	NzDemoInputPresuffixComponent,

    ],
    entryComponents: [
        
    ]
})
export class NzDemoInputModule {

}
