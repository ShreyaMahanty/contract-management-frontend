function CreateContract() {
  const blueprint = JSON.parse(localStorage.getItem("blueprint"));

  return (
    <div>
      <h2>Create Contract</h2>

      {blueprint && (
        <div>
          <h4>{blueprint.name}</h4>
          {blueprint.fields.map((f, i) => (
            <input key={i} placeholder={f.label} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CreateContract;
