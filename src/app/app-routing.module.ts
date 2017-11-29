import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingpageComponent } from "./landingpage/landingpage.component";
import { PageNotFountComponent } from "./pagenotfound.component";


const routes: Routes = [
    {
        path: '',
        loadChildren: './shared/shared.module#SharedModule',

    },
   
    {
        path: '**',
        component: PageNotFountComponent

    }
]
@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
