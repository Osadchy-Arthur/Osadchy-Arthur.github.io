// Массив товаров
const products = [
  { name: 'Мехоград', basePrice: 10000, population: '110-120', age: '50-250', profit: '100-240', species: 'таяр' },
  { name: 'Пернатия', basePrice: 15000, population: '150-240', age: '40-400', profit: '800-950', species: 'вокс' },
  { name: 'Внеземлэнд', basePrice: 20000, population: '450-780', age: '1200-2400', profit: '3000-4000', species: 'лунянин' },
  { name: 'Человеколяндия', basePrice: 25000, population: '2300-2800', age: '50-4500', profit: '2500-5500', species: 'человек' },
  { name: 'Unknown', basePrice: 0, population: 'unknown', age: 'unknown', profit: 'unknown', species: 'unknown' },
  { name: 'Снежкоперия', basePrice: 7800, population: '1000-1200', age: '20-30', profit: '30-40', species: 'снеговик' },
  { name: 'Шишимир', basePrice: 5800, population: '100-200', age: '25-35', profit: '35-46', species: 'белколюд' },
  { name: 'Громозвон', basePrice: 200, population: '1-2', age: '1-2', profit: '0', species: 'полубог' },
  { name: 'Покинутая земля', basePrice: 100, population: '0', age: '7800', profit: '0', species: 'отсутствует' },
  { name: 'Тестовик', basePrice: 700, population: '5-10', age: '20-30', profit: '30-40', species: 'тестировщик' }
];

// Генерация HTML-кода
function getProductHtml(product) {
  return `
    <div class="product">
      <h3>${product.name}</h3>
      <p>Характеристики колонии:</p>
      <ul>
        <li>Население: ${product.population}</li>
        <li>Возраст: ${product.age}</li>
        <li>Прибыль: ${product.profit} ƒ</li>
        <li>Основной вид: ${product.species}</li>
      </ul>
      <p>Цена: ${product.basePrice} ƒ</p>
      <button class="addToCart" data-price="${product.basePrice}">Добавить в корзину</button>
    </div>
  `;
}

// Вывод каталога
function renderCatalog() {
  const catalog = document.getElementById('catalog');
  if (!catalog) return;

  catalog.innerHTML = products.map(getProductHtml).join('');
}

// Добавление товара в корзину
function addToCart(event) {
  if (!event.target.classList.contains('addToCart')) return;

  const name = event.target.parentNode.querySelector('h3').textContent;
  const price = parseInt(event.target.dataset.price);

  const cart = document.getElementById('cart');
  const item = document.createElement('li');
  item.textContent = `${name} (${price} ƒ)`;
  cart.querySelector('ul').appendChild(item);

  const totalPrice = parseInt(document.getElementById('totalPrice').textContent);
  document.getElementById('totalPrice').textContent = totalPrice + price;
}

// Отправка заказа
function order() {
  const totalPrice = parseInt(document.getElementById('totalPrice').textContent);

  alert(`Вы заказали колоний на сумму ${totalPrice} ƒ`);
}

// Вывод каталога при загрузке страницы
window.onload = function() {
  renderCatalog();

  // Обработка событий на кнопки "Добавить в корзину"
  const addToCartButtons = document.querySelectorAll('.addToCart');
  Array.from(addToCartButtons).forEach(button => button.addEventListener('click', addToCart));

  // Обработка событий на кнопку "Заказать"
  const orderBtn = document.getElementById('orderBtn');
  orderBtn.addEventListener('click', order);

  var hideButton = document.getElementById("hideButton"); // Получаем кнопку по id
  var hideText = document.getElementById("hideText"); // Получаем скрытый текст по id

  hideButton.addEventListener("click", function() { // Добавляем функцию при нажатии на кнопку
  if (hideText.style.display === "none") { // Если текст скрыт
    hideText.style.display = "block"; // Отображаем текст
  } else { // Иначе (если текст отображен)
    hideText.style.display = "none"; // Скрываем текст
  }
});
};