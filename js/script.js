import { content, footer, header } from "./rows.js";
import { data } from "../data/data.js";
import { products_data } from "../data/products_data.js";
import { categoryCollection } from "../js/admin.js";
import { usersCollection } from "../js/users.js";

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
  //$$("users_list").parse(webix.copy(users_data));

  $$("Products").parse(webix.copy(products_data));
  $$("form").bind($$("datatable"));
  $$("users_list").sync(usersCollection, function () {
    const users_list = $$("users_list");
    const users = users_list.serialize();
    users.forEach((elem) => {
      if (elem.age < 26) {
        users_list.addCss(elem.id, "hightlight");
      }
    });
  });
  $$("users_chart").sync(usersCollection, function () {
    $$("users_chart").group({
      by: "country",
      map: { count: ["country", "count"] }
    });
    $$("users_chart").sort("#country#");
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

  $$("admin_datatable").sync(categoryCollection);
  $$("admin_form").bind($$("admin_datatable"));
});
