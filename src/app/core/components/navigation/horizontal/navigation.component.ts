import { Component, Input, OnDestroy, ViewEncapsulation } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector     : 'horizental-navigation',
    templateUrl  : './navigation.component.html',
    styleUrls    : ['./navigation.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HorizentalNavigationComponent implements OnDestroy
{
    navigationModel: any[];
    navigationModelChangeSubscription: Subscription;

    @Input('layout') layout = 'vertical';

    constructor(private fuseNavigationService: NavigationService)
    {
        this.navigationModelChangeSubscription =
            this.fuseNavigationService.onHorizentalNavigationModelChange
                .subscribe((navigationModel) => {
                    this.navigationModel = navigationModel;
                });
    }

    ngOnDestroy()
    {
        this.navigationModelChangeSubscription.unsubscribe();
    }

}
