// Chrome y Edge exponen la API con el prefijo "webkit"; otros navegadores,
// sin prefijo. Se usa la que exista. Si ninguna existe, el valor es undefined.
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// Si el navegador no soporta la API, se avisa y no se ejecuta el resto.
if (!SpeechRecognition) {
  alert("Tu navegador no soporta la Web Speech API. Prueba con Google Chrome u Edge.");
} else {
  // Se crea el objeto que se encargará de escuchar y transcribir.
  const recognition = new SpeechRecognition();

  // Idioma esperado del habla: español de España.
  recognition.lang = 'es-ES';
  // true: sigue escuchando tras cada frase, hasta que se llame a stop().
  // false (por defecto) pararía solo después de la primera frase.
  recognition.continuous = true;
  // false: solo se reciben resultados finales, no las transcripciones parciales.
  recognition.interimResults = false;

  // Se guardan referencias a los elementos del HTML con los que se va a trabajar.
  const btnStart = document.getElementById('btnStart');
  const statusText = document.getElementById('statusText');
  const commandText = document.getElementById('commandText');

  // Variable de control para saber si el micrófono está activo ahora mismo.
  let isListening = false;

  // El botón alterna entre iniciar y detener la escucha.
  // start() debe llamarse tras una acción del usuario: así el navegador
  // puede pedir el permiso del micrófono.
  btnStart.addEventListener('click', () => {
    if (!isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }
  });

  // Se dispara cuando el navegador empieza a escuchar de verdad.
  // Aquí se actualiza la interfaz para reflejar el nuevo estado.
  recognition.onstart = () => {
    isListening = true;
    statusText.textContent = "Estado: Escuchando...";
    btnStart.textContent = "Detener Micrófono";
  };

  // Se dispara siempre que la escucha termina: por stop(), por un error
  // o porque el navegador la cierra. Se restaura la interfaz al estado inicial.
  recognition.onend = () => {
    isListening = false;
    statusText.textContent = "Estado: Inactivo";
    btnStart.textContent = "Activar Micrófono";
  };

  // Se dispara cada vez que el servicio reconoce una frase.
  recognition.onresult = (event) => {
    // Con continuous = true, event.results acumula todas las frases de la sesión.
    // La que acaba de llegar es la última de la lista.
    const lastIndex = event.results.length - 1;

    // Para que mayusculas y minusculas se traten igual.
    const transcript = event.results[lastIndex][0].transcript.trim().toLowerCase();

    // Se muestra en pantalla lo que se ha entendido.
    commandText.textContent = transcript;

    // Se busca una palabra clave dentro de la frase y se aplica la acción.
    // includes() permite que funcione con frases como "pon el fondo en rojo".
    // Si no coincide ningún comando, no se cambia nada.

    //Añadido de la practica 1
    //Deberian funcionar ya que al sacarlos del bloque if en pruebas unitarias
    //han cambiado la pagina, si el comando es reconocido deberia realizar los cambios
    const texto=document.getElementById("texto")
    let tamano =texto.style.fontSize;
    if (transcript.includes('mas grande')){
        texto.style.fontSize=(tamano+10)+"px";
        commandText.innerHTML="mas grande";
        const respuesta = new SpeechSynthesisUtterance("Agrandado texto");
        respuesta.lang = "es-ES";
        window.speechSynthesis.speak(respuesta);
    }else if (transcript.includes('mas pequeño')){
        texto.style.fontSize=(tamano-10)+"px";
        commandText.innerHTML="mas pequeño";
        const respuesta = new SpeechSynthesisUtterance("Encogiendo texto");
        respuesta.lang = "es-ES";
        window.speechSynthesis.speak(respuesta);
    }else if (transcript.includes('modo oscuro')){
        const respuesta = new SpeechSynthesisUtterance("Cambiando a modo oscuro");
        respuesta.lang = "es-ES";
        window.speechSynthesis.speak(respuesta);
        document.body.style.backgroundColor="black";
        commandText.innerHTML="modo oscuro";

    }else if (transcript.includes('modo claro')){
        const respuesta = new SpeechSynthesisUtterance("Cambiando texto a modo claro");
        respuesta.lang = "es-ES";
        window.speechSynthesis.speak(respuesta);
        document.body.style.backgroundColor="white";
        commandText.innerHTML="modo claro";
    }else{
        commandText.innerHTML="reconozco pero no es un comando"
    }

  };

  // Se dispara si algo falla (permiso denegado, sin micrófono, sin red...).
  // event.error contiene el código, por ejemplo "not-allowed" o "no-speech".
  // Después del error, el navegador lanza también "end".
  recognition.onerror = (event) => {
    console.error("Error en el reconocimiento de voz:", event.error);
    statusText.textContent = "Error: " + event.error;
    
  };
  
}