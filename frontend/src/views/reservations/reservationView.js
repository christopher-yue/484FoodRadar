import React from "react";
import "./reservationView.css";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";

export const ReservationView = () => {

  const fname = JSON.parse(localStorage.getItem("user")).firstname;
  const lname = JSON.parse(localStorage.getItem("user")).lastname;
  const email = JSON.parse(localStorage.getItem("user")).email;
  const mobile = JSON.parse(localStorage.getItem("user")).mobile;

  return (
    <div>
      <Navbar />
      <section className="user-info">
        <h2>User Profile</h2>
        <div className="user-details">
          <p><strong>First Name:</strong> {fname}</p>
          <p><strong>Last Name:</strong> {lname}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone:</strong> {mobile}</p>
        </div>
      </section>
      <div className="tablecontent">
        <h2>Manage Reservations</h2>

        <table>
          <tr>
            <th>Restaurant Name</th>
            <th>Location</th>
            <th>Date</th>
            <th>Time</th>
            <th>Number of People</th>
            <th>Update Reservation</th>
            <th>Remove Reservation</th>
          </tr>
          <tr>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
            <td>
              <button type="submit">Update</button>
            </td>
            <td>
              <button type="submit">Update</button>
            </td>
          </tr>
        </table>
      </div>
      <Footer />
    </div>
  );
};
