export default [
  {
    "id":1,
    "title":"Dashboard",
    "menu_id":0,
    "path":"dashboard",
    "sort":1,
    "icon": "dashboard.svg",
    "children_menus":[]
  }, {
    "id":4,
    "title":"Registrar",
    "menu_id":0,
    "path":"#",
    "icon":"printer",
    "sort":1,
    "icon": "",
    "children_menus": [
       {
          "id":5,
          "title":"Users",
          "menu_id":4,
          "path":"users",
          "sort":1,
          "icon": "users.svg",
          "children_menus":[]
       }
    ]
  },{
    "id":8,
    "title":"UI Elements",
    "menu_id":7,
    "path":"ui-elements",
    "sort":1,
    "icon": "categories.svg",
    "children_menus":[]
  }
]
