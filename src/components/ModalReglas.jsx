import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalReglas({show, handleClose}) {
  
  return (
    <>
      <Modal size="lg" centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h2> Reglas generales del powerlifting</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Desde <b>M.S.C</b> (Maximal Strength Corporation) reconocemos los siguientes levantamientos,
            los que deberán ser ejecutados en la misma secuencia en todas las competencias
            organizadas bajo nuestro reglamento: 1) Squat 2) Bench Press 3) Deadlift 4) Total.
          </p>

          <p>La competencia tendrá lugar entre levantadores en categorías definidas por <b>sexo, peso
            corporal y por edad.</b> Los Campeonatos Open de hombres y mujeres permiten
            levantadores de cualquier edad a partir de los 14 años. En el caso de que se combinen un
            Campeonato de Powerlifting o Bench Press, por ejemplo, con Campeonatos Junior, Open
            y Master&#39;s, Clássic (1 Categoria) o Equipado (1 Categoria), un levantador tiene la opción
            de competir en ambos Campeonatos. El atleta deberá pagar la cuota de entrada para
            ambos Campeonatos y deberá competir dos veces. <strong>Ningún levantador puede competir 2
            veces en Clásico o 2 veces en Equipado.</strong> Una vez que el atleta ingresa en la clasificación,
            no puede cambiar su edad, división. El levantador solo puede cambiar la categoría de
            peso en los torneos que no requieran clasificación.
          </p>
            
            <p>Las reglas se aplicaran a todos los niveles de competencias.<strong> A cada competidor le serán permitidos 
            tres intentos en cada levantamiento</strong>. El mejor intento valido en cada ejercicio del levantador, 
            cuenta para el total de la competencia. Si dos o más levantadores registran el mismo total, el levantador más
            liviano será clasificado por sobre el de mayor peso. Si dos o más levantadores registran el
            mismo peso al momento del pesaje y eventualmente logran un mismo total al final de la
            competición, el levantador que hace el total primero tendrá precedencia sobre el otro
            levantador.
          </p>
            
          <p>El mismo procedimiento será aplicado cuando sean entregados premios por
            squat, bench press y deadlift o cuando se logre un Record Mundial.
          </p>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalReglas