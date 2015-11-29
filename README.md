== README ==

This Technical Trial is a Javascript SPA application built with backbone.js
and it's embedded in to a Rails 4.x project.

It is NOT integrated withing the rails pipeline and IT CAN run standalone (THIS IS ALL PURE LOVELY JAVASCRIPT) by copying out all the public folder contents to a desired location, and setting the backend to appropiate json file or Url (be aware of XSS warnings). You can find the backend Url variable is within the public/js/collections/integrations.js file.

**** Configuration & Deployment ****

If want to run it under a rails environment, appropiate database settings can be adjusted in the config/database.yml file. If you want to run it locally Sqlite3 can be easily configured to use it in development version. Postgresql also is a good choice :)

run bundle install
run rake db:migrate
run rake db:seed
rails server

**** Unit testing ****

The app includes jasmine for unit testing at '/test/jasmine/specrunner.html'

**** Issues ****

No issues known yet.

**** Live site ****

You can see it live at the following heroku url:

https://gentle-bayou-7863.herokuapp.com/index.html

Contributions? Please feel free to checkout the code at

https://github.com/kohku/XOTechTrial

**** Footnotes ****

Release History
2015-11-28 - v0.9	First official release

**** Questions ****

Daniel Cruz
kohku76@gmail.com
