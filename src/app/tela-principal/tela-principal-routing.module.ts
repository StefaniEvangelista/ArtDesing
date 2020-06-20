import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaPrincipalComponent } from './tela-principal.component';

const routes: Routes = [
    {
        path: 'tela-principal',
        component: TelaPrincipalComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AnoLetivoRoutingModule { }
