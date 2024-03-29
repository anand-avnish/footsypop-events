import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
	// { path: "", loadChildren: "src/app/layout/layout.module#LayoutModule" }
	{ path: "", loadChildren: () => import('src/app/layout/layout.module').then(m => m.LayoutModule) }
];
@NgModule({
	imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
	exports: [RouterModule]
})

export class AppRoutingModule {}

