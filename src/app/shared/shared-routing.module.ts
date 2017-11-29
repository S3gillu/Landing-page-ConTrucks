import { NgModule } from "@angular/core";
import { RouterModule, Routes ,Router, Route,} from "@angular/router";
import { SharedComponent } from "./shared.component";



const routes: Routes = [
    {
        path: '',
        component: SharedComponent,
        children: [
            // { path: 'header', component: HeaderComponent },
            // { path: 'footer', component: FooterComponent },
            { 
            path: 'landingpage',
            loadChildren: '../landingpage/landingpage.module#LandingpageModule'
            }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SharedRoutingModule { }