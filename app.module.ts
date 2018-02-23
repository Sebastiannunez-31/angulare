import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routing } from './routing.module';
import { HomeComponent,  } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MAT_DIALOG_DATA,MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FormControl } from '@angular/forms';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { BsDatepickerModule } from 'ngx-bootstrap';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




import {
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatCardModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule,
  MatStepperModule,


} from '@angular/material';

import { StatComponent } from './components/myStats/stat.component';
import { ExecutivesComponent } from './components/executives/executives.component';
import { SolutionComponent } from './components/Solution/solution.component';
import { ContentComponent  } from './components/modal-mydata/modal.component';
import { PassComponent} from './components/modal-password/pass.component';
import { LogoutComponent } from './components/modal-logout/logout.component';
import { LostComponent} from './components/lostPass/lost.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http/src/interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MainComponent,
    SolutionComponent,
    StatComponent,
    ExecutivesComponent,
    ContentComponent,
    PassComponent,
    LogoutComponent,
    LostComponent,

    
  


    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    MatTableModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSelectModule,
    BsDatepickerModule.forRoot(),
    MatStepperModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatTooltipModule,

   
  
    
    
    





  ],
 
 
  entryComponents: [ ContentComponent,PassComponent,LogoutComponent ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}
  
  
  }
    
  
  
  ],
  bootstrap: [AppComponent]


})
export class AppModule { 
 

}
