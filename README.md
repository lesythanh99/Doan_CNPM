# Before Run code Client 
-   cd quizapp
-   npm install --save reactstrap react react-dom
-   npm install --save bootstrap
-   npm install axios
# Build and Run Client
-   npm install
-   npm start
# Database
1. Pull images :  docker pull postgres:alpine
2. Run db :  docker run -d --restart unless-stopped --name postgres-0 -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=postgres -p 5432:5432 postgres:alpine
3. Go to DB :
    - docker exec -it postgres-0 bash
    - psql -U postgres
    - \c my_db
    - DB name : my_db
    - Các bảng ở file : backend/datasets/data.sql
4. Thêm dữ liệu bằng cách sửa các thông tin và chạy file backend/try.py: 
-   py try.py      |       python try.py      |       python3 try.py     |      
5, Kill port: sudo kill -9 $(sudo lsof -t -i:5432) 
# Build and Run Server
1. Stop and remove old container: sudo docker stop backend && sudo docker rm backend
2. Build image:
-   cd ./Doan_CNPM/backend/
-   docker build -t backend .
3. Run the container: sudo docker run -d --name backend --env dp_ip=10.0.2.128 -p 5000:5000 backend
