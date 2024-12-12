import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTgDxeRs0U-QR7Gj2rAS5m0leXQi9D0aU",
    authDomain: "swiftrails-54e19.firebaseapp.com",
    projectId: "swiftrails-54e19",
    storageBucket: "swiftrails-54e19.firebasestorage.app",
    messagingSenderId: "1023346310863",
    appId: "1:1023346310863:web:d485760b7eadfe49f8c1ba"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to get train data
async function getTrains() {
    try {
        const trainsCollection = collection(db, 'trains');
        const trainsSnapshot = await getDocs(trainsCollection);

        const trainsList = trainsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        console.log('لیست قطارها:', trainsList);

        const trainsContainer = document.getElementById('trains-container');
        trainsContainer.innerHTML = '';

        trainsList.forEach(train => {
            // Convert Firestore Timestamp to readable date format
            // const departureDate = train.departureDate
            //     ? new Date(train.departureDate.seconds * 1000).toLocaleString('fa-IR', {
            //         timeZone: 'Asia/Tehran', // منطقه زمانی تهران
            //     })
            //     : 'تاریخ نامشخص';

            const departureDate = train.departureTime
                ? new Date(train.departureTime.seconds * 1000).toLocaleString('fa-IR', {
                    timeZone: 'Asia/Tehran', // تنظیم منطقه زمانی تهران
                })
                : 'تاریخ نامشخص';


            // Handle possible undefined values for availableSeats, duration, and other fields
            const availableSeats = train.availableSeats !== undefined ? train.availableSeats : 'نامشخص';
            const duration = train.duration || 'نامشخص';
            const trainType = train.trainType || 'نوع قطار نامشخص';
            const from = train.from || 'مبدأ نامشخص';
            const to = train.to || 'مقصد نامشخص';
            const price = train.price ? train.price.toLocaleString() : 'قیمت نامشخص';

            const trainElement = document.createElement('div');
            trainElement.classList.add('train-item', 'bg-white', 'shadow-md', 'rounded-lg', 'p-4', 'mb-4');

            trainElement.innerHTML = `
                <div class="flex justify-between items-center mb-2">
                    <h3 class="text-xl font-bold text-blue-700">${train.name}</h3>
                    <span class="bg-green-100 text-green-800 px-2 py-1 rounded">
                        ${trainType}
                    </span>
                </div>

                <div class="grid grid-cols-2 gap-2">
                    <p><strong>مبدأ:</strong> ${from}</p>
                    <p><strong>مقصد:</strong> ${to}</p>
                    <p><strong>قیمت:</strong> ${price} تومان</p>
                    <p><strong>صندلی‌های موجود:</strong> ${availableSeats}</p>
                    <p><strong>مدت سفر:</strong> ${duration} ساعت</p>
                    <p><strong>تاریخ حرکت:</strong> ${departureDate}</p>
                </div>
            `;

            trainsContainer.appendChild(trainElement);
        });

        return trainsList;

    } catch (error) {
        console.error('خطا در دریافت اطلاعات قطارها:', error);

        const trainsContainer = document.getElementById('trains-container');
        trainsContainer.innerHTML = `
            <div class="bg-red-100 text-red-800 p-4 rounded">
                خطا در بارگذاری اطلاعات: ${error.message}
            </div>
        `;
    }
}

// Call the getTrains function when the page loads
getTrains();




