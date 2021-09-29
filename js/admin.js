import { categoryCollection } from "./collections.js";

const admin_datatable = {
  view: "datatable",
  id: "admin_datatable",
  columns: [
    { id: "id", header: "Id", width: 150 },
    { id: "value", header: "Category", fillspace: true }
  ],
  select: true,
  gravity: 2
};

const admin_form = {
  view: "form",
  id: "admin_form",
  elements: [
    { view: "template", template: "Add/Edit Category", type: "header" },
    { view: "text", label: "Category name", name: "value", labelPosition: "top" },
    {
      cols: [
        {
          view: "button",
          value: "Save",
          css: "webix_primary",
          click: function () {
            const form = this.getFormView();
            const formValues = form.getValues();
            if (formValues.id) {
              categoryCollection.updateItem(formValues.id, formValues);
            } else {
              categoryCollection.add(formValues);
            }
            form.clear();
            $$("admin_datatable").unselectAll();
          }
        },
        {
          view: "button",
          value: "Delete",
          css: "webix_primary",
          click: function () {
            const table = $$("admin_datatable");
            const form = this.getFormView();
            if (form.getValues().id) {
              categoryCollection.remove(table.getSelectedId());
              form.clear();
              table.unselectAll();
            }
          }
        }
      ]
    },
    {}
  ],
  borderless: true
};

export const admin = {
  id: "Admin",
  cols: [admin_datatable, admin_form]
};
