/* eslint-disable import/no-anonymous-default-export */
module.exports = function (plop) {
    // create your generators here
    plop.setGenerator("ui", {
      description: "An Ui component",
      prompts: [
        {
          type: "input",
          name: "name",
          message: "Name: ",
        },
        {
          type: "input",
          name: "atomic",
          message: "Atomic classification: ",
        },
      ],
      actions: [
        {
          type: "addMany",
          destination: "src/components/ui/{{atomic}}/{{name}}",
          base: "folder-template",
          templateFiles: "folder-template/*.hbs",
        },
      ],
    });
  
    plop.setGenerator("common", {
      description: "Common component",
      prompts: [
        {
          type: "input",
          name: "name",
          message: "Name: ",
        },
      ],
      actions: [
        {
          type: "addMany",
          destination: "src/components/common/{{name}}",
          base: "folder-template",
          templateFiles: "folder-template/*.hbs",
        },
      ],
    });
  
  };