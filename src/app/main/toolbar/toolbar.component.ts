import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { FuseConfigService } from '../../core/services/config.service';
import { TranslateService } from '@ngx-translate/core';
import { NavigationService } from '../../core/components/navigation/navigation.service';
import { NavigationModel } from '../../navigation.model';

@Component({
    selector   : 'fuse-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls  : ['./toolbar.component.scss']
})

export class FuseToolbarComponent
{
    userStatusOptions: any[];
    languages: any;
    selectedLanguage: any;
    showLoadingBar: boolean;
    horizontalNav: boolean;
    navigationModel: NavigationModel;

    constructor(
        private router: Router,
        private fuseConfig: FuseConfigService,
        private translate: TranslateService,
        private navigationService: NavigationService
    )
    {

        this.navigationModel = new NavigationModel();

        this.userStatusOptions = [
            {
                'title': 'Online',
                'icon' : 'icon-checkbox-marked-circle',
                'color': '#4CAF50'
            },
            {
                'title': 'Away',
                'icon' : 'icon-clock',
                'color': '#FFC107'
            },
            {
                'title': 'Do not Disturb',
                'icon' : 'icon-minus-circle',
                'color': '#F44336'
            },
            {
                'title': 'Invisible',
                'icon' : 'icon-checkbox-blank-circle-outline',
                'color': '#BDBDBD'
            },
            {
                'title': 'Offline',
                'icon' : 'icon-checkbox-blank-circle-outline',
                'color': '#616161'
            }
        ];

        this.languages = [
            {
                'id'   : 'en',
                'title': 'English',
                'flag' : 'us'
            },
            {
                'id'   : 'tr',
                'title': 'Turkish',
                'flag' : 'tr'
            }
        ];

        this.selectedLanguage = this.languages[0];

        router.events.subscribe(
            (event) => {
                if ( event instanceof NavigationStart )
                {
                    this.showLoadingBar = true;
                    if(event.url.indexOf('mail') !== -1) {
                        navigationService.setHorizentalNavigationModel(this.navigationModel.model[0].children);
                    }

                    if(event.url.indexOf('chat') !== -1) {
                        navigationService.setHorizentalNavigationModel(this.navigationModel.model[1].children);
                    }

                    if(event.url.indexOf('setting') !== -1) {
                        navigationService.setHorizentalNavigationModel(this.navigationModel.model[2].children);
                    }

                    if(event.url.indexOf('ticket') !== -1) {
                        navigationService.setHorizentalNavigationModel(this.navigationModel.model[3].children);
                    }

                    if(event.url.indexOf('report') !== -1) {
                        navigationService.setHorizentalNavigationModel(this.navigationModel.model[4].children);
                    }
                }
                if ( event instanceof NavigationEnd )
                {
                    this.showLoadingBar = false;
                }
            });

        this.fuseConfig.onSettingsChanged.subscribe((settings) => {
            this.horizontalNav = settings.layout.navigation === 'top';
        });

    }

    search(value)
    {
        // Do your search here...
        console.log(value);
    }

    setLanguage(lang)
    {
        // Set the selected language for toolbar
        this.selectedLanguage = lang;

        // Use the selected language for translations
        this.translate.use(lang.id);
    }
}
