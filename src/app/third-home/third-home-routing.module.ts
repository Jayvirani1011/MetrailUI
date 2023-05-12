import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThirdHomeComponent } from './third-home.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { RipplesComponent } from './ripples/ripples.component';
import { SelectCustomeComponent } from './select/select-custome/select-custome.component';
import { SelectCustomErrorStateMatcherComponent } from './select/select-custom-error-state-matcher/select-custom-error-state-matcher.component';
import { SelectFormComponent } from './select/select-form/select-form.component';
import { SideNavAutosizeComponent } from './sideNav/side-nav-autosize/side-nav-autosize.component';
import { SideNavBackgroundSettingComponent } from './sideNav/side-nav-background-setting/side-nav-background-setting.component';
import { SideNavFixedComponent } from './sideNav/side-nav-fixed/side-nav-fixed.component';
import { SideNavCustomEscapeComponent } from './sideNav/side-nav-custom-escape/side-nav-custom-escape.component';
import { SideNavConfigurableModeComponent } from './sideNav/side-nav-configurable-mode/side-nav-configurable-mode.component';
import { SideNavOpenCloseComponent } from './sideNav/side-nav-open-close/side-nav-open-close.component';
import { PracticeRoundTextBoxComponent } from './practice-round-text-box/practice-round-text-box.component';

const routes: Routes = [
  {path:'',component:ThirdHomeComponent, children: [
    {path: 'progressSpinner', component: ProgressSpinnerComponent},
    {path: 'radioButton', component: RadioButtonComponent},
    {path: 'ripples', component: RipplesComponent},
    {path: 'selectCustome', component: SelectCustomeComponent},
    {path: 'selectCustomErrorStateMatcher', component: SelectCustomErrorStateMatcherComponent},
    {path: 'selectForm', component: SelectFormComponent},
    {path: 'sideNaveAutosize', component: SideNavAutosizeComponent},
    {path: 'sideNavBackgroundSetting', component: SideNavBackgroundSettingComponent},
    {path: 'sideNavFixed', component: SideNavFixedComponent},
    {path: 'sideNavCustormEscap', component: SideNavCustomEscapeComponent},
    {path: 'sideNavConfigurableMode', component: SideNavConfigurableModeComponent},
    {path: 'sideNavOpenClose', component: SideNavOpenCloseComponent},
    {path: 'practiceRoundTextBox', component: PracticeRoundTextBoxComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThirdHomeRoutingModule { }
