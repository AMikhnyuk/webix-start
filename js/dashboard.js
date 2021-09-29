import { getRandomInt } from "./useful_functons.js";
import { categoryCollection } from "./collections.js";
const dashboard_tabbar = {
  view: "tabbar",
  id: "dashboard_tabbar",
  value: "all",
  options: [
    {
      id: "all",
      value: "All"
    },
    {
      id: "old",
      value: "Old"
    },
    { id: "modern", value: "Modern" },
    { id: "new", value: "New" }
  ],
  on: {
    onAfterTabClick: function () {
      $$("datatable").filterByAll();
    }
  }
};
const dashboard_datataTable = {
  view: "datatable",
  id: "datatable",
  select: true,
  columns: [
    {
      id: "id",
      header: { text: "", css: "column_border" },
      width: 50,
      css: { background: "#F4F5F9", "border-right": "1px solid #DADEE0" }
    },
    { id: "title", fillspace: true, header: ["Film Title", { content: "textFilter" }], sort: "string" },
    {
      id: "categoryId",
      header: ["Category", { content: "selectFilter" }],
      collection: categoryCollection
    },
    { id: "rating", header: ["Rating", { content: "textFilter" }], width: 100, sort: "int" },
    { id: "votes", header: ["Votes", { content: "textFilter" }], width: 100, sort: "string" },
    { id: "year", header: "Year", width: 70 },
    {
      id: "empty",
      header: "",
      width: 50,
      template: '<span class="removeItem"><i class="webix_icon wxi-trash removeIcon"></i></span>'
    }
  ],
  onClick: {
    removeItem: function (e, id) {
      if ($$("form").getValues().id === id.row) {
        $$("form").clear();
        $$("form").clearValidation();
      }
      this.remove(id);

      return false;
    }
  },
  on: {
    onAfterSelect: function () {
      $$("form").clearValidation();
    }
  },
  scheme: {
    $init: function (obj) {
      if (!obj.categoryId) {
        obj.categoryId = getRandomInt(1, 5);
      }
    }
  },
  hover: "datatable_row_hover",
  gravity: 50
};
const dashboard_form = {
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
      view: "richselect",
      name: "categoryId",
      label: "Category",
      options: categoryCollection
    },
    {
      cols: [
        {
          view: "button",
          value: "Save",
          css: "webix_primary",
          id: "form_button_add",
          click: function () {
            const form = $$("form");
            if (form.validate()) {
              form.save();
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
                $$("datatable").unselectAll();
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
      let newValue = value.replace(",", ".");
      return newValue < 100000;
    }
  },

  elementsConfig: {
    bottomPadding: 18
  }
};
export const dashboard = {
  cols: [{ rows: [dashboard_tabbar, dashboard_datataTable] }, dashboard_form],
  id: "Dashboard"
};
