# Módulo 8.1 : Bucles

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).



# Laboratorio

Este proyecto tiene como objetivo familiarizarse con los bucles for y while, sin utilizar métodos de arrays, los cuales se abordarán en el próximo laboratorio.

## Introducción
El software hospitalario en desarrollo necesita realizar diversas operaciones sobre una lista de pacientes. El conjunto de datos inicial incluye información como nombre, apellidos, sexo, temperatura, frecuencia cardíaca, especialidad médica y edad de cada paciente.

### Apartado 1
**Obtener Pacientes Asignados a Pediatría:**
La función obtenPacientesAsignadosAPediatria extrae la lista de pacientes asignados a la especialidad de Pediatría.

**Obtener Pacientes Asignados a Pediatría y Menores de Diez Años:**
La función obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios devuelve la lista de pacientes asignados a Pediatría y menores de 10 años.

### Apartado 2
**Activar Protocolo de Urgencia:**
La función activarProtocoloUrgencia activa el protocolo de urgencia si algún paciente tiene una frecuencia cardíaca superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.

### Apartado 3
**Reasignar Pacientes a Médico de Familia:**
La función reasignaPacientesAMedicoFamilia reasigna los pacientes de Pediatría a Médico de Familia.

### Apartado 4
**Verificar Existencia de Pacientes de Pediatría:**
La función HayPacientesDePediatria verifica si hay pacientes asignados a la especialidad de Pediatría.

### Apartado 5
**Contar Pacientes por Especialidad:**
La función cuentaPacientesPorEspecialidad cuenta el número de pacientes asignados a cada especialidad médica.

