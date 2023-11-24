import React from "react";
import "./reservationView.css"
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";

export const ReservationView = () => {
    return (
        <div>
            <Navbar />
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
                    <td><input type="text"/></td>
                    <td><input type="text"/></td>
                    <td><input type="text"/></td>
                    <td><input type="text"/></td>
                    <td><input type="text"/></td>
                    <td><button type="submit">Update</button></td>
                    <td><button type="submit">Update</button></td>
                    </tr>
                </table>
            </div>
            <Footer />
        </div>
    )
}