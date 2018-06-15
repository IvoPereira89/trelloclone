import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoutesPath } from './app.routes';

@NgModule({
  imports: [ RouterModule.forRoot(RoutesPath, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
