import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { PageComponent } from './page/page.component';

export const routes: Routes = [

    {path: 'facesnap', component:FaceSnapListComponent},
    {path: '', component:PageComponent}
];
