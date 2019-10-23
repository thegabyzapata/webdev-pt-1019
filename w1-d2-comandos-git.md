# Ayuda comandos git

## Crear un repositorio
    git init

## Ver el estado de un repositorio git
    git status

## Trackear un fichero para que git lo controle
    git add <filename>

## Hacer un commit
    git commit -am "<mensaje>"

## Ver que repositorios remotos tengo vinculado
    git remote -v

## Subir el codigo a github (asegurar que el repo remoto esta vinculado)
    git push origin master

## Ver commits en local (pulsa q para salir)
    git log

## Crear una nueva rama
    git checkout -b <nombre_rama>

## Cambiar de rama
    git checkout <nombre_rama>

## Merge de una rama en la rama actual
    git merge <rama_de_la_que_me_traigo_los_cambios>

## Resolver conflictos
    1 - Resolver los conflictos en VSC, hablarlo
    2 - `git add <fichero_conflictivo>`  (nota: tantas veces como ficheros conflictivos)
    3 -  git commit 