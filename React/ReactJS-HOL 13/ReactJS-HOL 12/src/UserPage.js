import React from "react";

function UserPage() {
  return (
    <div>
      <h2>Welcome User</h2>

      <h3>Flight Details</h3>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Flight No</th>
            <th>From</th>
            <th>To</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI101</td>
            <td>Hyderabad</td>
            <td>Delhi</td>
            <td>10:00 AM</td>
            <td>
              <button>Book Ticket</button>
            </td>
          </tr>

          <tr>
            <td>AI202</td>
            <td>Chennai</td>
            <td>Mumbai</td>
            <td>2:00 PM</td>
            <td>
              <button>Book Ticket</button>
            </td>
          </tr>

          <tr>
            <td>AI303</td>
            <td>Bangalore</td>
            <td>Kolkata</td>
            <td>6:00 PM</td>
            <td>
              <button>Book Ticket</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserPage;