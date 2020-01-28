# Instalando o docker
- https://docs.docker.com/install/linux/docker-ce/ubuntu/

# utilizando o docker
```sh
docker help
```
### iniciando um servidor docker do postgres
```sh
sudo docker run --name pggobarber -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres 
```
### Verificando container
```sh
docker ps
docker ps -a
```
### Parar o container
```sh
docker stop pggobarber
```
### Iniciar container
```sh
docker start pggobarber
```
### Verificar log do container
```sh
docker logs pggobarber
```

# Postbird
- Interface visual para acessar dados postgres
- Criar base de dados gobarber