# my-second-api

Another api created to test and practice. 
Here the api consists of rappers and some basic information. 

This code is a Node.js server using the Express framework. It creates an API with four rappers and their information, age, birth name, and birth location. When a GET request is made to the root URL, it sends the index.html file. When a GET request is made to "/api/:name" URL, it checks if the parameter "name" matches the name of one of the rappers. If it does, it returns that rapper's information as a JSON response. If it doesn't, it returns the information of an "unknown" rapper. The server listens on port 8000 but can be dynamically assigned by the hosting provider like Heroku.

There is little information since the point of this exercise was to setup a live server and get your api pushed to Heroku.

Thank you, 
