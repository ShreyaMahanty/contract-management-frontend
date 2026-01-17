import { useState } from "react";
import { lifecycle } from "../utils/lifecycle";

function Dashboard() {
  const [contracts, setContracts] = useState([
    {
      id: 1,
      name: "Offer Letter - Shreya",
      blueprint: "Offer Letter",
      status: "Created",
      createdAt: "2026-01-15",
    },
    {
      id: 2,
      name: "NDA - Vendor",
      blueprint: "NDA",
      status: "Revoked",
      createdAt: "2026-01-10",
    },
  ]);

  const [filter, setFilter] = useState("All");

  function updateStatus(id, newStatus) {
    setContracts(
      contracts.map((contract) =>
        contract.id === id
          ? { ...contract, status: newStatus }
          : contract
      )
    );
  }

  function getFilteredContracts() {
    if (filter === "All") return contracts;
    return contracts.filter(
      (contract) => contract.status === filter
    );
  }

  return (
    <div>
      <h2>Contract Dashboard</h2>

      {/* Filter */}
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

      {/* Table */}
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
          {getFilteredContracts().map((contract) => (
            <tr key={contract.id}>
              <td>{contract.name}</td>
              <td>{contract.blueprint}</td>

              {/* 🔹 STATUS IN BOLD */}
              <td>
                <strong>{contract.status}</strong>
              </td>

              <td>{contract.createdAt}</td>

              {/* 🔹 ACTIONS */}
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
                      style={{ marginRight: "8px" }}
                    >
                      {action}
                    </button>
                  ))
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
