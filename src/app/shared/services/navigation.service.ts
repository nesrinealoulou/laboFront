import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface IMenuItem {
  type: string; // Possible values: link/dropDown/icon/separator/extLink
  name?: string; // Used as display text for item and title for separator type
  state?: string; // Router state
  icon?: string; // Material icon name
  svgIcon?: string; // UI Lib icon name
  tooltip?: string; // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  badges?: IBadge[];
}
interface IChildItem {
  type?: string;
  name: string; // Display text
  state?: string; // Router state
  icon?: string;  // Material icon name
  svgIcon?: string; // UI Lib icon name
  sub?: IChildItem[];
}

interface IBadge {
  color: string; // primary/accent/warn/hex color codes(#fff000)
  value: string; // Display text
}

@Injectable()
export class NavigationService {
  iconMenu: IMenuItem[] = [
    {
      name: 'HOME',
      type: 'icon',
      tooltip: 'Home',
      icon: 'home',
      state: 'home'
    },
    {
      type: 'separator',
      name: 'Main Items'
    },
    {
      name: 'DASHBOARD',
      type: 'dropDown',
      tooltip: 'Dashboard',
      icon: 'dashboard',
      state: 'dashboard',
      sub: [
        { name: 'Default', state: 'default' },
        {name: 'Learning Management', state: 'learning-management'},
        { name: 'Analytics', state: 'analytics' },
        { name: 'Analytics Alt', state: 'analytics-alt' },
        { name: 'Cryptocurrency', state: 'crypto' },
        { name: 'Dark Cards', state: 'dark' }
      ]
    },
    {
      name: 'PROFILE',
      type: 'dropDown',
      tooltip: 'Profile',
      icon: 'person',
      state: 'profile',
      badges: [{ color: 'primary', value: '2' }],
      sub: [
        { name: 'OVERVIEW', state: 'overview' },
        { name: 'SETTINGS', state: 'settings' }
      ]
    },
    {
      name: 'members',
      type: 'link',
      tooltip: 'members',
      icon: 'people_outline',
      state: 'members'
    },
    {
      name: 'CRUD Table',
      type: 'link',
      tooltip: 'CRUD Table',
      icon: 'list',
      state: 'cruds/ngx-table'
    },
    {
      name: 'FORMS',
      type: 'dropDown',
      tooltip: 'Forms',
      icon: 'description',
      state: 'forms',
      sub: [
        { name: 'BASIC', state: 'basic' },
        { name: 'EDITOR', state: 'editor' },
        { name: 'UPLOAD', state: 'upload' },
        { name: 'WIZARD', state: 'wizard' }
      ]
    },
    {
      name: 'TABLES',
      type: 'dropDown',
      tooltip: 'Tables',
      icon: 'format_line_spacing',
      state: 'tables',
      sub: [
        { name: 'FULLSCREEN', state: 'fullscreen' },
        { name: 'PAGING', state: 'paging' },
        { name: 'FILTER', state: 'filter' },
        { name: 'Material Table', state: 'mat-table' }
      ]
    },
    {
      name: 'CHARTS',
      type: 'dropDown',
      tooltip: 'Charts',
      icon: 'show_chart',
      sub: [
        { name: 'Chart js', state: 'charts' },
        {
          name: 'eChart',
          type: 'dropDown',
          state: 'chart',
          sub: [
            { name: 'Pie', state: 'pie' },
            { name: 'Bar', state: 'bar' },
            { name: 'Radar', state: 'radar' },
            // { name: "Heatmap", state: "heatmap" },
          ]
        }
      ]
    },
    // {
    //   name: "CHARTS",
    //   type: "link",
    //   tooltip: "Charts",
    //   icon: "show_chart",
    //   state: "charts"
    // },
    {
      name: 'SESSIONS',
      type: 'dropDown',
      tooltip: 'Pages',
      icon: 'view_carousel',
      state: 'sessions',
      sub: [
        { name: 'SIGNUP', state: 'signup' },
        { name: 'Signup 2', state: 'signup2' },
        { name: 'Signup 3', state: 'signup3' },
        { name: 'Signup 4', state: 'signup4' },
        { name: 'SIGNIN', state: 'signin' },
        { name: 'Signin 2', state: 'signin2' },
        { name: 'Signin 3', state: 'signin3' },
        { name: 'Signin 4', state: 'signin4' },
        { name: 'FORGOT', state: 'forgot-password' },
        { name: 'LOCKSCREEN', state: 'lockscreen' },
        { name: 'NOTFOUND', state: '404' },
        { name: 'ERROR', state: 'error' }
      ]
    },

  ];

