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
  id: "datatable",
  data: small_film_set,
  autoConfig: true,
  gravity: 50,
  scrollX: false
};
export const form = {
  view: "form",
  id: "form",
  elements: [
    { view: "template", template: "edit films", type: "section" },
    { view: "text", label: "Title", name: "title", width: 350, invalidMessage: "Title is not be empty" },
    {
      view: "text",
      label: "Year",
      name: "year",
      width: 350,
      invalidMessage: "Should be between 1970 and current"
    },
    { view: "text", label: "Rating", name: "rating", width: 350, invalidMessage: "Rating cannot be empty or 0" },
    { view: "text", label: "Votes", name: "votes", width: 350, invalidMessage: "Votes should be less than 100000" },
    {
      cols: [
        {
          view: "button",
          value: "Add new",
          css: "webix_primary",
          id: "form_button_add",
          click: function () {
            if ($$("form").validate()) {
              $$("datatable").add($$("form").getValues());
              webix.message({ text: "validation is successful.", type: "success" });
            }
          }
        },
        {
          view: "button",
          value: "Clear",
          id: "form_button_clear",
          click: function () {
            webix
              .confirm({
                title: "do you want to clear?",
                text: "data will not be saved"
              })
              .then(function () {
                $$("form").clear();
                $$("form").clearValidation();
              });
          }
        }
      ],
      borderless: true
    },
    {}
  ],
  rules: {
    title: webix.rules.isNotEmpty,
    year: function (value) {
      return value >= 1970 && value <= new Date().getFullYear();
    },
    rating: function (value) {
      return +value !== 0 && webix.rules.isNotEmpty(value);
    },
    votes: function (value) {
      return value < 100000;
    }
  },
  elementsConfig: {
    bottomPadding: 18
  }
};
