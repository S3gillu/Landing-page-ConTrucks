import { NgModule } from "@angular/core";
import { LandingpageComponent } from "./landingpage.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { HelpcenterComponent } from "./helpcenter/helpcenter.component";
import { HomeComponent } from "./home/home.component";
import { ServicesComponent } from "./services/services.component";
import { CommonModule } from "@angular/common";
import { LandingpageRoutingModule } from "./landingpage-routing.module";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { CareersComponent } from "./careers/careers.component";


@NgModule({
  declarations: [
    LandingpageComponent,
    AboutusComponent,
    ContactusComponent,
    HelpcenterComponent,
    HomeComponent,
    ServicesComponent,
    CareersComponent
  ],

  imports: [
    CommonModule,
    LandingpageRoutingModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [LandingpageComponent]
})
export class LandingpageModule { }