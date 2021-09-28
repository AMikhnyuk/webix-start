import { getRandomInt } from "./useful_functons.js";
import { country_list } from "../data/countries.js";

const users_chart = {
  view: "chart",
  id: "users_chart",
  type: "bar",
  value: "#count#",
  xAxis: {
    title: "Country",
    template: "#country#"
  },
  yAxis: {
    start: 0,
    end: 10,
    step: 2
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
                return obj.name.toLowerCase().indexOf(text) !== -1;
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
        },
        {
          view: "button",
          value: "Add",
          css: "webix_primary",
          id: "add_actor",
          click: function () {
            let randomCoutry = getRandomInt(1, 9);
            let actorAge = getRandomInt(1, 100);
            let actorCountry = webix.copy(country_list).find(function (elem) {
              return elem.id === randomCoutry;
            });

            $$("users_list").add({
              name: "Red Rum",
              age: actorAge,
              country: actorCountry.value
            });
          }
        }
      ],
      padding: 5,
      elementsConfig: {
        rightPadding: 5
      }
    },
    {
      view: "editlist",
      template: function (obj) {
        return `<span class="users_list_item">${obj.name} from ${obj.country}<span><span class="removeListItem"><i class="webix_icon wxi-close"></i></span>`;
      },
      id: "users_list",
      css: "users_list",
      editable: true,
      editor: "text",
      editValue: "name",
      onClick: {
        removeListItem: function (e, id) {
          this.remove(id);
          return false;
        }
      },
      scheme: {
        $change: function (obj) {
          if (obj.age < 26) {
            obj.$css = "hightlight";
          }
        }
      },
      rules: {
        name: webix.rules.isNotEmpty
      }
    }
  ]
};
export const users = {
  rows: [users_list, users_chart],
  id: "Users"
};
