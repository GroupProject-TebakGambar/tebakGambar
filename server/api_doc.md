# Tebak Gambar API Documentation

## Models

### Game

```md
- imgUrl : string
- level : string
- answer : string
```

## Endpoints

List of available endpoints :

-  `GET /game`

## 1. GET /game

Description :
 - Get all game from database

_Response (200 - OK)_

```json
    {
        "id": 1,
        "imgUrl": "https://jawabantebakgambar.net/data/images/4113.jpg",
        "level": "Easy",
        "answer": "tanah liat"
    },
    {
        "id": 2,
        "imgUrl": "https://jawabantebakgambar.net/data/images/4088.jpg",
        "level": "Easy",
        "answer": "sudut pandang"
    }
```

## 2. GET /game

Description :
 - Get all game from database order by random 

Request :

- Query Params:

```json
    {
    level : Easy 
    }
```

_Response (200 - OK)_

```json
    {
        "id": 3,
        "imgUrl": "https://jawabantebakgambar.net/data/images/4068.jpg",
        "level": "Easy",
        "answer": "bintang papan atas"
    },
    {
        "id": 5,
        "imgUrl": "https://jawabantebakgambar.net/data/images/4038.jpg",
        "level": "Easy",
        "answer": "siang bolong"
    }
```