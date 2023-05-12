import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewHomeRoutingModule } from './new-home-routing.module';
import { NewHomeComponent } from './new-home.component';
import { MaterialUiModule } from '../material-ui.module';
import { FormAppearanceVariantsComponent } from './formField/form-appearance-variants/form-appearance-variants.component';
import { FormCustomeContactComponent, MyTelInput } from './formField/form-custome-contact/form-custome-contact.component';
import { FormCustomeEmailComponent } from './formField/form-custome-email/form-custome-email.component';
import { FormFieldHintComponent } from './formField/form-field-hint/form-field-hint.component';
import { FormFieldLabelComponent } from './formField/form-field-label/form-field-label.component';
import { FormFieldSimpleComponent } from './formField/form-field-simple/form-field-simple.component';
import { FormFieldPrefixSuffixComponent } from './formField/form-field-prefix-suffix/form-field-prefix-suffix.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { IconComponent } from './icon/icon.component';
import { InputClearButtonComponent } from './input/input-clear-button/input-clear-button.component';
import { InputErrorStateMatcherComponent } from './input/input-error-state-matcher/input-error-state-matcher.component';
import { InputsFormComponent } from './input/inputs-form/inputs-form.component';
import { ListBasicComponent } from './list/list-basic/list-basic.component';
import { ListSectionComponent } from './list/list-section/list-section.component';
import { ListSelectionComponent } from './list/list-selection/list-selection.component';
import { ListVariantsComponent } from './list/list-variants/list-variants.component';
import { MenuIconComponent } from './menu/menu-icon/menu-icon.component';
import { MenuNestedComponent } from './menu/menu-nested/menu-nested.component';
import { PaginatorConfigurableComponent } from './paginator/paginator-configurable/paginator-configurable.component';
import { MyCustomPaginatorIntl, PaginatorInternationalizationComponent } from './paginator/paginator-internationalization/paginator-internationalization.component';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { ProgressbarComponent } from './progressbar/progressbar.component';


@NgModule({
  declarations: [
    NewHomeComponent,
    FormAppearanceVariantsComponent,
    FormCustomeContactComponent,
    MyTelInput,
    FormCustomeEmailComponent,
    FormFieldHintComponent,
    FormFieldLabelComponent,
    FormFieldSimpleComponent,
    FormFieldPrefixSuffixComponent,
    GridListComponent,
    IconComponent,
    InputClearButtonComponent,
    InputErrorStateMatcherComponent,
    InputsFormComponent,
    ListBasicComponent,
    ListSectionComponent,
    ListSelectionComponent,
    ListVariantsComponent,
    MenuIconComponent,
    MenuNestedComponent,
    PaginatorConfigurableComponent,
    PaginatorInternationalizationComponent,
    ProgressbarComponent,
  ],
  imports: [
    CommonModule,
    NewHomeRoutingModule,
    MaterialUiModule,
  ],
  providers: [{provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}],
})
export class NewHomeModule { }
