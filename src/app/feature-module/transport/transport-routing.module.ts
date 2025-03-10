import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TransportComponent } from "./transport.component";
import { TransportMainComponent } from "./transport-main/transport-main.component";
import { TransportAddComponent } from "./transport-add/transport-add.component";
import { TransportEditComponent } from "./transport-edit/transport-edit.component";

const routes: Routes = [
  {
    path: "",
    component: TransportComponent,
    children: [
      { path: "transport-main", component: TransportMainComponent },
      { path: "transport-add", component: TransportAddComponent },
      { path: "transport-edit", component: TransportEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransportRoutingModule {}
