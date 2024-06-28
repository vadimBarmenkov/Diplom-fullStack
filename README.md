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
cd server -> npm i -> docker-compose build -> docker-compose up -> npm run start
```


# Стек технологий
- React, Typescript
- React-Redux, Redux Toolkit
- Tailwindcss, Material Tailwind
- NodeJs, Express, MongoDB, NestJs
- Docker

![Screenshot](./screenshots/main-page.png)

# Реализовано

- Авторизация и регистрация

![Screenshot](./screenshots/sign-in.png)
![Screenshot](./screenshots/sign-up.png)

- Страница с доступными номера ( Поиск, Пагинация)

![Screenshot](./screenshots/rooms-page-full.png)
![Screenshot](./screenshots/rooms-skeleton.png)

- Страница номера (Забронировать, могут только авторизованные пользователи)

![Screenshot](./screenshots/room-page.png)

- Меню и страница пользователя

![Screenshot](./screenshots/user-page.png)

- Панель администратора, меню, страница администратора

![Screenshot](./screenshots/admin-page.png)

- Панель администратора(Список бронирований для каждого номера, отмена бронирования, страница пользователя, кто забронировал номер).

![Screenshot](./screenshots/admin-panel-room.png)


- Страница редактирования пользователя

![Screenshot](./screenshots/Edit-profile.png)


- Страница редактирования номера( only user role is Admin )  

![Screenshot](./screenshots/edit-room.png)

- Страница: Мои Бронирования.  

![Screenshot](./screenshots/my-booking.png)

