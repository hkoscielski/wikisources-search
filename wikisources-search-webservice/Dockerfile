FROM openjdk:11-jre-slim
COPY target/wikisources-search-webservice-*.jar /usr/src/myapp/wikisources-search-webservice.jar
WORKDIR /usr/src/myapp
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "wikisources-search-webservice.jar"]