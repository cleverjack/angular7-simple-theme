import { Component, Input, OnDestroy, ViewEncapsulation } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector     : 'vertical-navigation',
    templateUrl  : './navigation.component.html',
    styleUrls    : ['./navigation.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class VerticalNavigationComponent implements OnDestroy
{
    navigationModel: any[];
    navigationModelChangeSubscription: Subscription;

    @Input('layout') layout = 'vertical';

    constructor(private verticalNavigationService: NavigationService)
    {
        this.navigationModelChangeSubscription =
            this.verticalNavigationService.onNavigationModelChange
                .subscribe((navigationModel) => {
                    this.navigationModel = navigationModel;
                });
    }

    ngOnDestroy()
    {
        this.navigationModelChangeSubscription.unsubscribe();
    }

}
