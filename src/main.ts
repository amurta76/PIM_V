
import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


import { AppComponent } from './app/app.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppModule
  ],
  bootstrap: [AppComponent]
})
export class BootstrapModule { }

platformBrowserDynamic().bootstrapModule(BootstrapModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));
