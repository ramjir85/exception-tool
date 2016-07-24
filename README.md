# Exception-Tool
Dropwizard service to display collated exception for various application systems

# Technical Description
The application makes use of dropwizard freemarker for views and jersey REST end point alongwith MongoDB as persistence layer.

# Pre-requisite
MongoDB needs to be installed and also the database and the collection needs to be created in the system where is this is run. Use 'mongoimport' command for doing that. Import the 'exceptiondb.json' file in the code root for the same.

# Compile
gradle clean build

# Run
gradle run


