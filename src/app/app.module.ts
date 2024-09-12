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
import { StepperModule } from 'primeng/stepper';
import { StepperComponent } from './panel/stepper/stepper.component';
import { ScrollpanelComponent } from './panel/scrollpanel/scrollpanel.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TabviewComponent } from './panel/tabview/tabview.component';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';
import { ToolbarComponent } from './panel/toolbar/toolbar.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { OverlayComponent } from './overlay/overlay.component';
import { OverlaypanelComponent } from './overlay/overlaypanel/overlaypanel.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputGroupModule } from 'primeng/inputgroup';
import { ChipsModule } from 'primeng/chips';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { SidebarComponent } from './overlay/sidebar/sidebar.component';
import { SidebarModule } from 'primeng/sidebar';
import { TooltipModule } from 'primeng/tooltip';
import { TooltipComponent } from './overlay/tooltip/tooltip.component';
import { FileUploadModule } from 'primeng/fileupload';
import { UploadComponent } from './overlay/upload/upload.component';
import { BreadcrumbComponent } from './overlay/breadcrumb/breadcrumb.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ContextmenuComponent } from './overlay/contextmenu/contextmenu.component';
import { ContextMenu } from 'primeng/contextmenu';
import { DockComponent } from './overlay/dock/dock.component';
import { DockModule } from 'primeng/dock';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { StepsModule } from 'primeng/steps';
import { ChartComponent } from './overlay/chart/chart.component';
import { ChartModule } from 'primeng/chart';
import { PieComponent } from './overlay/chart/pie/pie.component';
import { ImageComponent } from './overlay/image/image.component';
import { ImageModule } from 'primeng/image';
import { DragDropModule } from 'primeng/dragdrop';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { AvatarComponent } from './overlay/avatar/avatar.component';
import { TableComponent } from './table/table.component';
import { TableModule } from 'primeng/table';
import { DynamicColumnsComponent } from './table/dynamic-columns/dynamic-columns.component';
import { TemplateComponent } from './table/template/template.component';
import { SizeComponent } from './table/size/size.component';
import { GridlinesComponent } from './table/gridlines/gridlines.component';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { SelectButtonModule } from 'primeng/selectbutton';
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
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MultiSelectModule } from 'primeng/multiselect';
import { MetakeyComponent } from './table/metakey/metakey.component';
import { RadiobuttonComponent } from './table/radiobutton/radiobutton.component';
import { CheckboxComponent } from './table/checkbox/checkbox.component';
import { EventComponent } from './table/event/event.component';
import { RowexpansionComponent } from './table/rowexpansion/rowexpansion.component';
import { ColumnselectionComponent } from './table/columnselection/columnselection.component';
import { EditComponent } from './table/edit/edit.component';
import { RowComponent } from './table/row/row.component';
import { FilterCellComponent } from './table/filter-cell/filter-cell.component';
import { ScrollComponent } from './table/scroll/scroll.component';
import { VerticalComponent } from './table/vertical/vertical.component';
import { FlexibleComponent } from './table/flexible/flexible.component';
import { HorizontalComponent } from './table/horizontal/horizontal.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { FrozenrowComponent } from './table/frozenrow/frozenrow.component';
import { FrozencolumnComponent } from './table/frozencolumn/frozencolumn.component';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { VirtualscrollComponent } from './table/virtualscroll/virtualscroll.component';
import { LazyloadingComponent } from './table/lazyloading/lazyloading.component';
import { ColumngroupComponent } from './table/columngroup/columngroup.component';
import { RowgroupComponent } from './table/rowgroup/rowgroup.component';
import { ExpandableComponent } from './table/expandable/expandable.component';
import { RowspanComponent } from './table/rowspan/rowspan.component';
import { ColumnresizeComponent } from './table/columnresize/columnresize.component';
import { ScrollableComponent } from './table/scrollable/scrollable.component';
import { ReorderComponent } from './table/reorder/reorder.component';
import { ColumntoggleComponent } from './table/columntoggle/columntoggle.component';
import { ExportComponent } from './table/export/export.component';
import { MenucontextComponent } from './table/menucontext/menucontext.component';
import { StatefulComponent } from './table/stateful/stateful.component';
import { SamplesComponent } from './table/samples/samples.component';
import { SliderModule } from 'primeng/slider';
import { ProductPageComponent } from './table/product-page/product-page.component';
import { BadgeComponent } from './badge/badge.component';
import { BlockUIModule } from 'primeng/blockui';
import { BlockuiComponent } from './badge/blockui/blockui.component';
import { ChipModule } from 'primeng/chip';
import { ChipComponent } from './badge/chip/chip.component';
import { InplaceModule } from 'primeng/inplace';
import { InplaceComponent } from './badge/inplace/inplace.component';
import { MeterGroupModule } from 'primeng/metergroup';
import { MetergroupComponent } from './badge/metergroup/metergroup.component';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ScrolltopComponent } from './badge/scrolltop/scrolltop.component';
import { SkeletonModule } from 'primeng/skeleton';
import { SkeletonComponent } from './badge/skeleton/skeleton.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressbarComponent } from './badge/progressbar/progressbar.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressspinnerComponent } from './badge/progressspinner/progressspinner.component';
import { TagComponent } from './badge/tag/tag.component';
import { TerminalModule } from 'primeng/terminal';
import { TerminalComponent } from './badge/terminal/terminal.component';
import { DeferModule } from 'primeng/defer';
import { FocustrapComponent } from './badge/focustrap/focustrap.component';












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
     StepperComponent,
     ScrollpanelComponent,
     TabviewComponent,
     ToolbarComponent,
     OverlayComponent,
     OverlaypanelComponent,
     SidebarComponent,
     TooltipComponent,
     UploadComponent,
     BreadcrumbComponent,
     ContextmenuComponent,
     DockComponent,
     ChartComponent,
     PieComponent,
     ImageComponent,
     AvatarComponent,
     TableComponent,
     DynamicColumnsComponent,
     TemplateComponent,
     SizeComponent,
     GridlinesComponent,
     StripedrowComponent,
     StyleComponent,
     ResponsiveComponent,
     StackComponent,
     PaginatorComponent,
     ProgrammaticComponent,
     SortComponent,
     MultiplecolumsComponent,
     PresortComponent,
     RemoveableComponent,
     FilterComponent,
     MetakeyComponent,
     RadiobuttonComponent,
     CheckboxComponent,
     EventComponent,
     RowexpansionComponent,
     ColumnselectionComponent,
     EditComponent,
     RowComponent,
     FilterCellComponent,
     ScrollComponent,
     VerticalComponent,
     FlexibleComponent,
     HorizontalComponent,
     FrozenrowComponent,
     FrozencolumnComponent,
     VirtualscrollComponent,
     LazyloadingComponent,
     ColumngroupComponent,
     RowgroupComponent,
     ExpandableComponent,
     RowspanComponent,
     ColumnresizeComponent,
     ScrollableComponent,
     ReorderComponent,
     ColumntoggleComponent,
     ExportComponent,
     MenucontextComponent,
     StatefulComponent,
     SamplesComponent,
     ProductPageComponent,
     BadgeComponent,
     BlockuiComponent,
     ChipComponent,
     InplaceComponent,
     MetergroupComponent,
     ScrolltopComponent,
     SkeletonComponent,
     ProgressbarComponent,
     ProgressspinnerComponent,
     TagComponent,
     TerminalComponent,
     FocustrapComponent,
     
     
     
     
     

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
    SplitterModule,
    StepperModule,
    ScrollPanelModule,
    TabViewModule,
    ToolbarModule,
    SplitButtonModule,
    ConfirmDialogModule,
    ToastModule,
    OverlayPanelModule,
    InputGroupModule,
    ChipsModule,
    InputGroupAddonModule,
    SidebarModule,
    TooltipModule,
    FileUploadModule,
    BreadcrumbModule,
    ContextMenuModule,
    DockModule,
    RadioButtonModule,
    MenuModule,
    MenubarModule,
    PanelMenuModule,
    StepsModule,
    ChartModule,
    ImageModule,
    DragDropModule,
    AvatarGroupModule,
    TableModule,
    TagModule,
    RatingModule,
    SelectButtonModule,
    IconFieldModule,
    InputIconModule,
    MultiSelectModule,
    HttpClientModule,
    DialogModule,
    ToggleButtonModule,
    SliderModule,
    BlockUIModule,
    ChipModule,
    InplaceModule,
    MeterGroupModule,
    ScrollTopModule,
    SkeletonModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    TerminalModule,
    DeferModule

    
    
    

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
