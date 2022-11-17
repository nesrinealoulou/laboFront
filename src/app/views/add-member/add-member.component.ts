import {Component, OnInit, NgZone} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from '@angular/router';
import {Member} from 'app/shared/models/member';

@Component({
    selector: 'app-member',
    templateUrl: './add-member.component.html'
})
export class AddMemberComponent implements OnInit {
    title = '';
    member!: Member;
    form: FormGroup;
    minFromDate = '1980-01-01';
    maxToDate = new Date();
    show = false;
    selectedValue: string;
    action: string;

    constructor(private formBuilder: FormBuilder,
                private _snackBar: MatSnackBar) {
        this.form = this.formBuilder.group({
            cin: new FormControl('', [Validators.required]),
            date: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required]),
            firstName: new FormControl('', [Validators.required]),
            lastName: new FormControl('', [Validators.required]),
            cv: new FormControl('', [Validators.required])

        });

    }

    ngOnInit(): void {
    }


}
