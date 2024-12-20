import { db } from './firebase-config.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

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
            const departureDate = train.departureTime
                ? new Date(train.departureTime.seconds * 1000).toLocaleString('fa-IR', { timeZone: 'Asia/Tehran' })
                : 'تاریخ نامشخص';

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
                    <span class="bg-green-100 text-green-800 px-2 py-1 rounded">${trainType}</span>
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

    } catch (error) {
        console.error("Error fetching trains:", error);
    }
}

getTrains();
