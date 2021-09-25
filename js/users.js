const users_chart = {
  view: "chart",
  id: "users_chart",
  type: "bar",
  value: "#age#",
  xAxis: {
    template: "#age#"
  }
};
const users_list = {
  rows: [
    {
      view: "toolbar",
      elements: [
        {
          view: "text",
          id: "users_list_filter",
          on: {
            onTimedKeypress: function () {
              let text = this.getValue().toLowerCase();
              $$("users_list").filter(function (obj) {
                return obj.name.toLowerCase().indexOf(text) != -1;
              });
            }
          },
          gravity: 4,
          margin: 20
        },
        {
          view: "button",
          value: "Sort asc",
          css: "webix_primary",
          id: "sort_asc_btn",
          click: function () {
            $$("users_list").sort("name", "asc");
          }
        },
        {
          view: "button",
          value: "Sort desc",
          css: "webix_primary",
          id: "sort_desc_btn",
          click: function () {
            $$("users_list").sort("name", "desc");
          }
        }
      ],
      padding: 5,
      elementsConfig: {
        rightPadding: 5
      }
    },
    {
      view: "list",
      template: function (obj) {
        return `<span class="users_list_item">${obj.name} from ${obj.country}<span><span class="removeListItem"><i class="webix_icon wxi-close"></i></span>`;
      },
      id: "users_list",
      css: "webix_data_border",
      onClick: {
        removeListItem: function (e, id) {
          this.remove(id);
          return false;
        }
      },
      on: {
        onAfterRender: function (e, id) {
          this.clearCss("hightlite");
          for (let i of this.data.order.slice(0, 5)) {
            this.addCss(i, "hightlite");
          }
        },
        onAfterDelete: function (e, id) {
          this.clearCss("hightlite");
          for (let i of this.data.order.slice(0, 5)) {
            this.addCss(i, "hightlite");
          }
        }
      }
    }
  ]
};
export const users = {
  rows: [users_list, users_chart],
  id: "Users"
};
