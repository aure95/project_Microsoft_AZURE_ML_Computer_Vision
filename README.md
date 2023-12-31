# azure

## Requirements

[docker desktop install](https://docs.docker.com/desktop/install/windows-install/)

[docker compose install](https://docs.docker.com/compose/install/)

[azure-data-studio install](https://learn.microsoft.com/fr-fr/sql/azure-data-studio/download-azure-data-studio?view=sql-server-ver16&tabs=redhat-install%2Credhat-uninstall#download-azure-data-studio)

## Installation

launch docker desktop
run in Terminal 

*docker compose up -d*

to stop it run 

*docker compose stop*

## Utilisation

>to test Azure SQL Edge 
>
>>to get running container ID
>> docker ps -a --no-trunc
>
> default ***user login*** is ***sa***
>
>docker exec -it <container id > /opt/mssql-tools/bin/sqlcmd >-S localhost -U sa -P administrator_TEST -Q "SELECT * FROM >sys.databases"
>
> *should return something*

### Django project Azure API

before first running , we need to add initial data in database

*python manage.py loaddata init.json*

To run it type in console commmand
*python manage.py runserver*

go to your browser to *htttp://localhost:8000*

you should see Django API running
if issues, run *pip install -r requirements.txt*
### Angular

to launch 
*ng serve*

install:
npm i @ng-bootstrap/ng-bootstrap
ng add @angular/localize
npm install bootstrap-icons

## Run MySQL local docker database
because we are not wealthy, we will use local docker MySQL Database.
verify you have Docker Desktop (for Windows user platform) or Docker (for Linux platform)

type this commands in terminal at the root of the projet

*docker compose up -d*

Congratulate yourself and take a break

## Resources

[Deployer une application web Python (Django ou Flask) avec PostgreSQL dans Azure](https://learn.microsoft.com/fr-fr/azure/app-service/tutorial-python-postgresql-app?tabs=django%2Cmac-linux&pivots=deploy-azd= "")






