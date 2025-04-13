DApp de Saludo en Solidity
===========================

Esta DApp permite almacenar y modificar un mensaje de saludo usando Solidity y Hardhat en una blockchain local. Ideal para aprender lo básico de contratos inteligentes.

¿Que es esto?
-------------

Una aplicación descentralizada (DApp) súper simple que tiene:
- Un contrato inteligente con un saludo.
- Un script para desplegarlo en una red local.
- Pruebas automáticas para comprobar que funciona.
- (Opcional) Un frontend con React.

Requisitos
----------

Antes de empezar, necesitas tener instalado:
- Node.js (versión 16+)
- npm (viene con Node)
- Git (para subirlo a GitHub si quieres)

Estructura del Proyecto
-----------------------

Dapp/
├── contracts/
│   └── Saludo.sol          # Contrato inteligente
├── scripts/
│   └── deploy.js           # Script para desplegar el contrato
├── test/
│   └── Saludo.js           # Test del contrato (opcional)
├── hardhat.config.js       # Configuración de Hardhat
├── frontend/               # Interfaz visual (opcional)
├── package.json
└── README.md

¿Que hace el contrato?
----------------------

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Saludo {
    string saludo;

    constructor() {
        saludo = "Hola mundo";
    }

    function leerSaludo() public view returns (string memory) {
        return saludo;
    }

    function cambiarSaludo(string memory _nuevoSaludo) public {
        saludo = _nuevoSaludo;
    }
}

Funciones:
- leerSaludo() → Devuelve el saludo actual.
- cambiarSaludo(_nuevoSaludo) → Cambia el saludo por uno nuevo.

Como usarlo (paso a paso)
-------------------------

1. Instala las dependencias
    npm install

2. Compila el contrato
    npx hardhat compile

3. Abre una blockchain local
    npx hardhat node

4. Despliega el contrato (en otra terminal)
    npx hardhat run scripts/deploy.js --network localhost

Como testear el contrato
------------------------

Opcional, pero recomendado:
    npx hardhat test

El test revisa si el saludo por defecto es correcto y si se puede cambiar.
