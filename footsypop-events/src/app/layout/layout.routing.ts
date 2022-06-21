import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout.component";


const LAYOUT_ROUTES: Routes = [
	{
		path: "",
		component: LayoutComponent,
		children: [

			{ path: "", redirectTo: "home", pathMatch: "full", },
			{
				path: "home",
				loadChildren: () => import('src/app/pages/home/home.module').then(m => m.HomeModule)
			},
			{
				path: "about",
				loadChildren: () => import('src/app/pages/about/about.module').then(m => m.AboutModule)
			},
			{
				path: "service",
				loadChildren: () => import('src/app/pages/service/service.module').then(m => m.ServiceModule)
			},
			{
				path: "gallery",
				loadChildren: () => import('src/app/pages/gallery/gallery.module').then(m => m.GallModule)
			},
			{
				path: "contact",
				loadChildren: () => import('src/app/pages/contact/contact.module').then(m => m.ContactModule)
			}
		]
	},

	// 404 Page Not Found
	{ path: "**", redirectTo: "" }
];

export const LayoutRoutingModule = RouterModule.forChild(LAYOUT_ROUTES);

