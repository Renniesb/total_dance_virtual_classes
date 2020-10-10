# Total Dance Virtual Dance Classes

Link to the live app: https://total-dance-virtual-classes.vercel.app/
# Screenshots

![image](https://user-images.githubusercontent.com/7147957/95642207-0833dc80-0a75-11eb-8429-7e1eddcc6484.png)
![Screen Shot 2020-10-09 at 9 02 01 PM](https://user-images.githubusercontent.com/7147957/95642222-1bdf4300-0a75-11eb-90e1-bb292ef664dc.png)
![image (1)](https://user-images.githubusercontent.com/7147957/95642216-11bd4480-0a75-11eb-8c98-5c0243495bb8.png)
![image (4)](https://user-images.githubusercontent.com/7147957/95642203-fbaf8400-0a74-11eb-8cac-a3bc97ba48cb.png)
![Screen Shot 2020-10-09 at 9 05 11 PM](https://user-images.githubusercontent.com/7147957/95642219-17b32580-0a75-11eb-86dd-264920162b42.png)


# Summary

This app allows users to take english listening comprehension quizzes. The first screen the user sees is the title page with instructions on how to use the app and a list of the apps. From this page the user can click on one of the quizzes to go to a quiz. Once the quiz is started each question plays an audio or video and presents fill in the blank sentences for the student to fill out. At the end of the quiz the student sees how many questions they got wrong or right. Administrators can create new quizzes, and edit quizzes and questions.

# Technologies Used
HTML5, CSS3, React, JavaScript, Node.js, Express.


# Total Dance Virtual Classes API

link to live api: https://peaceful-harbor-47164.herokuapp.com/api

## Scripts

**migrate**

Using postgrator behind scenes to read `.sql` files in `./migrations` dir.

- `npm run migrate` to migrate to latest schema
- `npm run migrate -- 1` to migrate to step 1 of schema
- `npm run migrate -- 0` to completely rollback schema

**seed**

Use the files inside `./seeds` dir

e.g. to seed the database named `quiz`:

```bash
psql -U $DB_USER -d $DB_NAME -f ./seeds/seed.quiz_questions.sql
psql -U postgres -d quiz -f ./seeds/seed.quiz_questions.sql
psql -U postgres -d quiz -f ./seeds/seed.quizzes.sql
```


## Endpoints

### Quizzes

- `GET /api/quiz`
  - get all quizzes
- `POST /api/quiz`
  - create a quiz

- `GET /api/quiz/:quizId`
  - get a specific quiz
- `PATCH /api/quiz/:quizId`
  - update a specific quiz
- `DELETE /api/quiz/:quizId`
  - delete a specific quiz

### Questions


- `GET /api/questions`
  - get all questions
- `POST /api/questions`
  - create a question
  
- `GET /api/quiz/:quizNum/questions`
  - get all questions from a specific quiz

- `GET /api/questions/:id`
  - get a specific question
- `PATCH /api/questions/:id`
  - update a specific question
- `DELETE /api/questions/:id`
  - delete a specific question



## Welcome

- `GET /`
  - Express Welcome to Express

## Environmental Variables

**for running the app:**

`DATABASE_URL` is being used by `./src/server.js` to initialize knex.
The expected format is:

```bash
"postgresql://$DB_USER:$DB_PASS@$DB_HOST:$DB_PORT/$DB_NAME"
```


You should only need `DATABASE_URL` to start the application.

There are default values set in `./src/config.js` but they probably won't work for you. You should set your own values for it in your `.env`.
