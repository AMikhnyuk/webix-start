import { content, footer, header } from "./rows.js";
import { users_data } from "../data/users.js";
import { data } from "../data/data.js";
import { products_data } from "../data/products_data.js";

webix.ready(function () {
  webix.ui({
    rows: [header, content, footer]
  });
  webix.ui({
    view: "popup",
    id: "profile_sub-menu",
    body: {
      view: "list",
      data: ["Settings", "Log Out"],
      autoheight: true
    }
  });
  $$("list").select("Dashboard");
  $$("datatable").parse(webix.copy(data));
  $$("users_list").parse(webix.copy(users_data));
  $$("users_chart").parse(webix.copy(users_data));
  $$("Products").parse(webix.copy(products_data));
});
