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


