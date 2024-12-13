import { db } from './firebase-config.js';
import { collection, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Function to add a new train to the Firestore database
async function addTrain(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get values from form fields
    const name = document.getElementById('trainName').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const price = parseInt(document.getElementById('price').value);
    const availableSeats = parseInt(document.getElementById('availableSeats').value);
    const departureTime = document.getElementById('departureTime').value;
    const duration = document.getElementById('duration').value;
    const seatType = document.getElementById('seatType').value;
    const travelCompany = document.getElementById('travelCompany').value;

    try {
        const departureTimestamp = Timestamp.fromDate(new Date(departureTime)); // Converts to Firestore Timestamp

        const newTrain = {
            name: name,
            from: from,
            to: to,
            price: price,
            availableSeats: availableSeats,
            departureTime: departureTimestamp, // Store Timestamp directly
            duration: duration,
            seatType: seatType, // Add seat type
            travelCompany: travelCompany, // Add travel company
        };

        const docRef = await addDoc(collection(db, 'trains'), newTrain);
        console.log("New train added with ID:", docRef.id);
        alert('قطار با موفقیت اضافه شد.');
        document.getElementById('addTrainForm').reset();

    } catch (error) {
        console.error("Error adding train:", error);
        alert('خطا در افزودن قطار.');
    }
}

document.getElementById('addTrainForm').addEventListener('submit', addTrain);
