import { NgModule } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { RouterModule } from '@angular/router';
import { VerticalNavigationComponent } from './vertical/navigation.component';
import { FuseNavVerticalItemComponent } from './vertical/nav-item/nav-vertical-item.component';
import { FuseNavVerticalCollapseComponent } from './vertical/nav-collapse/nav-vertical-collapse.component';
import { FuseNavVerticalGroupComponent } from './vertical/nav-group/nav-vertical-group.component';
import { FuseNavHorizontalItemComponent } from './horizontal/nav-item/nav-horizontal-item.component';
import { FuseNavHorizontalCollapseComponent } from './horizontal/nav-collapse/nav-horizontal-collapse.component';
import { HorizentalNavigationComponent } from './horizontal/navigation.component';

@NgModule({
    imports     : [
        SharedModule,
        RouterModule
    ],
    exports     : [
        VerticalNavigationComponent,
        HorizentalNavigationComponent
    ],
    declarations: [
        VerticalNavigationComponent,
        HorizentalNavigationComponent,
        FuseNavVerticalGroupComponent,
        FuseNavVerticalItemComponent,
        FuseNavVerticalCollapseComponent,
        FuseNavHorizontalItemComponent,
        FuseNavHorizontalCollapseComponent
    ]
})
export class FuseNavigationModule
{
}
