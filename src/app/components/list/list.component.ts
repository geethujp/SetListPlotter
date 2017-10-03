import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { GetSetInfoDataService } from './list.service';
@Component({
    selector: 'set-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    providers: [GetSetInfoDataService]
})

export class ListComponent {
    data: Observable<Array<any>>;
    constructor(private dataService: GetSetInfoDataService) {
        dataService.getSetInfoData().subscribe(res => {
            this.data = res;
        });
    }
}
