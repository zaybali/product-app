"use client";

import { useState } from "react";

export default function MyInfo() {
  const [userName, setUserName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [userId, setUserId] = useState("");

  const handleUserNameChange = (event: any) => {
    setUserName(event.target.value);
  };

  const handleFatherNameChange = (event: any) => {
    setFatherName(event.target.value);
  };

  const handleUserIdChange = (event: any) => {
    setUserId(event.target.value);
  };

  return (
    <div>
      <div className="inputs-row">
        <div className="input-container">
            <label className="label">
                User Name:
                <input
                type="text"
                value={userName}
                onChange={handleUserNameChange}
                />
                </label>
        </div>
        <div className="input-container">
            <label className="label">
                Father's Name:
                <input
                type="text"
                value={fatherName}
                onChange={handleFatherNameChange}
                />
            </label>
        </div>
        <div className="input-container">
            <label className="label">
                User ID:
                <input
                type="text"
                value={userId}
                onChange={handleUserIdChange}
                />
            </label>
        </div>
      </div>

      <table className="my-info-table" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: "10px" }}>
              {userName}
            </th>
            <th style={{ border: '1px solid black', padding: "10px" }}>
              {fatherName}
            </th>
            <th style={{ border: '1px solid black', padding: "10px" }}>
              {userId}
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
}


// export default function MyInfo() {
//     return (
//         <table className="my-info-table">
//             <thead>
//                 <tr>
//                     <th style={{ border: '1px solid black', padding: "10px" }}>
//                         Zaib Ali
//                     </th>
//                     <th style={{ border: '1px solid black', padding: "10px" }}>
//                         Muhammad Ismail
//                     </th>
//                     <th style={{ border: '1px solid black', padding: "10px" }}>
//                         175561
//                     </th>
//                 </tr>
//             </thead>
//         </table>
//     )
// }