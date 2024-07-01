# Отель. Бронирование номеров в отеле.

SPA приложение с клиент-серверной архитектурой.
1. Разработал Авторизацию/Регистрацию, JWT.
2. Бронирования пользователя(забронированные номера, с возможностью редактирования.
3. Панель администратора (Таблица бронирований с выпадающим списком
бронирований для каждого номера, отмена бронирования,
редактирование номера)
4. Страница с доступными номера ( Поиск, Пагинация).
5. Страница номера ( Возможность забронировать номер, редактировать только Admin).


# Запуск проекта локально
```
cd client -> npm i -> npm run dev
Далее для развертывания docker container, запустить Docker.
cd server -> npm i -> docker-compose build -> docker-compose up -> npm run start
```
# Файл конфигурации .env
```
Должен быть в папке:
Server/.env
Базовый конфиг:
MONGO_CONNECTION="mongodb://root:example@localhost:27017/"
PORT=5000
JWT_SECRET="test"
```

# Стек технологий
- React, Typescript
- React-Redux, Redux Toolkit
- Tailwindcss, Material Tailwind
- Node.js, Express, MongoDB, NestJs
- Docker

![Screenshot](./screenshots/hotel_list_page.png)

# Реализовано

- Авторизация и регистрация

![Screenshot](./screenshots/registration_page.png)
![Screenshot](./screenshots/login_page.png)

- Страница с доступными номера ( Поиск, Пагинация)

![Screenshot](./screenshots/hotel_list_page.png)
![Screenshot](./screenshots/pagination.png)

- Страница номера (Забронировать, могут только авторизованные пользователи)

![Screenshot](./screenshots/reservation_form.png)

- Чат с поддержкой

![Screenshot](./screenshots/support_request.png)

- Страница Добавления отеля/номера( only user role is Admin )

![Screenshot](./screenshots/create_hotel_page.png)

- Страница редактирования номера( only user role is Admin )

![Screenshot](./screenshots/edit_form_page.png)

- Страница редактирования пользователей( only user role is Admin )

![Screenshot](./screenshots/users_list_admin.png)
![Screenshot](./screenshots/new_user_admin.png)

- Страница: Мои Бронирования.  

![Screenshot](./screenshots/user_reservations.png)