  separatorMenu: IMenuItem[] = [
    {
      type: 'separator',
      name: 'Custom components'
    },
    {
      name: 'DASHBOARD',
      type: 'link',
      tooltip: 'Dashboard',
      icon: 'dashboard',
      state: 'dashboard'
    },
    {
      name: 'PROFILE',
      type: 'icon',
      tooltip: 'Profile',
      icon: 'person',
      state: 'profile/overview'
    },
    {
      name: 'PROFILE',
      type: 'dropDown',
      tooltip: 'Profile',
      icon: 'person',
      state: 'profile',
      badges: [{ color: 'primary', value: '2' }],
      sub: [
        { name: 'OVERVIEW', state: 'overview' },
        { name: 'SETTINGS', state: 'settings' }
      ]
    },
    {
      name: 'members',
      type: 'link',
      tooltip: 'members',
      icon: 'people_outline',
      state: 'members'
    },
    {
      name: 'CRUD Table',
      type: 'link',
      tooltip: 'CRUD Table',
      icon: 'format_list_bulleted',
      state: 'cruds/ngx-table'
    },
    {
      type: 'separator',
      name: 'Integrated components'
    },
    {
      name: 'MATERIAL',
      type: 'dropDown',
      tooltip: 'Material',
      icon: 'favorite',
      state: 'material',
      sub: [
        { name: 'BUTTONS', state: 'buttons' },
        { name: 'Button Toggle', state: 'button-toggle' },
        { name: 'Buttons Loading', state: 'loading-buttons' },
        { name: 'CARDS', state: 'cards' },
        { name: 'GRIDS', state: 'grids' },
        { name: 'LISTS', state: 'lists' },
        { name: 'MENU', state: 'menu' },
        { name: 'TABS', state: 'tabs' },
        { name: 'SELECT', state: 'select' },
        { name: 'RADIO', state: 'radio' },
        { name: 'AUTOCOMPLETE', state: 'autocomplete' },
        { name: 'SLIDER', state: 'slider' },
        { name: 'PROGRESS', state: 'progress' },
        { name: 'SNACKBAR', state: 'snackbar' }
      ]
    },
    {
      name: 'FORMS',
      type: 'dropDown',
      tooltip: 'Forms',
      icon: 'description',
      state: 'forms',
      sub: [
        { name: 'BASIC', state: 'basic' },
        { name: 'EDITOR', state: 'editor' },
        { name: 'UPLOAD', state: 'upload' },
        { name: 'WIZARD', state: 'wizard' }
      ]
    },
    {
      name: 'TABLES',
      type: 'dropDown',
      tooltip: 'Tables',
      icon: 'format_line_spacing',
      state: 'tables',
      sub: [
        { name: 'FULLSCREEN', state: 'fullscreen' },
        { name: 'PAGING', state: 'paging' },
        { name: 'FILTER', state: 'filter' }
      ]
    },
    {
      name: 'MAP',
      type: 'link',
      tooltip: 'Map',
      icon: 'add_location',
      state: 'map'
    },
    {
      name: 'CHARTS',
      type: 'link',
      tooltip: 'Charts',
      icon: 'show_chart',
      state: 'charts'
    },
    {
      type: 'separator',
      name: 'Other components'
    },
    {
      name: 'SESSIONS',
      type: 'dropDown',
      tooltip: 'Pages',
      icon: 'view_carousel',
      state: 'sessions',
      sub: [
        { name: 'SIGNUP', state: 'signup' },
        { name: 'SIGNIN', state: 'signin' },
        { name: 'FORGOT', state: 'forgot-password' },
        { name: 'LOCKSCREEN', state: 'lockscreen' },
        { name: 'NOTFOUND', state: '404' },
        { name: 'ERROR', state: 'error' }
      ]
    },
    {
      name: 'OTHERS',
      type: 'dropDown',
      tooltip: 'Others',
      icon: 'blur_on',
      state: 'others',
      sub: [
        { name: 'GALLERY', state: 'gallery' },
        { name: 'PRICINGS', state: 'pricing' },
        { name: 'USERS', state: 'users' },
        { name: 'BLANK', state: 'blank' }
      ]
    },
    {
      name: 'MATICONS',
      type: 'link',
      tooltip: 'Material Icons',
      icon: 'store',
      state: 'icons'
    },

  ];

