import { db } from './firebase-config.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// همان کد قبلی با تغییر در HTML

async function getTrains(searchQuery = '') {
    try {
        const trainsCollection = collection(db, 'trains');
        const trainsSnapshot = await getDocs(trainsCollection);
        const trainsList = trainsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        const filteredTrains = trainsList.filter(train => {
            const fromCity = train.from.toLowerCase();
            const toCity = train.to ? train.to.toLowerCase() : '';
            const query = searchQuery.toLowerCase();
            return fromCity.includes(query) || toCity.includes(query);
        });

        displayTrains(filteredTrains);

    } catch (error) {
        console.error("Error getting trains:", error);
    }
}

function displayTrains(trains) {
    const trainList = document.getElementById('trainList');
    trainList.innerHTML = '';

    if (trains.length === 0) {
        trainList.innerHTML = '<p>هیچ قطاری یافت نشد.</p>';
    }

    trains.forEach(train => {
        const trainElement = document.createElement('div');
        trainElement.classList.add('train-item');

        trainElement.innerHTML = `
            <h3>${train.name}</h3>
            <p><strong>مبدا:</strong> ${train.from}</p>
            <p><strong>مقصد:</strong> ${train.to || 'نامشخص'}</p>
            <p><strong>قیمت:</strong> ${train.price.toLocaleString()} تومان</p>
            <p><strong>صندلی‌های موجود:</strong> ${train.availableSeats}</p>
        `;

        trainList.appendChild(trainElement);
    });
}

// اضافه کردن event listener در اجرای اسکریپت
document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.getElementById('searchBox');
    searchBox.addEventListener('keyup', () => {
        const searchQuery = searchBox.value;
        getTrains(searchQuery);
    });

    // بارگذاری اولیه قطارها
    getTrains();
});