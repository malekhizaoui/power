import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { HttpClientModule } from '@angular/common/http';

import { CarService } from './car.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ListCarComponent } from './list-car/list-car.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { ReservationComponent } from './reservation/reservation.component';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ListCarComponent,
        CarDetailComponent,
        ReservationComponent,
        
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        HttpClientModule
    ],
    providers: [CarService],
    bootstrap: [AppComponent]
})
export class AppModule { }
