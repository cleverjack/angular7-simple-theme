import { Component, HostBinding, Input, OnInit, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { FuseConfigService } from '../../../../services/config.service';

@Component({
    selector   : 'fuse-nav-vertical-group',
    templateUrl: './nav-vertical-group.component.html',
    styleUrls  : ['./nav-vertical-group.component.scss']
})
export class FuseNavVerticalGroupComponent implements OnInit
{
    onSettingsChanged: Subscription;
    fuseSettings: any;
    isOpen = false;

    @HostBinding('class') classes = 'nav-item nav-group';
    @Input() item: any;

    @HostListener('mouseenter')
    open()
    {
        this.isOpen = true;
    }

    @HostListener('mouseleave')
    close()
    {
        this.isOpen = false;
    }

    constructor(
        private fuseConfig: FuseConfigService
    )
    {
        this.onSettingsChanged =
            this.fuseConfig.onSettingsChanged
                .subscribe(
                    (newSettings) => {
                        this.fuseSettings = newSettings;
                    }
                );
    }

    ngOnDestroy()
    {
        this.onSettingsChanged.unsubscribe();
    }

    ngOnInit()
    {
    }
}
