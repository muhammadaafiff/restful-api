# restful-api for Todo app docs

> POST /auth/register

Untuk melakukan register, user dapat mengakses API di atas dengan memasukkan pada request body:
  ```json
  {
    "name": "(nama kamu)",
    "username": "(usernamekamu)",
    "email": "(emailkamu@mail.com)",
    "password": "(passwordkamu)"
  }
  ```
---

> POST /auth/login

Untuk melakukan login, user dapat mengakses API di atas dengan memasukkan pada request body:
  ```json
  {
    "username": "(usernamekamu)",
    "password": "(passwordkamu)"
  }
  ```
---

> POST /todos

Untuk menambahkan todo, kamu dapat mengakses API di atas dengan memasukkan pada request header:
  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <token_kamu> | Request header |

dan pada request body:  
  ```json
  {
    "value": "(nama todo nya)",
    "userId": "(id kamu)"
  }
  ```
---

> GET /todos

Untuk mendapatkan list todo, kamu dapat mengakses API di atas dengan memasukkan pada request header:
  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <token_kamu> | Request header |

---

> GET /todos/:id

Untuk mendapatkan detail todo berdasarkan id yang ingin dicari, kamu dapat mengakses API di atas dengan memasukkan pada request header:
  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <token_kamu> | Request header |

---

> UPDATE /todos/:id

Untuk mengubah todo berdasarkan id yang diinginkan, kamu dapat mengakses API di atas dengan memasukkan pada request header:
  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <token_kamu> | Request header |

dan pada request body:  
  ```json
  {
    "value": "(nama todo nya)"
  }
  ```
---

> DELETE /todos/:id

Untuk menghapus todo berdasarkan id yang diinginkan, kamu dapat mengakses API di atas dengan memasukkan pada request header:
  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <token_kamu> | Request header |

---

> DELETE /todos

Untuk menghapus semua todo, kamu dapat mengakses API di atas dengan memasukkan pada request header:
  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <token_kamu> | Request header |

---
