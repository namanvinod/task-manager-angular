import { NgModule } from '@angular/core'
import { Routes, Router, RouterModule } from '@angular/router'

import { HomeComponent } from './modules/home/home.component'

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'task',
        loadChildren: () => import('./modules/task/task.module').then(m => m.TaskModule)
    },
    {
        path: 'user',
        loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
    },
    {
        path: '',
        component: HomeComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }