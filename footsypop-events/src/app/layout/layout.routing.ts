import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout.component";
// import { AuthGuard } from '../pages/login/auth-guard.service';


const LAYOUT_ROUTES: Routes = [
	{
		path: "",
		component: LayoutComponent,
		children: [


			{ path: "", redirectTo: "home", pathMatch: "full", },

      {
        path: "home",
        loadChildren: "../pages/home/home.module#HomeModule"
      },
			{
				path: "about",
				loadChildren: "../pages/requirements/requirements.module#RequirementsModule"
			},
			{
				path: "service",
				loadChildren: "../pages/requirements/create-job/create-job.module#CreateJobModule"
			},
      {
				path: "gallery",
				loadChildren: "../pages/requirements/create-jd/create-jd.module#CreateJdModule"
			},
			{
				path: "contact",
				loadChildren: "../pages/requirements/req-details/req-details.module#ReqDetailsModule"
			}
		]
	},

	// 404 Page Not Found
	{ path: "**", redirectTo: "" }
];

export const LayoutRoutingModule = RouterModule.forChild(LAYOUT_ROUTES);

