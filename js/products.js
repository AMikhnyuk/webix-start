export const products = {
  view: "treetable",
  prerender: true,
  scroll: "auto",
  columns: [
    { id: "id", header: "", width: 50 },
    { id: "title", header: "Title", template: "{common.treetable()} #title#", fillspace: true },
    { id: "price", header: "Price", width: 300 }
  ],
  select: true,
  id: "Products",
  ready: function () {
    this.openAll();
  }
};
