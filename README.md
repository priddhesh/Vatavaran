# Vatavaran Weather App
This is a weather website which accurately provides detailed weather conditions of a particular place.

## Run Locally
Clone the project
```bash
  git clone https://github.com/priddhesh/Vatavaran.git
```

Go to the project directory

```bash
  cd weather-app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

Build app for production

```bash
  npm run build
```

## API Reference
#### Base URL
```http
   GET http://api.weatherapi.com/v1
```
#### Get current weather for location

```http
  GET  http://api.weatherapi.com/v1/current.json?key=<YOUR_API_KEY>&q=<location>
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `key` | `string` | **Required**. Your API key |
| `q`| `string` | **Required**  Location name|

#### Get 7 day weather for US Zipcode 07112
```http
  GET  http://api.weatherapi.com/v1/forecast.json?key=<YOUR_API_KEY>&q=07112&days=7
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `q` | `int` | **Required**. Zipcode |
| `days`| `int` | **Required**  No. of days|
## 🔗 Links
[![Weather API](https://img.shields.io/badge/weather_api-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://www.weatherapi.com/)

## Demo

https://drive.google.com/file/d/1u9-XboqJAEH38-SzJqo1GWZNbxBOkqmT/view?usp=sharing

## Screenshots

![07 01 2023_22 01 09_REC](https://user-images.githubusercontent.com/109747774/211161709-b5631f99-e058-43f3-9732-be9469c14905.png)

![07 01 2023_22 27 17_REC](https://user-images.githubusercontent.com/109747774/211162029-e6054a15-0d88-496c-ba7e-67857ff301cc.png)

![07 01 2023_22 27 40_REC](https://user-images.githubusercontent.com/109747774/211161865-dd459a2d-4936-4429-ae41-820101982d11.png)

![07 01 2023_22 26 37_REC](https://user-images.githubusercontent.com/109747774/211161896-dd16de9d-f7a7-4db4-b97c-9b73ad4d2a99.png)

![07 01 2023_22 26 52_REC](https://user-images.githubusercontent.com/109747774/211161958-cbaee270-cd4d-4ef8-92a5-e7195e1d58bc.png)


