import { list, datataTable, form } from "./content.js";

export const header = {
  view: "toolbar",
  elements: [
    {
      view: "label",
      label: "My App",
      css: "header_label"
    },
    {
      view: "button",
      label: "Profile",
      width: 100,
      align: "right",
      type: "icon",
      image: "./img/user.png",
      icon: "wxi-user",
      css: "header_button webix_transparent"
    }
  ],
  height: 50,
  paddingX: 10,
  css: "header"
};

export const content = {
  cols: [list, { view: "resizer" }, datataTable, form]
};

export const footer = {
  cols: [
    {},
    {
      view: "template",
      template:
        'The software is provided by <a href="https://webix.com">https://webix.com</a>. All rights reserved (c)',
      autoheight: true,
      minWidth: 500,
      borderless: true
    },
    {}
  ]
};
