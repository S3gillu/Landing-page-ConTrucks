
import { NgModule } from "@angular/core";
import { SharedComponent } from "./shared.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from "@angular/common";
import { SharedRoutingModule } from "./shared-routing.module";
import { RouterModule } from "@angular/router";
import { LandingpageModule } from "../landingpage/landingpage.module";



@NgModule({
    declarations:[
     SharedComponent,
     HeaderComponent,
     FooterComponent
    ],

    imports:[
      CommonModule,
      SharedRoutingModule,
      RouterModule,
      LandingpageModule 
    ],
    providers:[]
})

export class SharedModule {}