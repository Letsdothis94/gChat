# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# account1 = Account.create(email: "cristian@email.com", password: 1234)
# user1 = User.create(name: "Cris", username: "theTester", account_id: account1.id);
# fMessage = Message.create(content: "this is my first message", user_id: user1.id);

account2 = Account.create(email: "mei@email.com", password: "word")
user2 = User.create(name: "Mei", username: "Nezuko", account_id: account2.id);
sMessage = Message.create(content: "this is account2 message", user_id: user2.id);