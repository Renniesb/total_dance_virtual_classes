# Total Dance Virtual Dance Classes

Link to the live app: https://total-dance-virtual-classes.vercel.app/
# Screenshots

![image](https://user-images.githubusercontent.com/7147957/95642207-0833dc80-0a75-11eb-8429-7e1eddcc6484.png)
![Screen Shot 2020-10-09 at 9 02 01 PM](https://user-images.githubusercontent.com/7147957/95642222-1bdf4300-0a75-11eb-90e1-bb292ef664dc.png)
![image (1)](https://user-images.githubusercontent.com/7147957/95642216-11bd4480-0a75-11eb-8c98-5c0243495bb8.png)
![image (4)](https://user-images.githubusercontent.com/7147957/95642203-fbaf8400-0a74-11eb-8cac-a3bc97ba48cb.png)
![Screen Shot 2020-10-09 at 9 05 11 PM](https://user-images.githubusercontent.com/7147957/95642219-17b32580-0a75-11eb-86dd-264920162b42.png)


# Summary

Total Dance Virtual Classes is for dancing enthusiasts all over the world. It was built for dancers to receive a curated list of videos based on their dance of choice and skill level.The first screen is the home screen. It explains the purpose of the app and shows how to login. From here the user can click on the profile link in the navigation. From here they will enter in the username and password. The user is then taken to the choose a video class playlist page. Here the user can select to learn either Salsa, Bachata or Merengue. They can then choose their skill level. They will then be shown their video classes playlist. The user can also see their profile page by clicking on the profile link in the navigation.



# Technologies Used
HTML5, CSS3, React, JavaScript, Node.js, Express.


# Total Dance Virtual Classes API

link to live api: https://peaceful-harbor-47164.herokuapp.com/api

## Scripts

**seed**

Use the files inside `./seeds` dir

e.g. to seed the database named `dance_users or videos`:

```bash
psql -U $DB_USER -d $DB_NAME -f ./seeds/seed.users.sql
psql -U postgres -d dance_users -f ./seeds/seed.users.sql
psql -U postgres -d videos -f ./seeds/seed.videos.sql
```


## Endpoints

### Videos

- `GET /api/videos/:dancetype/:dancelevel`
  - get videos for a specific dance and proficiency level

### Authentication


- `POST /api/auth/login`
  - to check the users login credentials and log them into the app

- `POST /api/user/profile`
  - to get the users profile information only if they are logged into the app.
  
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
