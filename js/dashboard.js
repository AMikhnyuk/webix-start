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
    { id: "year", header: ["Released", { content: "textFilter" }], width: 150, sort: "int" },
    { id: "votes", header: ["Votes", { content: "textFilter" }], width: 150, sort: "string" },
    {
      id: "empty",
      header: "",
      width: 50,
      template: '<span class="removeItem"><i class="webix_icon wxi-trash removeIcon"></i></span>'
    }
  ],
  onClick: {
    removeItem: function (e, id) {
      if ($$("form").getValues().id) {
        $$("form").clear();
        $$("form").clearValidation();
      }
      this.remove(id);

      return false;
    }
  },
  on: {
    onAfterSelect: function (id) {
      let value = this.getItem(id);
      $$("form").setValues(value);
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
      cols: [
        {
          view: "button",
          value: "Save",
          css: "webix_primary",
          id: "form_button_add",
          click: function () {
            let form = $$("form");
            let table = $$("datatable");
            let item_data = form.getValues();

            if (form.validate()) {
              if (item_data.id) {
                table.updateItem(item_data.id, item_data);
                webix.message({ text: "validation is successful.", type: "success" });
              } else {
                table.add(item_data);
                webix.message({ text: "validation is successful.", type: "success" });
              }
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
      let newValue = value.replace(",", ".");
      return newValue < 100000;
    }
  },
  elementsConfig: {
    bottomPadding: 18
  }
};
export const dashboard = {
  cols: [dashboard_datataTable, dashboard_form],
  id: "Dashboard"
};
