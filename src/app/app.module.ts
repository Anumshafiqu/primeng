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
import { PanelComponent } from './panel/panel.component';
import { DividerComponent } from './panel/divider/divider.component';
import { DividerModule } from 'primeng/divider';
import { FieldsetComponent } from './panel/fieldset/fieldset.component';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { SplitterComponent } from './panel/splitter/splitter.component';
import { SplitterModule } from 'primeng/splitter';






@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    TreeComponent,
    TreeTableComponent,
     AccordianComponent,
     CardComponent,
     PanelComponent,
     DividerComponent,
     FieldsetComponent,
     SplitterComponent,

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
    CardModule,
    DividerModule,
    FieldsetModule,
    PanelModule,
    SplitterModule
    

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
