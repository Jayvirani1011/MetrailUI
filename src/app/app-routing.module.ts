import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'oldHome', pathMatch:'full'},
  // {path:'**', redirectTo:'oldHome', pathMatch:'full'},

    // old home
  {
    path: 'oldHome',
    loadChildren: () =>
      import('./old-home/old-home.module').then((m) => m.OldHomeModule),
  },
  {
    path: 'newHome',
    loadChildren: () =>
      import('./new-home/new-home.module').then((m) => m.NewHomeModule),
  },
  {
    path: 'thirdHome',
    loadChildren: () =>
      import('./third-home/third-home.module').then((m) => m.ThirdHomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
