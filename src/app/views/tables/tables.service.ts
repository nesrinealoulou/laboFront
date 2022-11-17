import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TablesService {
    constructor() {
    }

    getDataConf() {
        return [
            {
                prop: 'id',
                name: 'Id'
            },
            {
                prop: 'cin',
                name: 'Cin'
            },
            {
                prop: 'name',
                name: 'Name'
            },
            {
                prop: 'type',
                name: 'Type'
            },
            {
                prop: 'cv',
                name: 'Cv'
            },
            {
                prop: 'createDate',
                name: 'Creation Date '
            },
            {
                prop: 'options',
                name: 'Options'
            }
        ];
    }

    getAll() {
        return [
            {
                'id': '12345',
                'cin': '12345678',
                'name': 'Amira',
                'createDate': '13/09/2022',
                'cv': 'lien',
                'type': 'STUDENT'
            },
            {
                'id': '56789',
                'cin': '00011122',
                'name': 'Aziz',
                'createDate': '14/09/2022',
                'cv': 'lien',
                'type': 'STUDENT'
            },
            {
                'id': '88888',
                'cin': '11112222',
                'name': 'Kmar',
                'createDate': '08/09/2022',
                'cv': 'lien',
                'type': 'STUDENT'
            },
            {
                'id': '99999',
                'cin': '11113333',
                'name': 'Ahmed',
                'createDate': '15/09/2022',
                'cv': 'lien',
                'type': 'STUDENT'
            }
        ];
    }

}
