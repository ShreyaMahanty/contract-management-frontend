import { useEffect, useState } from "react";
import { lifecycle } from "../utils/lifecycle";

function Dashboard() {
  const [contracts, setContracts] = useState([]);
  const [filter, setFilter] = useState("All");

  // 🔹 Load contracts from localStorage on page load
  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("contracts")) || [];
    setContracts(stored);
  }, []);

  // 🔹 Update contract status with lifecycle control
  function updateStatus(id, newStatus) {
    const updatedContracts = contracts.map((contract) =>
      contract.id === id
        ? { ...contract, status: newStatus }
        : contract
    );

    setContracts(updatedContracts);
    localStorage.setItem(
      "contracts",
      JSON.stringify(updatedContracts)
    );
  }

  // 🔹 Filter contracts based on dropdown
  function getFilteredContracts() {
    if (filter === "All") return contracts;
    return contracts.filter(
      (contract) => contract.status === filter
    );
  }

  return (
    <div>
      <h2>Contract Dashboard</h2>

      {/* 🔹 Status Filter */}
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Created">Created</option>
        <option value="Approved">Approved</option>
        <option value="Sent">Sent</option>
        <option value="Signed">Signed</option>
        <option value="Locked">Locked</option>
        <option value="Revoked">Revoked</option>
      </select>

      <br /><br />

      {/* 🔹 Contracts Table */}
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Contract Name</th>
            <th>Blueprint</th>
            <th>Status</th>
            <th>Created Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {getFilteredContracts().length === 0 ? (
            <tr>
              <td colSpan="5" align="center">
                No contracts found
              </td>
            </tr>
          ) : (
            getFilteredContracts().map((contract) => (
              <tr key={contract.id}>
                <td>{contract.name}</td>
                <td>{contract.blueprint}</td>

                {/* 🔹 Status Badge */}
                <td>
                  <span
                    className={`status ${contract.status.toLowerCase()}`}
                  >
                    {contract.status}
                  </span>
                </td>

                <td>{contract.createdAt}</td>

                {/* 🔹 Action Buttons */}
                <td>
                  {lifecycle[contract.status].length === 0 ? (
                    <span>No actions</span>
                  ) : (
                    lifecycle[contract.status].map((action) => (
                      <button
                        key={action}
                        onClick={() =>
                          updateStatus(contract.id, action)
                        }
                      >
                        {action}
                      </button>
                    ))
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