  plainMenu: IMenuItem[] = [
    {
      name: 'DASHBOARD',
      type: 'link',
      tooltip: 'Dashboard',
      icon: 'dashboard',
      state: 'dashboard'
    },
    {
      name: 'PROFILE',
      type: 'dropDown',
      tooltip: 'Profile',
      icon: 'person',
      state: 'profile',
      badges: [{ color: 'primary', value: '2' }],
      sub: [
        { name: 'OVERVIEW', state: 'overview' },
        { name: 'SETTINGS', state: 'settings' }
      ]
    },
    {
      name: 'members',
      type: 'link',
      tooltip: 'members',
      icon: 'people_outline',
      state: 'members'
    },
    {
      name: 'CRUD Table',
      type: 'link',
      tooltip: 'CRUD Table',
      icon: 'format_list_bulleted',
      state: 'cruds/ngx-table'
    },
    {
      name: 'MATERIAL',
      type: 'dropDown',
      icon: 'favorite',
      state: 'component',
      sub: [
        { name: 'BUTTONS', state: 'buttons' },
        { name: 'Button Toggle', state: 'button-toggle' },
        { name: 'Buttons Loading', state: 'loading-buttons' },
        { name: 'CARDS', state: 'cards' },
        { name: 'GRIDS', state: 'grids' },
        { name: 'LISTS', state: 'lists' },
        { name: 'MENU', state: 'menu' },
        { name: 'TABS', state: 'tabs' },
        { name: 'SELECT', state: 'select' },
        { name: 'RADIO', state: 'radio' },
        { name: 'AUTOCOMPLETE', state: 'autocomplete' },
        { name: 'SLIDER', state: 'slider' },
        { name: 'PROGRESS', state: 'progress' },
        { name: 'SNACKBAR', state: 'snackbar' }
      ]
    },
    {
      name: 'FORMS',
      type: 'dropDown',
      tooltip: 'Forms',
      icon: 'description',
      state: 'forms',
      sub: [
        { name: 'BASIC', state: 'basic' },
        { name: 'EDITOR', state: 'editor' },
        { name: 'UPLOAD', state: 'upload' },
        { name: 'WIZARD', state: 'wizard' }
      ]
    },
    {
      name: 'TABLES',
      type: 'dropDown',
      tooltip: 'Tables',
      icon: 'format_line_spacing',
      state: 'tables',
      sub: [
        { name: 'FULLSCREEN', state: 'fullscreen' },
        { name: 'PAGING', state: 'paging' },
        { name: 'FILTER', state: 'filter' }
      ]
    },

    {
      name: 'MAP',
      type: 'link',
      tooltip: 'Map',
      icon: 'add_location',
      state: 'map'
    },
    {
      name: 'CHARTS',
      type: 'link',
      tooltip: 'Charts',
      icon: 'show_chart',
      state: 'charts'
    },
    {
      name: 'SESSIONS',
      type: 'dropDown',
      tooltip: 'Pages',
      icon: 'view_carousel',
      state: 'sessions',
      sub: [
        { name: 'SIGNUP', state: 'signup' },
        { name: 'SIGNIN', state: 'signin' },
        { name: 'FORGOT', state: 'forgot-password' },
        { name: 'LOCKSCREEN', state: 'lockscreen' },
        { name: 'NOTFOUND', state: '404' },
        { name: 'ERROR', state: 'error' }
      ]
    },
    {
      name: 'OTHERS',
      type: 'dropDown',
      tooltip: 'Others',
      icon: 'blur_on',
      state: 'others',
      sub: [
        { name: 'GALLERY', state: 'gallery' },
        { name: 'PRICINGS', state: 'pricing' },
        { name: 'USERS', state: 'users' },
        { name: 'BLANK', state: 'blank' }
      ]
    },
    {
      name: 'MATICONS',
      type: 'link',
      tooltip: 'Material Icons',
      icon: 'store',
      state: 'icons'
    },

  ];

  // Icon menu TITLE at the very top of navigation.
  // This title will appear if any icon type item is present in menu.
  iconTypeMenuTitle = 'Frequently Accessed';
  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.iconMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();
  constructor() {}

  // Customizer component uses this method to change menu.
  // You can remove this method and customizer component.
  // Or you can customize this method to supply different menu for
  // different user type.
  publishNavigationChange(menuType: string) {
    switch (menuType) {
      case 'separator-menu':
        this.menuItems.next(this.separatorMenu);
        break;
      case 'icon-menu':
        this.menuItems.next(this.iconMenu);
        break;
      default:
        this.menuItems.next(this.plainMenu);
    }
  }
}
