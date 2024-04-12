# React app for hackaton task

## Getting Started

### Prerequisites

Убедитесь, что у вас установлены [Node.js](https://nodejs.org/) и npm.

### Installation

1. Клонируйте репозиторий
2. Перейдите в каталог проекта
3. Установите зависимости командой `npm install`
4. Запустите проект при помощи `npm start`
5. Готово, вы великолепны! Если проект не открылся автоматически, перейдите на http://localhost:3000
6. Перед началом работы запустите сервер из этого репозитория - https://github.com/Chapalax/BusinessTripsBackend


## Stack

### React Hooks 

`useState()`- использовался для состояний модальных окон, записи пользователя, копирования паспортных данных

`useContext()` - для сохранения пользвателя, записи таблиц и избежания props-drilling'а

`useEffect()` - для запросов к БД при добавлении новых записей

`useCallback()` - для избежания слишком частых запросов к серверу

### React Router DOM

 `useNavigation()`

### For API
 В работе использовался fetch API для связи с бэкендом


## Styles

Все стили реализованы при помощи препроцессора SASS ✨
