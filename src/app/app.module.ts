import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppBootstrapModule } from './app-bootstrap.module';
import { AppComponent } from './app.component';
import { GuidelineDataComponent } from './guideline-data/guideline-data.component';
import { ProjectDataComponent } from './project-data/project-data.component';
import { CommonDataComponent } from './common-data/common-data.component';
import { GuidelineItemsComponent } from './guideline-data/guideline-items/guideline-items.component';
import { GuidelineRequirementComponent } from './guideline-data/guideline-requirement/guideline-requirement.component';
import { GuidelineTargetSettingComponent } from './guideline-data/guideline-target-setting/guideline-target-setting.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layout/default/default.module';
import { AppRoutingModule } from './app-routing.modules';





@NgModule({
  declarations: [
    AppComponent,
    GuidelineDataComponent,
    ProjectDataComponent,
    CommonDataComponent,
    GuidelineItemsComponent,
    GuidelineRequirementComponent,
    GuidelineTargetSettingComponent,
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppBootstrapModule,
    BrowserAnimationsModule,
    DefaultModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
