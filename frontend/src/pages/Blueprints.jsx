import { useState } from "react";

function Blueprints() {
  const [blueprintName, setBlueprintName] = useState("");
  const [fields, setFields] = useState([]);

  // 🔹 Field add karne ka function
  function addField() {
    setFields([...fields, { type: "text", label: "New Field" }]);
  }

  // 🔹 STEP 8: YAHI blueprint save hoga
  function saveBlueprint() {
    const blueprint = {
      name: blueprintName,
      fields: fields,
    };

    // localStorage me save
    localStorage.setItem("blueprint", JSON.stringify(blueprint));

    alert("Blueprint saved successfully!");
  }

  return (
    <div>
      <h2>Create Blueprint</h2>

      <input
        type="text"
        placeholder="Blueprint Name"
        value={blueprintName}
        onChange={(e) => setBlueprintName(e.target.value)}
      />

      <br /><br />

      <button onClick={addField}>Add Text Field</button>

      <ul>
        {fields.map((field, index) => (
          <li key={index}>{field.label}</li>
        ))}
      </ul>

      {/* 🔹 SAVE BUTTON */}
      <button onClick={saveBlueprint}>Save Blueprint</button>
    </div>
  );
}

export default Blueprints;
