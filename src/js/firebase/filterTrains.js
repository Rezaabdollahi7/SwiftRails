import { db } from './firebase-config.js';
import { collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

async function getTrains() {
    const fromCity = document.getElementById('fromCityInput').value.trim();
    const toCity = document.getElementById('toCityInput').value.trim();
    const trainList = document.getElementById('trainList');

    trainList.innerHTML = ''; // Clear previous results

    try {
        const trainsCollection = collection(db, 'trains');
        let trainsQuery = trainsCollection;

        // Construct query based on input
        if (fromCity && toCity) {
            trainsQuery = query(
                trainsCollection,
                where('from', '==', fromCity),
                where('to', '==', toCity)
            );
        } else if (fromCity) {
            trainsQuery = query(trainsCollection, where('from', '==', fromCity));
        } else if (toCity) {
            trainsQuery = query(trainsCollection, where('to', '==', toCity));
        }

        const trainsSnapshot = await getDocs(trainsQuery);
        const trainsList = trainsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        if (trainsList.length === 0) {
            trainList.innerHTML = `
                    <div class="col-span-full text-center text-gray-500 py-4">
                        هیچ قطاری یافت نشد.
                    </div>
                `;
            return;
        }

        trainsList.forEach(train => {
            const trainElement = document.createElement('div');
            const departureDate = train.departureTime
                ? new Date(train.departureTime.seconds * 1000).toLocaleString('fa-IR', { timeZone: 'Asia/Tehran' })
                : 'تاریخ نامشخص';
            trainElement.classList.add(
                'bg-white', 'p-4', 'rounded-lg', 'shadow-md', 'border', 'border-gray-200'
            );
            trainElement.innerHTML = `
                    <h3 class="text-lg font-bold mb-2 text-blue-700">${train.name}</h3>
                    <p><strong>مبدا:</strong> ${train.from}</p>
                    <p><strong>مقصد:</strong> ${train.to || 'نامشخص'}</p>
                    <p><strong>نوع قطار :</strong> ${train.trainType || 'نامشخص'}</p>
                    <p><strong>قیمت:</strong> ${train.price.toLocaleString()} تومان</p>
                    <p><strong>صندلی‌های موجود:</strong> ${train.availableSeats}</p>
                    <p><strong>تاریخ حرکت:</strong> ${departureDate}</p>
                `;
            trainList.appendChild(trainElement);
        });

    } catch (error) {
        console.error("Error getting trains:", error);
        trainList.innerHTML = `
                <div class="col-span-full text-center text-red-500 py-4">
                    خطا در بارگذاری اطلاعات: ${error.message}
                </div>
            `;
    }
}

// Add event listener to search button
document.getElementById('searchButton').addEventListener('click', getTrains);

// Optional: Allow search on Enter key press
document.getElementById('fromCityInput').addEventListener('keyup', (e) => {
    if (e.key === 'Enter') getTrains();
});
document.getElementById('toCityInput').addEventListener('keyup', (e) => {
    if (e.key === 'Enter') getTrains();
});