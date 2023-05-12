import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewHomeComponent } from './new-home.component';
import { FormAppearanceVariantsComponent } from './formField/form-appearance-variants/form-appearance-variants.component';
import { FormCustomeContactComponent } from './formField/form-custome-contact/form-custome-contact.component';
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
import { PaginatorInternationalizationComponent } from './paginator/paginator-internationalization/paginator-internationalization.component';
import { MatProgressBar } from '@angular/material/progress-bar';
import { ProgressbarComponent } from './progressbar/progressbar.component';

const routes: Routes = [
  {path:'',component:NewHomeComponent,children:[
    {path:'formAppearance', component:FormAppearanceVariantsComponent},
    {path:'formCustomeContact', component:FormCustomeContactComponent},
    {path:'formCustomeEmail', component:FormCustomeEmailComponent},
    {path:'formFieldHint', component:FormFieldHintComponent},
    {path:'formFieldLabel', component:FormFieldLabelComponent},
    {path:'formFieldSimple', component:FormFieldSimpleComponent},
    {path:'formFieldPrefixSuffix', component:FormFieldPrefixSuffixComponent},
    {path:'gridList', component:GridListComponent},
    {path:'icon', component:IconComponent},
    {path:'inputClearButton', component:InputClearButtonComponent},
    {path:'inputError', component:InputErrorStateMatcherComponent},
    {path:'inputsForm', component:InputsFormComponent},
    {path:'listBasic', component:ListBasicComponent},
    {path:'listSection', component:ListSectionComponent},
    {path:'listSelection', component:ListSelectionComponent},
    {path:'listVariants', component:ListVariantsComponent},
    {path:'menuIcon', component:MenuIconComponent},
    {path:'menuNested', component:MenuNestedComponent},
    {path:'paginatorConfigurable', component:PaginatorConfigurableComponent},
    {path:'paginatorInternationalization', component:PaginatorInternationalizationComponent},
    {path:'progressbar', component:ProgressbarComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewHomeRoutingModule { }
