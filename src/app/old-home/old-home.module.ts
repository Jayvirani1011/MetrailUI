import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OldHomeRoutingModule } from './old-home-routing.module';
import { DisplayAutoCompleteteComponent } from './autoComplete/display-auto-completete/display-auto-completete.component';
import { FilteAutoCompleteteComponent } from './autoComplete/filte-auto-completete/filte-auto-completete.component';
import { HighlightAutoCompleteteComponent } from './autoComplete/highlight-auto-completete/highlight-auto-completete.component';
import { OptionGroupAutoCompleteteComponent } from './autoComplete/option-group-auto-completete/option-group-auto-completete.component';
import { OverviewAutoCompleteteComponent } from './autoComplete/overview-auto-completete/overview-auto-completete.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonExclusiveComponent } from './button/button-exclusive/button-exclusive.component';
import { ButtonSelectionModeComponent } from './button/button-selection-mode/button-selection-mode.component';
import { ButtonSheetComponent, BottomSheetView } from './button/button-sheet/button-sheet.component';
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
import { DateCustomeHeaderComponent, ExampleHeader } from './datePicker/date-custome-header/date-custome-header.component';
import { DateDifferentLocalComponent } from './datePicker/date-different-local/date-different-local.component';
import { DateEmulatingYearMonthComponent } from './datePicker/date-emulating-year-month/date-emulating-year-month.component';
import { DateFilterValidationComponent } from './datePicker/date-filter-validation/date-filter-validation.component';
import { DateInputChangeEventComponent } from './datePicker/date-input-change-event/date-input-change-event.component';
import { DateMomentJsComponent } from './datePicker/date-moment-js/date-moment-js.component';
import { DatePickerOpenComponent } from './datePicker/date-picker-open/date-picker-open.component';
import { DateRangeCustomComponent } from './datePicker/date-range-custom/date-range-custom.component';
import { DateRangePickerComponent } from './datePicker/date-range-picker/date-range-picker.component';
import { DateStartComponent } from './datePicker/date-start/date-start.component';
import { DialogAnimationsComponent, DialogAnimationsExampleDialog } from './dialogs/dialog-animations/dialog-animations.component';
import { DialogContentComponent, DialogContentExampleDialog } from './dialogs/dialog-content/dialog-content.component';
import { DialogElementsComponent, DialogelementsExampleDialog } from './dialogs/dialog-elements/dialog-elements.component';
import { DialogInjectingdataComponent, DialogDataExampleDialog } from './dialogs/dialog-injectingdata/dialog-injectingdata.component';
import { DialogMenuComponent, DialogFromMenuExampleDialog } from './dialogs/dialog-menu/dialog-menu.component';
import { DialogOverviewComponent, DialogOverviewExampleDialog } from './dialogs/dialog-overview/dialog-overview.component';
import { DividerComponent } from './divider/divider.component';
import { OldHomeComponent } from './old-home.component';
import { MaterialUiModule } from '../material-ui.module';
import { ExpandTogglesComponent } from './expansion/expand-toggles/expand-toggles.component';
import { BasicPanelComponent } from './expansion/basic-panel/basic-panel.component';
import { AccordionPanelComponent } from './expansion/accordion-panel/accordion-panel.component';


@NgModule({
  declarations: [
    HighlightAutoCompleteteComponent,
    DisplayAutoCompleteteComponent,
    FilteAutoCompleteteComponent,
    OptionGroupAutoCompleteteComponent,
    OverviewAutoCompleteteComponent,
    BadgeComponent,
    ButtonSheetComponent,
    BottomSheetView,
    ButtonViewComponent,
    ButtonToggleComponent,
    ButtonExclusiveComponent,
    ButtontogglesFormsComponent,
    ButtonSelectionModeComponent,
    CardActionsComponent,
    CardMultipleSectionsComponent,
    CardFooterComponent,
    CardMediaSizeComponent,
    CheckboxConfigurableComponent,
    CheckboxBasicExampleComponent,
    CheckboxReactiveFormsComponent,
    ChipsAutocompleteComponent,
    ChipsFormControlComponent,
    ChipsInputComponent,
    DateRangePickerComponent,
    DateRangeCustomComponent,
    DateCustomeHeaderComponent,
    ExampleHeader,
    DatePickerOpenComponent,
    DateCustomeClassesComponent,
    DateInputChangeEventComponent,
    DateFilterValidationComponent,
    DateCustomFormatsComponent,
    DateDifferentLocalComponent,
    DateMomentJsComponent,
    DateStartComponent,
    DateEmulatingYearMonthComponent,
    DialogAnimationsComponent,
    DialogAnimationsExampleDialog,
    DialogContentComponent,
    DialogContentExampleDialog,
    DialogInjectingdataComponent,
    DialogDataExampleDialog,
    DialogElementsComponent,
    DialogelementsExampleDialog,
    DialogMenuComponent,
    DialogFromMenuExampleDialog,
    DialogOverviewComponent,
    DialogOverviewExampleDialog,
    DividerComponent,
    OldHomeComponent,
    ExpandTogglesComponent,
    BasicPanelComponent,
    AccordionPanelComponent
  ],
  imports: [
    CommonModule,
    OldHomeRoutingModule,
    MaterialUiModule
  ]
})
export class OldHomeModule { }
