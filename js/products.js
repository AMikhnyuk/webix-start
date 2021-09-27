export const products = {
  view: "treetable",
  columns: [
    {
      id: "id",
      header: "",
      width: 50
    },
    { id: "title", header: "Title", template: "{common.treetable()} #title#", fillspace: true, editor: "text" },
    { id: "price", header: "Price", width: 300, editor: "text" }
  ],
  select: "cell",
  id: "Products",
  editable: true,
  ready: function () {
    this.openAll();
  },
  rules: {
    title: webix.rules.isNotEmpty,
    price: function (value) {
      return value !== "0";
    }
  }
};
