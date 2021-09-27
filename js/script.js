import { content, footer, header } from "./rows.js";
import { users_data } from "../data/users.js";
import { data } from "../data/data.js";
import { products_data } from "../data/products_data.js";

webix.ready(function () {
  webix.protoUI(
    {
      name: "editlist"
    },
    webix.EditAbility,
    webix.ui.list
  );
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

  $$("Products").parse(webix.copy(products_data));
  $$("form").bind($$("datatable"));
  $$("users_chart").sync($$("users_list"), function () {
    $$("users_chart").group({
      by: "country",
      map: { count: ["country", "count"] }
    });
  });

  $$("datatable").registerFilter(
    $$("dashboard_tabbar"),
    {
      columnId: "year",
      compare: function (value, filter, item) {
        if (filter === "all") {
          return value;
        } else if (filter === "old") {
          return value <= 1990;
        } else if (filter === "modern") {
          return value > 1990;
        } else if (filter === "new") {
          return value >= 2010;
        }
      }
    },

    {
      getValue: function (view) {
        return view.getValue();
      }
    },
    {
      setValue: function (view, value) {
        view.setValue(value);
      }
    }
  );
});
