export const lifecycle = {
  Created: ["Approved", "Revoked"],
  Approved: ["Sent"],
  Sent: ["Signed", "Revoked"],
  Signed: ["Locked"],
  Locked: [],
  Revoked: [],
};
