`

# Week 2. Bootcamp

Ejercicios de la semana 2.

## Configuración - Day 1

- .editorconfig
- .gitignore
- package.json (Add Prettier)
- Instalar las dependecias desde package.json `npm i`
- Crear repo `git init`
- Crear repo en github
- Install de eslint `npm i -D eslint`
- Configuración del eslint `npx eslint --init`
- Añadir `npm i -D eslint-config-prettier`
- Incluir en eslint.json "prettier" como última extensión
- Copiar carpeta de huskys en la root actual
- Iniciar husky `npx husky install`

## Jest install - Day 2

- Install jest como desarrollador e instalarlo con sus tipos `npm i -D jest @types/jest`
- Creación de test `sample.test.js`

- Instalar Babel para dejar que jest funcione con la versión nueva de js `npm i -D @babel/plugin-transform-modules-commonjs`
- Dar configuración propia a Babel (para lo qe nosotros queramos)
- - En package.json: "babel": {
    "env": {
    "test": {
    "plugins": [
    "@babel/plugin-transform-modules-commonjs"
    ]
    }
    }
    }
- Crear archivo jsconfig.json y añadir:

```json
{
  "typeAcquisition": {
    "include": ["jest"]
  }
}
```
