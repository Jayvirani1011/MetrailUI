import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayAutoCompleteteComponent } from './autoComplete/display-auto-completete/display-auto-completete.component';
import { FilteAutoCompleteteComponent } from './autoComplete/filte-auto-completete/filte-auto-completete.component';
import { HighlightAutoCompleteteComponent } from './autoComplete/highlight-auto-completete/highlight-auto-completete.component';
import { OptionGroupAutoCompleteteComponent } from './autoComplete/option-group-auto-completete/option-group-auto-completete.component';
import { OverviewAutoCompleteteComponent } from './autoComplete/overview-auto-completete/overview-auto-completete.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonExclusiveComponent } from './button/button-exclusive/button-exclusive.component';
import { ButtonSelectionModeComponent } from './button/button-selection-mode/button-selection-mode.component';
import { ButtonSheetComponent } from './button/button-sheet/button-sheet.component';
import { ButtonToggleComponent } from './button/button-toggle/button-toggle.component';
import { ButtonViewComponent } from './button/button-view/button-view.component';
import { ButtontogglesFormsComponent } from './button/buttontoggles-forms/buttontoggles-forms.component';
import { CardActionsComponent } from './card/card-actions/card-actions.component';
import { CardFooterComponent } from './card/card-footer/card-footer.component';
import { CardMediaSizeComponent } from './card/card-media-size/card-media-size.component';
import { CardMultipleSectionsComponent } from './card/card-multiple-sections/card-multiple-sections.component';
import { CheckboxBasicExampleComponent } from './checkbox/checkbox-basic-example/checkbox-basic-example.component';
import { CheckboxConfigurableComponent } from './checkbox/checkbox-configurable/checkbox-configurable.component';
import { CheckboxReactiveFormsComponent } from './checkbox/checkbox-reactive-forms/checkbox-reactive-forms.component';
import { ChipsAutocompleteComponent } from './chips/chips-autocomplete/chips-autocomplete.component';
import { ChipsFormControlComponent } from './chips/chips-form-control/chips-form-control.component';
import { ChipsInputComponent } from './chips/chips-input/chips-input.component';
import { DateCustomFormatsComponent } from './datePicker/date-custom-formats/date-custom-formats.component';
import { DateCustomeClassesComponent } from './datePicker/date-custome-classes/date-custome-classes.component';
import { DateCustomeHeaderComponent } from './datePicker/date-custome-header/date-custome-header.component';
import { DateDifferentLocalComponent } from './datePicker/date-different-local/date-different-local.component';
import { DateEmulatingYearMonthComponent } from './datePicker/date-emulating-year-month/date-emulating-year-month.component';
import { DateFilterValidationComponent } from './datePicker/date-filter-validation/date-filter-validation.component';
import { DateInputChangeEventComponent } from './datePicker/date-input-change-event/date-input-change-event.component';
import { DateMomentJsComponent } from './datePicker/date-moment-js/date-moment-js.component';
import { DatePickerOpenComponent } from './datePicker/date-picker-open/date-picker-open.component';
import { DateRangeCustomComponent } from './datePicker/date-range-custom/date-range-custom.component';
import { DateRangePickerComponent } from './datePicker/date-range-picker/date-range-picker.component';
import { DateStartComponent } from './datePicker/date-start/date-start.component';
import { DialogAnimationsComponent } from './dialogs/dialog-animations/dialog-animations.component';
import { DialogContentComponent } from './dialogs/dialog-content/dialog-content.component';
import { DialogElementsComponent } from './dialogs/dialog-elements/dialog-elements.component';
import { DialogInjectingdataComponent } from './dialogs/dialog-injectingdata/dialog-injectingdata.component';
import { DialogMenuComponent } from './dialogs/dialog-menu/dialog-menu.component';
import { DialogOverviewComponent } from './dialogs/dialog-overview/dialog-overview.component';
import { DividerComponent } from './divider/divider.component';
import { OldHomeComponent } from './old-home.component';
import { ExpandTogglesComponent } from './expansion/expand-toggles/expand-toggles.component';
import { BasicPanelComponent } from './expansion/basic-panel/basic-panel.component';
import { AccordionPanelComponent } from './expansion/accordion-panel/accordion-panel.component';

const routes: Routes = [
  {path:'',component:OldHomeComponent,children:[
    {path: 'hightlight', component:HighlightAutoCompleteteComponent},
    {path: 'display', component:DisplayAutoCompleteteComponent},
    {path: 'filter', component:FilteAutoCompleteteComponent},
    {path: 'stateGropu', component:OptionGroupAutoCompleteteComponent},
    {path: 'overview', component:OverviewAutoCompleteteComponent},
    {path: 'badge', component:BadgeComponent},
    {path: 'bottomSheet', component:ButtonSheetComponent},
    {path: 'bottomView', component:ButtonViewComponent},
    {path: 'bottomToggle', component:ButtonToggleComponent},
    {path: 'buttonExclusive', component:ButtonExclusiveComponent},
    {path: 'buttonToggleForm', component:ButtontogglesFormsComponent},
    {path: 'buttonSelectionMode', component:ButtonSelectionModeComponent},
    {path: 'cardAction', component:CardActionsComponent},
    {path: 'cardMultiple', component:CardMultipleSectionsComponent},
    {path: 'cardFooter', component:CardFooterComponent},
    {path: 'cardMediaSize', component:CardMediaSizeComponent},
    {path: 'checkboxConfigurable', component:CheckboxConfigurableComponent},
    {path: 'checkboxBasicExample', component:CheckboxBasicExampleComponent},
    {path: 'checkboxBasicExample', component:CheckboxBasicExampleComponent},
    {path: 'checkboxReactiveForm', component:CheckboxReactiveFormsComponent},
    {path: 'chipsAutocomplete', component:ChipsAutocompleteComponent},
    {path: 'chipFormControl', component:ChipsFormControlComponent},
    {path: 'chipInput', component:ChipsInputComponent},
    {path: 'dateRange', component:DateRangePickerComponent},
    {path: 'dateRangeCustome', component:DateRangeCustomComponent},
    {path: 'dateCustomeHeader', component:DateCustomeHeaderComponent},
    {path: 'datePickerOpen', component:DatePickerOpenComponent},
    {path: 'dateCustomeClasses', component:DateCustomeClassesComponent},
    {path: 'dateInputChangeEvent', component:DateInputChangeEventComponent},
    {path: 'dateFIlterValidation', component:DateFilterValidationComponent},
    {path: 'datecustomformats', component:DateCustomFormatsComponent},
    {path: 'datedifferentlocal', component:DateDifferentLocalComponent},
    {path: 'datemomentjs', component:DateMomentJsComponent},
    {path: 'datestart', component:DateStartComponent},
    {path: 'dateyearmonth', component:DateEmulatingYearMonthComponent},
    {path: 'dialoganimation', component:DialogAnimationsComponent},
    {path: 'dialogcontent', component:DialogContentComponent},
    {path: 'dialogdialogcontent', component:DialogInjectingdataComponent},
    {path: 'dialogelements', component:DialogElementsComponent},
    {path: 'dialogmenu', component:DialogMenuComponent},
    {path: 'dialogoverview', component:DialogOverviewComponent},
    {path: 'divider', component:DividerComponent},
    {path: 'expansiontoggle', component:ExpandTogglesComponent},
    {path: 'basicexpansion', component:BasicPanelComponent},
    {path: 'accordionPanel', component:AccordionPanelComponent},
]},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OldHomeRoutingModule { }
