# TWC
# Nodeless API

1. Have several API endpoints (Posts, Users and Data)

endpoints would be:
They are prefixed with x.x.x.x:3000/api/

|uri   |description|    Method|
|------|:----------:|---------:|
|posts/all/|Get all posts*  | GET|
|posts/{:id}|Get a single post by ID | GET|
|posts/create/|Create a single post, gives random ID| POST
|posts/delete/{id}| Delete a post | POST/DELETE|
|user/{id}| Get a user by ID | GET|
|user/new/ | Create a new user | POST|
|user/delete/{id}|Delete a user | POST/DELETE|
|user/{id}/posts/{id}| Get a specific post of user | GET|
|user/{id}/posts/all | Get all user posts | GET|
|user/{id}/comments/all | Get all comments made by user and post ID| GET
|user/{id}/comments/{id}| Get specific comment | GET
|user/{id}/settings/ | Get user settings | GEt
|user/{id}/settings/{id}| Get a specific user setting | GET
|user/{id}/settings/{id}| Set a user setting to specified value (true/false for bools) | POST

*Warning, this returns all posts in the entire database. Slow response time!

Sample post:
```json
"post" = {
    "id":"ahuf98x63001hbjgkl",
    "createdBy":"user_id",
    "createdAt":"20.06.2018",
    "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum dolor ante, a vulputate ex pellentesque in. Proin tempus magna feugiat nisi iaculis, at tempus justo porta.a. Suspendisse potenti. Nullam blandit dui et sagittis laoreet. ",
    "comments":[
        {
            "id":"kopt89uh2jf098jdho",
            "commentBy":"user_id",
            "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "score":"381"
        },
        {
            "id":"gerwsd89uh2jf098jdho",
            "commentBy":"user_id",
            "content":"Lorem ipsum dolor sit amet, conectetur adipiscing elit.",
            "score":"-13"
        }
    ]
}

```

Sample user
```json 
"user" = {
    "id":"j904gjbnv3dgeb13",
    "accountName":"Username",
    "Name":"Jon Doe",
    "Email":"example@example.org",
    "Verified":"Yes",
    "Create_IP":"x.x.x.x",
    "last_logon_IP":"x.x.x.x",
    "Created":"20.06.2018",
    "Last_login":"20.06.2018",
    "Muted":"No",
    "Probation":"No",
    "Banned":"No",
    "Banned_reason":"",
    "Moderator":"No",
    "Administrator":"No",
    "notes":[
        {
            "title":"Account change",
            "content":"Changed display settings. Previously 'hide' now 'show' in field NSFW content",
            "by":"System"
        },
        {
            "title":"Muted by moderator",
            "content":"Muted for 3 days, see attachments for details.",
            "by":"user_id"
        }
    ]
    
}

```
## Database
I've gone with Postgresql, having tried MySQL and MariaDB previously I wanted to try something different. 

I found a NPM module [Node-postgres](https://node-postgres.com/) that I will be using for this project. 


## Protection from SQL injection
For whenever the database requires user entries/changes use a constant query with VALUES() to be filled in. This is to avoid SQL injection.

```javascript
const new_INSERT_USER = 'INSERT INTO users(accountname, name, email, verified, administrator, create_ip) VALUES($1, $2, $3, $4, $5, $6) RETURNING *'
```

And the values get sent from the front-end to the back end as follows (sample data):

```javascript
const new_VALUES = ['superman', 'Clark Kent', 'clark@batman.com', 'yes', 'no', '148.142.84.191']

```