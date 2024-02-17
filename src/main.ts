type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

//APARTADO 1
const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let arrayPacientesPediatria = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      arrayPacientesPediatria.push(pacientes[i]);
    }
  }
  return arrayPacientesPediatria;
};

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let arrayPacientesPediatriaMenoresDiez = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      arrayPacientesPediatriaMenoresDiez.push(pacientes[i]);
    }
  }
  return arrayPacientesPediatriaMenoresDiez;
};

console.log("APARTADO 1:");
console.log(
  "Pacientes asignados a pediatría:",
  obtenPacientesAsignadosAPediatria(pacientes)
);
console.log(
  "Pacientes asignados a pediatría menores de 10 años",
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes)
);

//APARTADO 2
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProtolo = false;

  for (let i = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].frecuenciaCardiaca > 100 &&
      pacientes[i].temperatura > 39
    ) {
        activarProtolo = true;
    }
  }
  return activarProtolo;
};

console.log(
  "APARTADO 2: Activar el protocolo de urgencia algún paciente tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados."
);
console.log(
  "Activar protocolo de seguridad?",
  activarProtocoloUrgencia(pacientes)
);

//APARTADO 3
const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
    let indicePaciente = -1;
    let pacientesReasignados = [...pacientes]; 
  
    for (let i = 0; i < pacientes.length; i++) {
      if (pacientes[i].especialidad === "Pediatra") {
        indicePaciente = i;
        break;
      }
    }
  
    if (indicePaciente !== -1) {
        pacientesReasignados[indicePaciente] = {
          ...pacientesReasignados[indicePaciente],
          especialidad: "Medico de familia",
        };
      }
  
    return pacientesReasignados;
};

console.log(
    "APARTADO 3:"
  );
  console.log(
    "Listado de pacientes tras reasignacion",
    reasignaPacientesAMedicoFamilia(pacientes)
  );

//APARTADO 4
const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    let tienePacientes = false;
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra") {
            tienePacientes = true;
            break;
        }
        
    }
    return tienePacientes;
};

console.log(
    "APARTADO 4:"
  );
  console.log(
    "Hay pacientes de pediatría?",
    hayPacientesDePediatria(pacientes)
  );

//APARTADO 5
interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
}
  
const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
let medicoDeFamilia = 0;
let pediatria  = 0;
let cardiologia  = 0;

    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Medico de familia") {
            medicoDeFamilia++;
        } else if (pacientes[i].especialidad === "Pediatra"){
            pediatria++;
        } else {
            cardiologia++;
        }
    };

    const resultado : NumeroPacientesPorEspecialidad = {
        medicoDeFamilia: medicoDeFamilia,
        pediatria: pediatria,
        cardiologia: cardiologia,
    }

    return resultado;

}

console.log("APARTADO 5:");
console.log(cuentaPacientesPorEspecialidad(pacientes));
