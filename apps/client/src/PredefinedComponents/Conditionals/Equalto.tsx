import { nanoid } from "nanoid";
import React from "react";
import { Parameters } from "../../types/Card";
import { StringDefault } from "../default";

// {
//     "error": {
//         "code": "",
//         "message": ""
//     },
//     "function": {
//         "content": "\n  /*\n    the object should be returned as value of the ouput\n    if ouput has \n    {\n      type: \"string\",\n      value: \"Hello\"\n    }\n\n    then the function should return {\n      Hello: \"Output String\"\n    }\n  */\n  \n(input, parameter) => {\n  return {\n    'out' : input['A'] > input['B']\n  };\n}",
//         "outdated": false,
//         "old": ""
//     },
//     "editable": true,
//     "label": "Heading",
//     "renderer": null,
//     "output": [
//         {
//             "type": "boolean",
//             "value": false,
//             "id": "boolean__output__tYGLILcuEv8v8h9ca5Hu1",
//             "name": "out"
//         }
//     ],
//     "parameters": [],
//     "input": [
//         {
//             "type": "number",
//             "value": 0,
//             "id": "number__input__2iZ0iTgxr8-Z1uqs0BCIo",
//             "name": "A"
//         },
//         {
//             "type": "number",
//             "value": 0,
//             "id": "number__input__Gwe8rJBGWUDIqaWz9ognx",
//             "name": "B"
//         }
//     ],
//     "start": "root__tOKjDbTCR4UXTrl60BIuD",
//     "end": "root__fzZYmGW6dpqD4-w16ulJx"
// }

export const condition_Equalto = () =>
  StringDefault(
    "Equal To",
    "\n  /*\n    the object should be returned as value of the ouput\n    if ouput has \n    {\n      type: \"string\",\n      value: \"Hello\"\n    }\n\n    then the function should return {\n      Hello: \"Output String\"\n    }\n  */\n  \n(input, parameter) => {\n  return {\n    'out' : input['A'] === input['B']\n  };\n}",
    [
      {
        type: Parameters.number,
        value: 0,
        id: `${Parameters.number}__input__${nanoid()}`,
        name: "A",
      },
      {
        type: Parameters.number,
        value: 0,
        id: `${Parameters.number}__input__${nanoid()}`,
        name: "B",
      },
    ],
    [
      {
        type: Parameters.boolean,
        value: false,
        id: `${Parameters.boolean}__output__${nanoid()}`,
        name: "out",
      },
    ],
    [],
    () => (
      <div>
        <p>A{" === "}B</p>
      </div>
    )
  );
