[Trello Board](https://trello.com/b/R3B5d5aq/expense-tracker)

[Figma design](https://www.figma.com/design/TG3TtWgQ5jrU89tGYpO4Ny/Expense-Tracker-UI?node-id=0-1&p=f&t=46IsdarH9D1451w1-0)

# Run the app Docker [Reccomended]

```bash
docker-compose build --no-cache
docker-compose up -d
```

# Run Reactjs [Location in frontend]

```bash
npm run build

npm run dev -- --host "0.0.0.0" --port 5173
```

# Java Spring Boot Installation [Location in backend]
````bash
sudo apt update
sudo apt update
````

java version "17.0.15" 2023-01-17 LTS
````bash
sudo apt install openjdk-17-jdk
java -version
````

Apache Maven 3.8.7
````bash
sudo apt install maven
mvn -v
````
Run guide
Go to Root of this github 
````bash 
mvn package
````

Start the server with
````bash
mvn spring-boot:run
````
at this stage localhost:8080 should just return Hello World!

crtr-c to shutdown the server

# Notes:
- DO NOT COMMIT TARGET/
- DO NOT CHANGE THIS PATH:
    - ````bash 
        src/main/java
        ````
- MAVEN COMPILES SOURCES FROM THAT PATH


