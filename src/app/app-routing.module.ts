import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { AdsComponent } from './ads/ads.component';

const routes: Routes = [
  { path: '', redirectTo: 'ads', pathMatch: 'full' },
  { path: 'chat', component: ChatComponent },
  { path: 'ads/:addName', component: AdsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
