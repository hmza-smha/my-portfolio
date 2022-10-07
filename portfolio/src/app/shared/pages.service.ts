import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})

export class PagesService{
    page = new BehaviorSubject<number>(0);
}