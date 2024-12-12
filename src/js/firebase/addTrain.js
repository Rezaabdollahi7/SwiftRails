import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";


// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTgDxeRs0U-QR7Gj2rAS5m0leXQi9D0aU",
    authDomain: "swiftrails-54e19.firebaseapp.com",
    projectId: "swiftrails-54e19",
    storageBucket: "swiftrails-54e19.firebasestorage.app",
    messagingSenderId: "1023346310863",
    appId: "1:1023346310863:web:d485760b7eadfe49f8c1ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to add a new train to the Firestore database
async function addTrain(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get values from the form fields
    const name = document.getElementById('trainName').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const price = parseInt(document.getElementById('price').value);
    const availableSeats = parseInt(document.getElementById('availableSeats').value);
    const departureTime = document.getElementById('departureTime').value;
    const duration = document.getElementById('duration').value;
    const trainType = document.getElementById('trainType').value;

    try {
        // Convert the departureTime to a Firestore Timestamp
        const departureTimestamp = Timestamp.fromDate(new Date(departureTime)); // تبدیل تاریخ به Firestore Timestamp

        // Create a new train object to add to the Firestore database
        const newTrain = {
            name: name,
            from: from,
            to: to,
            price: price,
            availableSeats: availableSeats,
            departureTime: departureTimestamp, // Store Timestamp directly
            duration: duration,
            trainType: trainType,
        };

        // Add the new train to the "trains" collection in Firestore
        const docRef = await addDoc(collection(db, 'trains'), newTrain);
        console.log("New train added with ID:", docRef.id);

        // Show success message (Optional)
        alert('قطار با موفقیت اضافه شد.');

        // Clear form inputs
        document.getElementById('addTrainForm').reset();

    } catch (error) {
        // Only show the alert if there was an error
        console.error("Error adding train:", error);
        alert('خطا در افزودن قطار.');
    }
}


// Attach event listener to the form submit button

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addTrainForm').addEventListener('submit', addTrain);
});
