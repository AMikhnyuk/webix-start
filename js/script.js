import { content, footer, header } from "./rows.js";

webix.ready(function () {
  webix.ui({
    rows: [header, content, footer]
  });
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
