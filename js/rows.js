import { dashboard } from "./dashboard.js";
import { users } from "./users.js";
import { products } from "./products.js";
import { admin } from "./admin.js";

export const header = {
  view: "toolbar",
  id: "toolbar",
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
      css: "header_button webix_transparent",
      id: "profile_button",
      click: function () {
        $$("profile_sub-menu").show(this.getNode());
      }
    }
  ],
  height: 50,
  paddingX: 10,
  css: "header"
};

export const content = {
  cols: [
    {
      rows: [
        {
          view: "list",
          id: "list",
          data: ["Dashboard", "Users", "Products", "Admin"],
          scroll: false,
          borderless: true,
          css: "list_items",
          select: true,
          on: {
            onAfterSelect: function (id) {
              $$(id).show();
            }
          }
        },
        {},
        {
          view: "template",
          template: '<i class="webix_icon wxi-check"></i><span>Connected</span>',
          autoheight: true,
          minWidth: 130,
          css: "status",
          borderless: true
        }
      ],
      css: "list"
    },
    { view: "resizer" },
    {
      cells: [dashboard, users, products, admin],
      gravity: 6
    }
  ]
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
