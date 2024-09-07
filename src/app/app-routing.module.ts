import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimelineComponent } from './primeng/timeline/timeline.component';
import { TreeComponent } from './primeng/tree/tree.component';
import { TreeTableComponent } from './primeng/tree-table/tree-table.component';
import { AccordianComponent } from './primeng/accordian/accordian.component';
import { CardComponent } from './primeng/card/card.component';
import { DividerComponent } from './panel/divider/divider.component';
import { FieldsetComponent } from './panel/fieldset/fieldset.component';
import { PanelComponent } from './panel/panel.component';
import { SplitterComponent } from './panel/splitter/splitter.component';
import { StepperComponent } from './panel/stepper/stepper.component';
import { ScrollpanelComponent } from './panel/scrollpanel/scrollpanel.component';
import { TabviewComponent } from './panel/tabview/tabview.component';
import { ToolbarComponent } from './panel/toolbar/toolbar.component';
import { OverlaypanelComponent } from './overlay/overlaypanel/overlaypanel.component';
import { SidebarComponent } from './overlay/sidebar/sidebar.component';
import { TooltipComponent } from './overlay/tooltip/tooltip.component';
import { UploadComponent } from './overlay/upload/upload.component';
import { BreadcrumbComponent } from './overlay/breadcrumb/breadcrumb.component';
import { ContextmenuComponent } from './overlay/contextmenu/contextmenu.component';
import { DockComponent } from './overlay/dock/dock.component';
import { ChartComponent } from './overlay/chart/chart.component';
import { PieComponent } from './overlay/chart/pie/pie.component';
import { ImageComponent } from './overlay/image/image.component';
import { AvatarComponent } from './overlay/avatar/avatar.component';


const routes: Routes = [
  // {path: '', component: TimelineComponent},
  // {path:'timeline', component : TimelineComponent},
  // {path:'tree', component: TreeComponent},
  // {path:'treeTable', component: TreeTableComponent},
  // {path: 'accordian' , component: AccordianComponent},
  // { path:'card', component: CardComponent},
  {path: '', component: SidebarComponent},
  { path:'divider', component: DividerComponent},
  { path:'fieldset', component: FieldsetComponent},
  { path:'panel', component: PanelComponent},
  { path:'splitter', component: SplitterComponent},
  { path:'stepper', component: StepperComponent},
  { path:'scrollpanel', component: ScrollpanelComponent},
  { path:'tabview', component: TabviewComponent},
  { path:'toolbar', component: ToolbarComponent},
  { path:'overlaypanel', component: OverlaypanelComponent},
  { path:'sidebar', component: SidebarComponent},
  { path:'tooltip', component: TooltipComponent},
  { path:'upload', component: UploadComponent},
  { path:'contextmenu', component:ContextmenuComponent},
  { path:'chart', component: ChartComponent},
  { path:'image', component: ImageComponent},
  { path:'avatar', component: AvatarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
