import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"

import { NavbarComponent } from "./components/navbar/navbar.component"
import { AppShellComponent } from "./components/app-shell/app-shell.component"

@NgModule({
    imports: [
        RouterModule
    ],
    declarations: [
        NavbarComponent,
        AppShellComponent
    ],
    exports: [
        NavbarComponent,
        AppShellComponent
    ]
})
export class AppCoreModule {

}