# Find Method
find method return the object .
# Filter 
Filter return the new array.


# Mongoose
Run command :- node mongosh 
npm i mongoose
mongosh run in cmd .

show dbs :- show all the database.
use databasename :- create new data and switch the database.
show collections
db.user.find().
db.dropDatabase() :- deletes the entire data from the system
db.createCollection('user) :- create collection
db.collection.drop() :- removes collection

// TO create

Insert 1 element
db.movies.insertOne({name:'superman',imdb:7.3})
db.movies.insertMany([{name:'sonu',last:'parmar'},{name:'2',last:'end'}])


# Update
1. To dupdate 
db.movies.updateOne({name:'superman'},{$set:{imdb:10}})
db.movies.updateMany({name:'superman'},{$set:{imdb:10,name:'satyam'}})

# Delete

db.movies.deleteOne({name:'sonu'})
db.movies.deleteOne({})
There are Two types of databse
 SQL
 NO-SQL

# Step
show dbs
show collections
 db.users.find()



# authentication
directly login with gmail . this is called autharization.


// app.use(express.json());
middle ware ka kaam hota hai jo data bheja hjai vahi aaye

# Thunder 
thunder client check the backened are run successful or not
400 problem page not found.
200 all is clear
420 

# findOne

