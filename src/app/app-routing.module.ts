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
import { TableComponent } from './table/table.component';
import { DynamicColumnsComponent } from './table/dynamic-columns/dynamic-columns.component';
import { TemplateComponent } from './table/template/template.component';
import { SizeComponent } from './table/size/size.component';
import { GridlinesComponent } from './table/gridlines/gridlines.component';
import { StripedrowComponent } from './table/stripedrow/stripedrow.component';
import { StyleComponent } from './table/style/style.component';
import { ResponsiveComponent } from './table/responsive/responsive.component';
import { StackComponent } from './table/stack/stack.component';
import { PaginatorComponent } from './table/paginator/paginator.component';
import { ProgrammaticComponent } from './table/programmatic/programmatic.component';
import { SortComponent } from './table/sort/sort.component';
import { MultiplecolumsComponent } from './table/multiplecolums/multiplecolums.component';
import { PresortComponent } from './table/presort/presort.component';
import { RemoveableComponent } from './table/removeable/removeable.component';
import { FilterComponent } from './table/filter/filter.component';
import { MetakeyComponent } from './table/metakey/metakey.component';
import { RadiobuttonComponent } from './table/radiobutton/radiobutton.component';
import { CheckboxComponent } from './table/checkbox/checkbox.component';
import { EventComponent } from './table/event/event.component';
import { RowexpansionComponent } from './table/rowexpansion/rowexpansion.component';
import { ColumnselectionComponent } from './table/columnselection/columnselection.component';
import { EditComponent } from './table/edit/edit.component';
import { ScrollComponent } from './table/scroll/scroll.component';
import { VerticalComponent } from './table/vertical/vertical.component';
import { HorizontalComponent } from './table/horizontal/horizontal.component';
import { FlexibleComponent } from './table/flexible/flexible.component';
import { RowComponent } from './table/row/row.component';
import { FrozenrowComponent } from './table/frozenrow/frozenrow.component';
import { FrozencolumnComponent } from './table/frozencolumn/frozencolumn.component';
import { VirtualscrollComponent } from './table/virtualscroll/virtualscroll.component';
import { LazyloadingComponent } from './table/lazyloading/lazyloading.component';
import { ColumngroupComponent } from './table/columngroup/columngroup.component';
import { RowgroupComponent } from './table/rowgroup/rowgroup.component';
import { ExpandableComponent } from './table/expandable/expandable.component';
import { RowspanComponent } from './table/rowspan/rowspan.component';
import { ColumnresizeComponent } from './table/columnresize/columnresize.component';
import { ScrollableComponent } from './table/scrollable/scrollable.component';


const routes: Routes = [
  // {path: '', component: TimelineComponent},
  // {path:'timeline', component : TimelineComponent},
  // {path:'tree', component: TreeComponent},
  // {path:'treeTable', component: TreeTableComponent},
  // {path: 'accordian' , component: AccordianComponent},
  // { path:'card', component: CardComponent},
  // { path:'divider', component: DividerComponent},
  // { path:'fieldset', component: FieldsetComponent},
  // { path:'panel', component: PanelComponent},
  // { path:'splitter', component: SplitterComponent},
  // { path:'stepper', component: StepperComponent},
  // { path:'scrollpanel', component: ScrollpanelComponent},
  // { path:'tabview', component: TabviewComponent},
  // { path:'toolbar', component: ToolbarComponent},
  // { path:'overlaypanel', component: OverlaypanelComponent},
  // { path:'sidebar', component: SidebarComponent},
  // { path:'tooltip', component: TooltipComponent},
  // { path:'upload', component: UploadComponent},
  // { path:'contextmenu', component:ContextmenuComponent},
  // { path:'chart', component: ChartComponent},
  // { path:'image', component: ImageComponent},
  // { path:'avatar', component: AvatarComponent},
  {path: '', component: CheckboxComponent},
  // { path:'table', component: TableComponent},
  // { path:'dynamic-columns', component: DynamicColumnsComponent},
  // { path:'template', component: TemplateComponent},
  // { path:'size', component: SizeComponent},
  // { path:'gridlines', component: GridlinesComponent},
  // { path:'stripedrow', component: StripedrowComponent},
  // { path:'style', component: StyleComponent},
  // { path:'responsive', component: ResponsiveComponent},
  // { path:'stack', component: StackComponent},
  // { path:'paginator', component: PaginatorComponent},
  // { path:'sort', component: SortComponent},
  // { path:'multiplecolums', component: MultiplecolumsComponent},
  // { path:'presort', component: PresortComponent},
  // { path:'metakey', component: MetakeyComponent},
  // { path:'radiobutton', component: RadiobuttonComponent},

  { path:'checkbox', component: CheckboxComponent},
  { path:'edit', component: EditComponent},
  { path:'scroll', component: ScrollComponent},
  { path:'row', component: RowComponent},
  { path:'scrollable', component: ScrollableComponent},
  { path:'horizontal', component: HorizontalComponent},
  { path:'flexible', component: FlexibleComponent},
  { path:'frozenrow', component: FrozenrowComponent},
  { path:'frozencolumn', component: FrozencolumnComponent},
  { path:'virtualscroll', component: VirtualscrollComponent},
  { path:'columngroup', component: ColumngroupComponent},
  { path:'rowgroup', component: RowgroupComponent},
  { path:'expandable', component: ExpandableComponent},
  { path:'rowspan', component: RowspanComponent},
  { path:'columnresize', component: ColumnresizeComponent},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
