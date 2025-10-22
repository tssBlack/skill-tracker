# 🚀 SkillTrack — React + Next.js + FastAPI Fullstack App

Полноценный fullstack-проект для трекинга навыков с авторизацией, CRUD-операциями и аналитикой.  
Frontend на **Next.js + Redux Toolkit + Tailwind CSS + MUI**, backend на **FastAPI**.  
Быстрая сборка — **Turbopack**.

---

## 🌟 Основные фичи

### 👤 Авторизация
- Регистрация / вход / выход пользователей  
- JWT-токен (хранение в `localStorage` или cookies)  
- Защищённые страницы через `Next.js middleware`

### 📘 Управление навыками
- Добавление новых навыков (React, FastAPI, Docker и т.д.)  
- Уровень владения: 0–100% (ползунок)  
- Возможность добавлять комментарий, цель, дату последнего обновления  
- CRUD-операции (создание, редактирование, удаление, просмотр)

### 📊 Аналитика
- График прогресса (LineChart из MUI или Recharts)  
- Фильтрация по дате и технологии  
- Счётчик завершённых навыков

### ⚙️ Backend (FastAPI)
| Метод | Endpoint | Описание |
|--------|-----------|-----------|
| `POST` | `/auth/register` | Регистрация пользователя |
| `POST` | `/auth/login` | Вход, выдача JWT |
| `GET` | `/skills/` | Получить все навыки |
| `POST` | `/skills/` | Добавить новый навык |
| `PUT` | `/skills/{id}` | Обновить навык |
| `DELETE` | `/skills/{id}` | Удалить навык |

---

## 🧩 Технологии

**Frontend:**
- Next.js (App Router, SSR)
- React
- Redux Toolkit + RTK Query
- Tailwind CSS
- MUI (Material UI)
- Turbopack (сборка)

**Backend:**
- FastAPI
- SQLModel / SQLAlchemy
- JWT (PyJWT)
- CORS Middleware
- SQLite (по умолчанию)
- Uvicorn