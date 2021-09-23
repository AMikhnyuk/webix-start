import { small_film_set } from "./data.js";

export const list = {
  rows: [
    {
      view: "list",
      data: ["Dashboard", "Users", "Products", "Location"],
      scroll: false,
      borderless: true,
      css: "list_items"
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
  gravity: 20,
  css: "list",
  minWidth: 150
};
export const datataTable = {
  view: "datatable",
  data: small_film_set,
  autoConfig: true,
  gravity: 50,
  scrollX: false
};
export const form = {
  view: "form",
  elements: [
    { view: "template", template: "edit films", type: "section" },
    { view: "text", label: "Title", width: 250 },
    { view: "text", label: "Year", width: 250 },
    { view: "text", label: "Rating", width: 250 },
    { view: "text", label: "Votes", width: 250 },
    {
      cols: [
        { view: "button", value: "Add new", css: "webix_primary" },
        { view: "button", value: "Clear" }
      ],
      borderless: true
    },
    {}
  ]
};
