import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelineComponent } from './primeng/timeline/timeline.component';
import { TreeComponent } from './primeng/tree/tree.component';
import { TreeTableComponent } from './primeng/tree-table/tree-table.component';
import { TimelineModule } from 'primeng/timeline';
import { TreeModule } from 'primeng/tree';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TreeTableModule } from 'primeng/treetable';
import { ButtonModule } from 'primeng/button';
import { AccordianComponent } from './primeng/accordian/accordian.component';
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { CardComponent } from './primeng/card/card.component';
import { CardModule } from 'primeng/card';




@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    TreeComponent,
    TreeTableComponent,
     AccordianComponent,
     CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TimelineModule,
    TreeModule,
    InputSwitchModule,
    FormsModule,
    ReactiveFormsModule,
    TreeTableModule,
    ButtonModule,
    AccordionModule,
    DropdownModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AvatarModule,
    BadgeModule,
    CardModule 
    

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
