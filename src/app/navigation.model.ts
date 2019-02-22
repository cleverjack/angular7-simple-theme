export class NavigationModel
{
    public model: any[];

    constructor()
    {
        this.model = [
            {
                'id'      : 'mail',
                'title'   : 'Mailbox',
                'type'    : 'group',
                'icon'    : 'mail',
                'url'     : '/mail/inbox',
                'children': [
                    {
                        'id'      : 'inbox',
                        'title'   : 'Inbox',
                        'type'    : 'item',
                        'icon'    : 'move_to_inbox',
                        'url'     : '/mail/inbox'
                    },
                    {
                        'id'   : 'drafts',
                        'title': 'Drafts',
                        'type' : 'item',
                        'icon' : 'drafts',
                        'url'  : '/mail/draft'
                    },
                    {
                        'id'   : 'sent',
                        'title': 'Sent',
                        'type' : 'item',
                        'icon' : 'send',
                        'url'  : '/mail/sent'
                    },
                    {
                        'id'   : 'starred',
                        'title': 'Starred',
                        'type' : 'item',
                        'icon' : 'star',
                        'url'  : '/mail/starred'
                    },
                    {
                        'id'   : 'spam',
                        'title': 'Spam',
                        'type' : 'item',
                        'icon' : 'warning',
                        'url'  : '/mail/spam'
                    },
                    {
                        'id'   : 'trash',
                        'title': 'Trash',
                        'type' : 'item',
                        'icon' : 'delete',
                        'url'  : '/mail/trash'
                    }
                ]
            },
            {
                'id'      : 'chat',
                'title'   : 'Chat',
                'type'    : 'group',
                'icon'    : 'chat',
                'url'  : '/chat/coming-soon',
                'children': [
                    {
                        'id'   : 'coming-soon',
                        'title': 'Coming Soon',
                        'type' : 'item',
                        'icon' : 'alarm',
                        'url'  : '/chat/coming-soon'
                    },
                    {
                        'id'      : 'errors',
                        'title'   : 'Errors',
                        'type'    : 'collapse',
                        'icon'    : 'error',
                        'url'     : '/chat/coming-soon'
                    },
                    {
                        'id'      : 'invoice',
                        'title'   : 'Invoice',
                        'type'    : 'collapse',
                        'icon'    : 'receipt',
                        'url'     : '/chat/coming-soon'
                    }
                ]
            },
            {
                'id'      : 'settings',
                'title'   : 'Settings',
                'type'    : 'group',
                'icon'    : 'settings',
                'url'     : '/setting/coming-soon',
                'children': [
                    {
                        'id'   : 'coming-soon',
                        'title': 'Coming Soon',
                        'type' : 'item',
                        'icon' : 'alarm',
                        'url'  : '/setting/coming-soon'
                    },
                    {
                        'id'      : 'errors',
                        'title'   : 'Errors',
                        'type'    : 'collapse',
                        'icon'    : 'error',
                        'url'     : '/setting/coming-soon'
                    },
                    {
                        'id'      : 'invoice',
                        'title'   : 'Invoice',
                        'type'    : 'collapse',
                        'icon'    : 'receipt',
                        'url'     : '/setting/coming-soon'
                    }
                ]
            },
            {
                'id'      : 'ticket',
                'title'   : 'Ticket',
                'type'    : 'group',
                'icon'    : 'ballot',
                'url'     : '/ticket/coming-soon',
                'children': [
                    {
                        'id'   : 'coming-soon',
                        'title': 'Coming Soon',
                        'type' : 'item',
                        'icon' : 'alarm',
                        'url'  : '/ticket/coming-soon'
                    },
                    {
                        'id'      : 'errors',
                        'title'   : 'Errors',
                        'type'    : 'collapse',
                        'icon'    : 'error',
                        'url'     : '/ticket/coming-soon'
                    },
                    {
                        'id'      : 'invoice',
                        'title'   : 'Invoice',
                        'type'    : 'collapse',
                        'icon'    : 'receipt',
                        'url'     : '/ticket/coming-soon'
                    }
                ]
            },
            {
                'id'      : 'report',
                'title'   : 'Report',
                'type'    : 'group',
                'icon'    : 'list_alt',
                'url'     : '/report/coming-soon',
                'children': [
                    {
                        'id'   : 'coming-soon',
                        'title': 'Coming Soon',
                        'type' : 'item',
                        'icon' : 'alarm',
                        'url'  : '/report/coming-soon'
                    },
                    {
                        'id'      : 'errors',
                        'title'   : 'Errors',
                        'type'    : 'collapse',
                        'icon'    : 'error',
                        'url'     : '/report/coming-soon'
                    },
                    {
                        'id'      : 'invoice',
                        'title'   : 'Invoice',
                        'type'    : 'collapse',
                        'icon'    : 'receipt',
                        'url'     : '/report/coming-soon'
                    }
                ]
            }
        ];
    }
}
