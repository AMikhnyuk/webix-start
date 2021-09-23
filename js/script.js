import { content, footer, header } from "./rows.js";

webix.ready(function () {
  webix.ui({
    rows: [header, content, footer]
  });
});
