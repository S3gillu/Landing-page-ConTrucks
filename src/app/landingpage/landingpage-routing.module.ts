import { NgModule } from "@angular/core";
import { Router, Route, Routes, RouterModule } from "@angular/router";
import { LandingpageComponent } from "./landingpage.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { HelpcenterComponent } from "./helpcenter/helpcenter.component";
import { HomeComponent } from "./home/home.component";
import { ServicesComponent } from "./services/services.component";
import { CareersComponent } from "./careers/careers.component";

const routes: Routes = [
    {
        path: '',
        component: LandingpageComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent },
            { path: 'aboutus', component: AboutusComponent },
            { path: 'contactus', component: ContactusComponent },
            { path: 'helpcenter', component: HelpcenterComponent },
            { path: 'services', component: ServicesComponent },
            { path: 'careers', component: CareersComponent },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class LandingpageRoutingModule {

}