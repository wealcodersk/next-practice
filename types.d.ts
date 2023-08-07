type Post = {
  "userId": Number,
  "id": Number,
  "title": String,
  "body": String
}

type User = {
  "id": Number,
  "name": String,
  "username": String,
  "email": String,
  "address": {
    "street": String,
    "suite": String,
    "city": String,
    "zipcode": String,
    "geo": {
      "lat": String,
      "lng": String
    }
  },
  "phone": String,
  "website": String,
  "company": {
    "name": String,
    "catchPhrase": String,
    "bs": String
  }
}

type Result = {
  pageid: String,
  title: String,
  extract: String,
  thumbnail?: {
    source: String,
    width: number,
    height: number
  }
}

type SearchResult = {
  query?: {
    pages?: Result[]
  }
}