import { useState } from "react";

function Blueprints() {
  const [blueprintName, setBlueprintName] = useState("");
  const [fields, setFields] = useState([]);

  function addField(type) {
    setFields([
      ...fields,
      {
        type,
        label: `${type} Field`,
      },
    ]);
  }

  function updateLabel(index, value) {
    const updated = [...fields];
    updated[index].label = value;
    setFields(updated);
  }

  function saveBlueprint() {
    const blueprint = {
      name: blueprintName,
      fields,
    };
    localStorage.setItem("blueprint", JSON.stringify(blueprint));
    alert("Blueprint saved successfully!");
  }

  return (
    <div>
      <h2>Create Blueprint</h2>

      <input
        placeholder="Blueprint Name"
        value={blueprintName}
        onChange={(e) => setBlueprintName(e.target.value)}
      />

      <br /><br />

      <button onClick={() => addField("text")}>Add Text</button>
      <button onClick={() => addField("date")}>Add Date</button>
      <button onClick={() => addField("checkbox")}>Add Checkbox</button>

      <ul>
        {fields.map((field, index) => (
          <li key={index}>
            <strong>{field.type}</strong>{" "}
            <input
              value={field.label}
              onChange={(e) => updateLabel(index, e.target.value)}
            />
          </li>
        ))}
      </ul>

      <button onClick={saveBlueprint}>Save Blueprint</button>
    </div>
  );
}

export default Blueprints;
