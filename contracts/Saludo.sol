// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Saludo {
    string public mensaje;

    constructor() {
        mensaje = "Hola";
    }

    function setMensaje(string memory _nuevoMensaje) public {
        mensaje = _nuevoMensaje;
    }
}