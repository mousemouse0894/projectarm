
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", loadChildren: "./pages/home/home.module#HomeModule" },
  { path: "check-w", loadChildren: "./pages/check-w/check-w.module#CheckWModule" },
  { path: "course", loadChildren: "./pages/course/course.module#CourseModule" },
  { path: "data-w", loadChildren: "./pages/data-w/data-w.module#DataWModule" },
  { path: "pass-w", loadChildren: "./pages/pass-w/pass-w.module#PassWModule" },
  { path: "about", loadChildren: "./pages/about/about.module#AboutModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
