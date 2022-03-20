# Kubernetes

## MicroK8s
- https://microk8s.io/
### DOCS
- https://microk8s.io/docs

* CUDA
    - https://blogs.nvidia.co.kr/2018/01/16/cuda-toolkit/

### How to build clusters with MicroK8s
#### Reference
* https://ubuntu.com/tutorials/getting-started-with-kubernetes-ha?_ga=2.224499858.961657924.1647747222-980843396.1647747222#1-overview

### How to install MySQL on docker
#### Prerequisites
* docker, mysql-client
#### Reference
* https://hub.docker.com/_/mysql
* https://phoenixnap.com/kb/mysql-docker-container

1) `docker pull mysql`
2) `docker run --name=${make_container_name} -e MYSQL_ROOT_PASSWORD=${your_password} -d mysql:${version_that_you_want}`
3) you can check if it is success
    `sudo docker logs mysql_docker`
4) you can enter to container bash by
    `sudo docker exec -it ${container_name} bash`
5) `mysql -uroot -p`

#### connect with MicroK8s?
