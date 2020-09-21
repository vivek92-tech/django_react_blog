# Django-React-Blog

### Table Of Content

 * Description
 * How to setup the application
 * Features
 
 ### Description
 
 Django React.js news blog, which has various category of news like
 * World
 * Environment
 * Technology
 * Design
 * Culture
 * Business
 * Politics
 * Opinion
 * Science
 * Health
 * Style
 * Travel
 
 ### How to setup the application
 
 #### Backend
 1. First clone the repository by typing `git clone https://github.com/vivek92-tech/django_react_blog.git`
 2. Make sure you have install PostgreSQL and create a database with `CREATE DATABASE django_react_blog` owner postgres;
 3. Inside django_react_blog folder go to backend/django_react_blog/settings.py file, under database section change the postgres user password to your postgres user password.
 ![9](https://user-images.githubusercontent.com/61467017/93820899-d1179b80-fc2b-11ea-97f2-38cf7ba51583.png)

 
 4. Inside django_react_blog folder type `cd backend` then type `source venv/bin/activate` to activate the virtual environment
 5. To install dependencies, type `pip install django django-cors-headers django-summernote djangorestframework Pillow psycopg2 psycopg2-binary`
 6. Now type `python3 manage.py makemigrations` to check for changes and then type `python3 manage.py migrate` to migrate.
 7. Now create superuser by typing `python3 manage.py createsuperuser` and give username, email address and password.
 8. To run the server type `python3 manage.py runserver` 
 9. Now, in your browser navigate to localhost:8000/admin/ and login as superuser
 10. Now go to `Blog posts` option and select `ADD BLOG POST` option and fill the details and save. Create multiple news blogs and make sure one of them is featured, by selecting `Featured` option. 
 11. Finally, logout as superuser.
 
 #### Frontend 
 1. Open a new terminal and go to django_react_blog folder and type `cd frontend` then type `npm install --save axios react-router-dom` to install the dependencies.
 2. Now type `npm run start` to run the server and make sure the backend server is running.
 3. Open your browser and type `localhost:3000` to go to the blog. 
 4. Finally, you can see all the django news blogs you have created in django admin.
 5. Thimbnail might be missing, so to solve that run `npm run build`
 6. Now copy and replace the `build` folder from `frontend` folder to `backend` 
 7. Now go to your browser and type `localhost:8000` and make sure your backend server is running.
 8. You can see the completed version of the website.
 
 
 ### Features
 
 * Landig page:
 
 ![1](https://user-images.githubusercontent.com/61467017/93826499-5e132280-fc35-11ea-9ac1-096631fe7ed2.png)

 * Blog page:
 
 ![2](https://user-images.githubusercontent.com/61467017/93826571-83079580-fc35-11ea-8f21-66073f07179d.png)

 * List of blogs
 
 ![3](https://user-images.githubusercontent.com/61467017/93826624-a7637200-fc35-11ea-915c-cdd7611cb38e.png)

 ![4](https://user-images.githubusercontent.com/61467017/93826651-b6e2bb00-fc35-11ea-84c5-4afd0a6302f3.png)

 * Categorical view
 
 ![5](https://user-images.githubusercontent.com/61467017/93826769-f3161b80-fc35-11ea-8974-df1d2eba27d4.png)
 
 ![6](https://user-images.githubusercontent.com/61467017/93826770-f3aeb200-fc35-11ea-8f38-01a1d3acdf7a.png)
 
 * Detail View
 
 ![7](https://user-images.githubusercontent.com/61467017/93826832-13de7100-fc36-11ea-8778-c75d54d7cdbd.png)
 
 ![8](https://user-images.githubusercontent.com/61467017/93826834-13de7100-fc36-11ea-93db-b97045aef726.png)


 
 
 
