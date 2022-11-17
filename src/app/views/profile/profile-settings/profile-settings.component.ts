import {Component, NgZone, OnInit} from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
    selector: 'app-profile-settings',
    templateUrl: './profile-settings.component.html',
    styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {
    public uploader: FileUploader = new FileUploader({ url: 'upload_url' });
    public hasBaseDropZoneOver = false;
    public fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }
    ngOnInit(): void {}
}
