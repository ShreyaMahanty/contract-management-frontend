import { useState } from "react";

function CreateContract() {
  const blueprint = JSON.parse(localStorage.getItem("blueprint"));
  const [values, setValues] = useState({});

  function createContract() {
    if (!blueprint?.name) {
      alert("Invalid blueprint");
      return;
    }

    const newContract = {
      id: Date.now(),
      name: blueprint.name + " Contract",
      blueprint: blueprint.name,
      status: "Created",
      createdAt: new Date().toISOString().slice(0, 10),
      fields: values,
    };

    const existing =
      JSON.parse(localStorage.getItem("contracts")) || [];

    // 🔒 Prevent empty / duplicate contracts
    const validContracts = existing.filter(
      (c) => c.name && c.blueprint
    );

    localStorage.setItem(
      "contracts",
      JSON.stringify([...validContracts, newContract])
    );

    alert("Contract created successfully!");
  }

  return (
    <div>
      <h2>Create Contract</h2>

      {!blueprint && (
        <p style={{ color: "red" }}>
          Please create a blueprint first.
        </p>
      )}

      {blueprint && (
        <>
          <h4>{blueprint.name}</h4>

          {blueprint.fields.map((f, i) => (
            <div key={i}>
              <label>{f.label}</label>

              {f.type === "checkbox" ? (
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setValues({
                      ...values,
                      [f.label]: e.target.checked,
                    })
                  }
                />
              ) : (
                <input
                  type={f.type}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      [f.label]: e.target.value,
                    })
                  }
                />
              )}
            </div>
          ))}

          <br />

          <button onClick={createContract}>
            Create Contract
          </button>
        </>
      )}
    </div>
  );
}

export default CreateContract;
