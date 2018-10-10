import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';

import { NzDemoInputComponent} from './index.component';
import { NzDemoInputBasicComponent} from './basic';
import { NzDemoInputBasicComponent} from './basic';
import { NzDemoInputSizeComponent} from './size';
import { NzDemoInputIconComponent} from './icon';
import { NzDemoInputSizeComponent} from './size';
import { NzDemoInputAddonComponent} from './addon';
import { NzDemoInputGroupComponent} from './group';
import { NzDemoInputDisabledComponent} from './disabled';
import { NzDemoInputLoadingComponent} from './loading';
import { NzDemoInputSearchInputComponent} from './search-input';
import { NzDemoInputTextareaComponent} from './textarea';
import { NzDemoInputMultipleComponent} from './multiple';
import { NzDemoInputAutosizeTextareaComponent} from './autosize-textarea';
import { NzDemoInputButtonGroupComponent} from './button-group';
import { NzDemoInputTooltipComponent} from './tooltip';
import { NzDemoInputPresuffixComponent} from './presuffix';
import { NzDemoInputGhostComponent} from './ghost';
import { NzDemoInputBlockComponent} from './block';


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
	NzDemoInputBasicComponent,
	NzDemoInputSizeComponent,
	NzDemoInputIconComponent,
	NzDemoInputSizeComponent,
	NzDemoInputAddonComponent,
	NzDemoInputGroupComponent,
	NzDemoInputDisabledComponent,
	NzDemoInputLoadingComponent,
	NzDemoInputSearchInputComponent,
	NzDemoInputTextareaComponent,
	NzDemoInputMultipleComponent,
	NzDemoInputAutosizeTextareaComponent,
	NzDemoInputButtonGroupComponent,
	NzDemoInputTooltipComponent,
	NzDemoInputPresuffixComponent,
	NzDemoInputGhostComponent,
	NzDemoInputBlockComponent,

    ],
    entryComponents: [
        {{entryComponents}}
    ]
})
export class NgDemoInputModule {

}
