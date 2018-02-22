import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { NgReduxModule } from '@angular-redux/store'
import { NgReduxRouterModule } from '@angular-redux/router'

// This app's ngModules
import { StoreModule } from './store/module'
import { AnimalModule } from './animals/module'
import { ElephantModule } from './elephants/module'
import { LionModule } from './lions/module'
import { FeedbackModule } from './feedback/module'

// Top-level app component constructs.
import { appRoutes } from './routes'
import { AppComponent } from './component'

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgReduxModule,
    NgReduxRouterModule,
    AnimalModule,
    ElephantModule,
    LionModule,
    FeedbackModule,
    StoreModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
