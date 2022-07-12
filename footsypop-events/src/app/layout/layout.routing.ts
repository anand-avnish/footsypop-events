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
			},
			{
				path: "trekking",
				loadChildren: () => import('src/app/pages/events/trekking/trekking.module').then(m => m.TrekkingModule)
			},
      {
        path: "404",
				loadChildren: () => import('src/app/pages/not-found/not-found.module').then(m => m.NotFoundModule)
			},
		]
	},

	// 404 Page Not Found
	{ path: "**", redirectTo: '404' }
];

export const LayoutRoutingModule = RouterModule.forChild(LAYOUT_ROUTES);

