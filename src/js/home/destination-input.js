// لیست شهرها
const cities = [
    { id: 0, name: 'تهران' },
    { id: 1, name: 'تبریز' },
    { id: 2, name: 'مشهد' },
    { id: 3, name: 'شیراز' },
    { id: 4, name: 'اصفهان' },
    { id: 5, name: 'کرمان' }
];

class CityCombobox {
    constructor(inputId, optionsListId) {
        this.combobox = document.getElementById(inputId);
        this.optionsList = document.getElementById(optionsListId);
        this.isOpen = false;
        this.selectedCity = '';
        this.button = this.combobox.nextElementSibling;

        this.init();
    }

    init() {
        // باز/بسته کردن با کلیک روی input
        this.combobox.addEventListener('click', () => {
            if (!this.isOpen) this.toggleCombobox();
        });

        // باز/بسته کردن با کلیک روی دکمه
        this.button.addEventListener('click', () => this.toggleCombobox());

        // جستجو با تایپ کردن
        this.combobox.addEventListener('input', (e) => {
            if (!this.isOpen) this.toggleCombobox();
            this.searchCities(e.target.value);
        });

        // بستن با کلیک خارج از کامبوباکس
        document.addEventListener('click', (e) => {
            if (!this.combobox.parentElement.contains(e.target)) {
                this.isOpen = false;
                this.optionsList.style.display = 'none';
            }
        });

        // مخفی کردن اولیه لیست
        this.optionsList.style.display = 'none';
    }

    toggleCombobox() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.optionsList.style.display = 'block';
            this.renderOptions(cities);
        } else {
            this.optionsList.style.display = 'none';
        }
    }

    renderOptions(filteredCities) {
        this.optionsList.innerHTML = '';
        filteredCities.forEach(city => {
            const li = document.createElement('li');
            li.className = 'relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-blue-600 hover:text-white hover:cursor-pointer hover:rounded-md group';
            li.setAttribute('role', 'option');
            li.innerHTML = `
                <div class="flex items-center">
                    <span class="inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400" aria-hidden="true"></span>
                    <span class="mr-3 truncate">
                        ${city.name}
                    </span>
                </div>
                ${city.name === this.selectedCity ? `
                <span class="absolute inset-y-0 left-6 top-[15%] flex items-center pr-4 text-indigo-600 group-hover:text-white">
                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                    </svg>
                </span>
                ` : ''}
            `;

            li.addEventListener('click', () => this.selectCity(city));
            this.optionsList.appendChild(li);
        });
    }

    selectCity(city) {
        this.selectedCity = city.name;
        this.combobox.value = city.name;
        this.toggleCombobox();
    }

    searchCities(searchTerm) {
        const filteredCities = cities.filter(city =>
            city.name.includes(searchTerm)
        );
        this.renderOptions(filteredCities);
    }

    // گرفتن مقدار شهر انتخاب شده
    getValue() {
        return this.combobox.value;
    }

    // تنظیم مقدار جدید
    setValue(value) {
        this.combobox.value = value;
        this.selectedCity = value;
    }
}

// راه‌اندازی کامبوباکس‌ها بعد از لود شدن صفحه
document.addEventListener('DOMContentLoaded', function () {
    // ایجاد نمونه برای مبدا
    const originCombobox = new CityCombobox('origin-combobox', 'origin-options');

    // ایجاد نمونه برای مقصد
    const destinationCombobox = new CityCombobox('destination-combobox', 'destination-options');

    // اضافه کردن عملکرد دکمه تعویض
    const swapButton = document.getElementById('swap-button');
    swapButton.addEventListener('click', () => {
        const originValue = originCombobox.getValue();
        const destinationValue = destinationCombobox.getValue();

        originCombobox.setValue(destinationValue);
        destinationCombobox.setValue(originValue);

        // اضافه کردن انیمیشن به دکمه
        swapButton.classList.add('rotate-180');
        setTimeout(() => {
            swapButton.classList.remove('rotate-180');
        }, 300);
    });
});


// -------------------------------- Passengers --------------------

// تعریف متغیرهای اولیه
let counts = {
    adult: 1,
    child: 0,
    infant: 0
};

// تبدیل اعداد به فارسی
function toFarsiNumber(n) {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return n.toString().split('').map(x => farsiDigits[x]).join('');
}

// بروزرسانی تعداد
function updateCount(type, action) {
    const maxTotal = 9;
    const currentTotal = counts.adult + counts.child + counts.infant;

    if (action === 'increase') {
        if (currentTotal < maxTotal) {
            if (type === 'adult' && counts[type] < 9) counts[type]++;
            if (type === 'child' && counts[type] < 9) counts[type]++;
            if (type === 'infant' && counts[type] < 9) counts[type]++;
        }
    } else {
        if (type === 'adult' && counts[type] > 1) counts[type]--;
        if (type === 'child' && counts[type] > 0) counts[type]--;
        if (type === 'infant' && counts[type] > 0) counts[type]--;
    }

    updateDisplay();
}

// بروزرسانی نمایش
function updateDisplay() {
    document.getElementById('adultCount').textContent = toFarsiNumber(counts.adult);
    document.getElementById('childCount').textContent = toFarsiNumber(counts.child);
    document.getElementById('infantCount').textContent = toFarsiNumber(counts.infant);

    const total = counts.adult + counts.child + counts.infant;
    document.getElementById('totalPassengers').textContent = toFarsiNumber(total) + ' مسافر';
}

// نمایش/مخفی کردن پنل
document.getElementById('passengerButton').addEventListener('click', function () {
    const panel = document.getElementById('passengerPanel');
    panel.classList.toggle('hidden');
});

// مقداردهی اولیه
updateDisplay();