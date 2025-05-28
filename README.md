Installation to run
# sudo apt update
# sudo apt update

java version "17.0.15" 2023-01-17 LTS
# sudo apt install openjdk-17-jdk
# java -version

Apache Maven 3.8.7
# sudo apt install maven
# mvn -v

Run guide
Go to Root of this github
run 
# mvn package

Start the server with
# mvn spring-boot:run

at this stage localhost:8080 should just return Hello World!
crtr-c to shutdown the server

Notes:
DO NOT COMMIT TARGET/
DO NOT CHANGE THIS PATH:
# src/main/java
MAVEN COMPILES SOURCES FROM THAT PATH


