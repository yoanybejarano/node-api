define({ "api": [
  {
    "type": "delete",
    "url": "/categories/:id",
    "title": "Remove a category",
    "group": "Categories",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Category id</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Task not found error",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Delete error",
          "content": "HTTP/1.1 412 Precondition Failed",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/categories.routes.js",
    "groupTitle": "Categories",
    "name": "DeleteCategoriesId"
  },
  {
    "type": "get",
    "url": "/categories",
    "title": "List the categories",
    "group": "Categories",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "categories",
            "description": "<p>Category list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "categories.CategoryID",
            "description": "<p>Category id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categories.CategoryName",
            "description": "<p>Category name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categories.Description",
            "description": "<p>Category description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categories.Picture",
            "description": "<p>Category picture</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categories.field4",
            "description": "<p>Category field4</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categories.field5",
            "description": "<p>Category field5</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categories.field6",
            "description": "<p>Category field6</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categories.field7",
            "description": "<p>Category field7</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP/1.1 200 OK\n [{           \n   \"_id\" : ObjectId(\"5b804d0060012aa55de58eb3\"),\n   \"CategoryID\" : 1,\n   \"CategoryName\" : \"Beverages\",\n   \"Description\" : \"Soft drinks\",\n   \"Picture\" : \"coffees\",\n   \"field4\" : \"teas\",\n   \"field5\" : \"beers\",\n   \"field6\" : \"and ales\"\n }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "\nHTTP/1.1 412 Precondition Failed",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/categories.routes.js",
    "groupTitle": "Categories",
    "name": "GetCategories"
  },
  {
    "type": "get",
    "url": "/categories/:id",
    "title": "Get a category",
    "group": "Categories",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Category id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "categories.CategoryID",
            "description": "<p>Category id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categories.CategoryName",
            "description": "<p>Category name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categories.Description",
            "description": "<p>Category description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categories.Picture",
            "description": "<p>Category picture</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categories.field4",
            "description": "<p>Category field4</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categories.field5",
            "description": "<p>Category field5</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categories.field6",
            "description": "<p>Category field6</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categories.field7",
            "description": "<p>Category field7</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "\nHTTP/1.1 200 OK\n [{\n   \"_id\" : ObjectId(\"5b804d0060012aa55de58eb3\"),\n   \"CategoryID\" : 1,\n   \"CategoryName\" : \"Beverages\",\n   \"Description\" : \"Soft drinks\",\n   \"Picture\" : \"coffees\",\n   \"field4\" : \"teas\",\n   \"field5\" : \"beers\",\n   \"field6\" : \"and ales\"\n }]",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Task not found error",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 412 Precondition Failed",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/categories.routes.js",
    "groupTitle": "Categories",
    "name": "GetCategoriesId"
  },
  {
    "type": "post",
    "url": "/categories",
    "title": "Register new category",
    "group": "Categories",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Category id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "CategoryID",
            "description": "<p>Category id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "CategoryName",
            "description": "<p>Category name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": "<p>Category description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Picture",
            "description": "<p>Category picture</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "field4",
            "description": "<p>Category field4</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "field5",
            "description": "<p>Category field5</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "field6",
            "description": "<p>Category field6</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "field7",
            "description": "<p>Category field7</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP/1.1 200 OK\n [{\n   \"_id\" : ObjectId(\"5b804d0060012aa55de58eb3\"),\n   \"CategoryID\" : 1,\n   \"CategoryName\" : \"Beverages\",\n   \"Description\" : \"Soft drinks\",\n   \"Picture\" : \"coffees\",\n   \"field4\" : \"teas\",\n   \"field5\" : \"beers\",\n   \"field6\" : \"and ales\"\n }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "\nHTTP/1.1 412 Precondition Failed",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/categories.routes.js",
    "groupTitle": "Categories",
    "name": "PostCategories"
  },
  {
    "type": "put",
    "url": "/categories/:id",
    "title": "Update a category",
    "group": "Categories",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "categories",
            "description": "<p>Category list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "categories.CategoryID",
            "description": "<p>Category id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categories.CategoryName",
            "description": "<p>Category name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categories.Description",
            "description": "<p>Category description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categories.Picture",
            "description": "<p>Category picture</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categories.field4",
            "description": "<p>Category field4</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categories.field5",
            "description": "<p>Category field5</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categories.field6",
            "description": "<p>Category field6</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categories.field7",
            "description": "<p>Category field7</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP/1.1 200 OK\n [{\n   \"_id\" : ObjectId(\"5b804d0060012aa55de58eb3\"),\n   \"CategoryID\" : 1,\n   \"CategoryName\" : \"Beverages\",\n   \"Description\" : \"Soft drinks\",\n   \"Picture\" : \"coffees\",\n   \"field4\" : \"teas\",\n   \"field5\" : \"beers\",\n   \"field6\" : \"and ales\"\n }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Task not found error",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 412 Precondition Failed",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/categories.routes.js",
    "groupTitle": "Categories",
    "name": "PutCategoriesId"
  },
  {
    "type": "get",
    "url": "/",
    "title": "API Status",
    "group": "Status",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>API Status' message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\"status\": \"NTask API\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Status",
    "name": "Get"
  }
] });
