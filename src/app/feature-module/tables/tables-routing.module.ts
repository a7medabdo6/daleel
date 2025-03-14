import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TablesComponent } from "./tables.component";
import { BasicTablesComponent } from "./basic-tables/basic-tables.component";
import { DataTablesComponent } from "./data-tables/data-tables.component";

const routes: Routes = [
  {
    path: "",
    component: TablesComponent,
    children: [
      { path: "basictables", component: BasicTablesComponent },
      { path: "datatables", component: DataTablesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule {}
