import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimelineComponent } from './primeng/timeline/timeline.component';
import { TreeComponent } from './primeng/tree/tree.component';
import { TreeTableComponent } from './primeng/tree-table/tree-table.component';
import { AccordianComponent } from './primeng/accordian/accordian.component';
import { CardComponent } from './primeng/card/card.component';

const routes: Routes = [
  {path: '', component: TimelineComponent},
  {path:'timeline', component : TimelineComponent},
  {path:'tree', component: TreeComponent},
  {path:'treeTable', component: TreeTableComponent},
  {path: 'accordian' , component: AccordianComponent},
  { path:'card', component: CardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
