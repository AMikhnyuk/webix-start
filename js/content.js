import { small_film_set } from "./data.js";

export let list = {
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
      cols: [
        {},
        {
          view: "template",
          template: '<i class="webix_icon wxi-check"></i><span>Connected</span>',
          autoheight: true,
          minWidth: 130,
          css: "status",
          borderless: true
        },
        {}
      ]
    }
  ],
  gravity: 20,
  css: "list",
  minWidth: 150
};
export let datataTable = {
  view: "datatable",
  data: small_film_set,
  autoConfig: true,
  gravity: 50,
  scrollX: false
};
export let form = {
  rows: [
    { view: "template", template: "EDIT FILMS", type: "section" },
    {
      view: "form",
      elements: [
        { view: "text", label: "Title", width: 250 },
        { view: "text", label: "Year", width: 250 },
        { view: "text", label: "Rating", width: 250 },
        { view: "text", label: "Votes", width: 250 }
      ],
      borderless: true
    },
    {
      cols: [
        { view: "button", value: "Add new", align: "right", css: "webix_primary" },
        { view: "button", value: "Clear", align: "right" }
      ],
      margin: 10,
      paddingX: 15,
      borderless: true
    },
    {}
  ],
  gravity: 30,
  paddingY: 21
};
