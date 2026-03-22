"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useMyContext } from "../context/myContext";
import { userFromEmail } from "@/utils/takeuserFromemail";
import Logo from "./Logo";
import EmailSendStudent from "../links/EmailSendStudent";
import EmailLink from "../links/EmailSend";
import Image from "next/image";
import Alerta from "./Alerta";
import { formatDate, formatNumber } from "@/utils/formatFunctions";


const availabilityOptions = [
  { name: "--- SELECCIONE ---", value: true },
  { name: "PASO 1 - PERFIL LC", value: false },
  { name: "PASO 2 - PERFIL LC", value: false },
  { name: "PASO 1 - INICIO PP", value: false },
  { name: "PASO 2 - INICIO PP", value: false },
  { name: "INFORME - PP", value: false },
  { name: "OTRO", value: false },
];

const periodoOptions = [
  { name: "--- SELECCIONE ---", value: true },
  { name: "2013-2014", value: false },
  { name: "2014-2015", value: false },
  { name: "2015-2016", value: false },
  { name: "2016-2017", value: false },
  { name: "2017-2018", value: false },
  { name: "2018-2019", value: false },
  { name: "2019-2020", value: false },
  { name: "2020-2021", value: false },
  { name: "2021-2022", value: false },
  { name: "2022-2023", value: false },
  { name: "2023-2024", value: false },
  { name: "2024-2025", value: false },
  { name: "2025-2026", value: false },
  { name: "2026-2027", value: false },
  { name: "2027-2028", value: false },
  { name: "OTRO", value: false },
  { name: "NO APLICA", value: false },
];

const semestreOptions = [
  { name: "--- SELECCIONE ---", value: true },
  { name: "PRIMER", value: false },
  { name: "SEGUNDO", value: false },
  { name: "TERCER", value: false },
  { name: "CUARTO", value: false },
  { name: "QUINTO", value: false },
  { name: "SEXTO", value: false },
  { name: "SEPTIMO", value: false },
  { name: "OCTAVO", value: false },
  { name: "NOVENO", value: false },
  { name: "DECIMO", value: false },
  { name: "EGRESADO", value: false },
  { name: "NO APLICA", value: false },
];

const tutorOptions = [
  { name: "--- SELECCIONE ---", email: "N/A", value: true },
  {
    name: "ARCE RAMIREZ ANGEL ALBERTO",
    email: "aarce@uagraria.edu.ec",
    value: false,
  },
  {
    name: "FERRUZOLA GOMEZ ENRIQUE",
    email: "eferruzola@uagraria.edu.ec",
    value: false,
  },
  {
    name: "LOPEZ HUAYAMAVE JORGE LUIS",
    email: "jlopez@uagraria.edu.ec",
    value: false,
  },
  {
    name: "MOLINA OLEAS WILSON OCTAVIO",
    email: "wmolina@uagraria.edu.ec",
    value: false,
  },
  {
    name: "ORTEGA PONCE LAURA XIMENA",
    email: "lortega@uagraria.edu.ec",
    value: false,
  },
  {
    name: "POW CHONG LONG VASQUEZ DARWIN ROBERTO",
    email: "dpow@uagraria.edu.ec",
    value: false,
  },
  {
    name: "CARDENAS RODRIGUEZ MARIO MANUEL",
    email: "mcardenas@uagraria.edu.ec",
    value: false,
  },
  {
    name: "BERMEO ALMEIDA OSCAR XAVIER",
    email: "obermeo@uagraria.edu.ec",
    value: false,
  },
  {
    name: "BAZAN VERA WILLIAM DAVID",
    email: "wbazan@uagraria.edu.ec",
    value: false,
  },
  {
    name: "CABEZAS CABEZAS ROBERTO FERNANDO",
    email: "rcabezas@uagraria.edu.ec",
    value: false,
  },
  {
    name: "BELTRAN ROBAYO NUVIA ARACELLY",
    email: "nbeltran@uagraria.edu.ec",
    value: false,
  },
  {
    name: "ALVARADO DOLZ ALEXIS STALYN",
    email: "asalvarado@uagraria.edu.ec",
    value: false,
  }
];

function OficioComponent() {
  // Estado para controlar si el tutor fue notificado
  const [tutorNotificado, setTutorNotificado] = useState(false);

    const {auth, setAuth, loadPage} = useMyContext();

  const [nombre, guardaNombre] = useState('');
  const [aviso, setAviso] = useState("");
  const nombreLocal =
    typeof window !== "undefined" && localStorage?.getItem("nombre")
      ? JSON.parse(localStorage.getItem("nombre"))
      : "";

  const fechaUltimoOficio =
  typeof window !== "undefined" && localStorage?.getItem("fecha")
    ? JSON.parse(localStorage.getItem("fecha"))
    : "";

  const numeroUltimoOficio =
  typeof window !== "undefined" && localStorage?.getItem("numero")
    ? JSON.parse(localStorage.getItem("numero"))
    : "";

  const [periodo, guardaPeriodo] = useState("");
  const [periodoAlt, guardaPeriodoAlt] = useState("");
  const [motivo, guardaMotivo] = useState("");
  const [motivoAlt, guardaMotivoAlt] = useState("");
  const [semestre, guardaSemestre] = useState("");

  const [loading, setLoading] = useState(null);
  const [timeForOut, setTimeForOut] = useState(100);
  const [alerta, setAlerta] = useState({});
  const [letterNumber, setLetterNumber] = useState(null);
  const [copied, setCopied] = useState(false);
  const [copied2, setCopied2] = useState(false);

  const [tutor, setTutor] = useState(false);
  const [emailTutor, guardaEmailTutor] = useState("");
  const [email, guardaEmail] = useState(auth?.email || "");

  const [showTooltip, setShowTooltip] = useState(false);
  const [showTooltip2, setShowTooltip2] = useState(false);
  const screenWidth = typeof window !== "undefined" ? window.innerWidth : 768;


  useEffect(() => {
    guardaNombre(auth?.nombre || '')

    const setAuthToken = (token) => {

      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      } else {
        delete axios.defaults.headers.common['Authorization'];
      }
    };

    setAuthToken(auth.token);
  },[auth])

  const handleChangeNombre = (e) => {
    e.preventDefault();
    guardaNombre(e.target.value);
    if (e.target.value.toLowerCase() === nombreLocal && e.target.value !== "") {
      setAviso(
        "Este nombre ha solicitado ya un número de oficio antes en este equipo. Si desea volver a hacer la solicitud omita este mensaje."
      );
      setTimeout(() => {
        setAviso("");
      }, 5000);
    }
  };

  const handleChangeSemestre = (e) => {
    e.preventDefault();
    guardaSemestre(e.target.value);
  };

  const handleChangePeriodo = (e) => {
    e.preventDefault();
    guardaPeriodo(e.target.value);
  };

  const handleChangePeriodoAlt = (e) => {
    e.preventDefault();
    guardaPeriodoAlt(e.target.value);
  };

  const handleChangeMotivo = (e) => {
    e.preventDefault();
    guardaMotivo(e.target.value);

    if (e.target.value.includes("PASO 2")) {
      setTutor(true);
  setTutorNotificado(false);
    } else {
      setTutor(false);
  setTutorNotificado(false);
    }
  };

  const handleChangeMotivoAlt = (e) => {
    e.preventDefault();
    guardaMotivoAlt(e.target.value);
  };

  function getEmailByName(name) {
    const tutor = tutorOptions.find((option) => option.name === name);
    return tutor ? tutor.email : "Email not found";
  }

  const handleChangeEmailStudent = (e) => {
    e.preventDefault();
    guardaEmail(e.target.value);
  };

  const handleChangeEmail = (e) => {
    e.preventDefault();
    guardaEmailTutor(getEmailByName(e.target.value));
  };

  const handleShowTooltip = (e) => {
    e.preventDefault();
    setShowTooltip(!showTooltip);
  };

  function countdown() {
    let seconds = 100;

    const interval = setInterval(() => {
      if (seconds >= 0) {
        seconds--;
        setTimeForOut(seconds);
      } else {
        clearInterval(interval);
      }
    }, 1000);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fechaActual = new Date().toLocaleDateString();

    if(fechaUltimoOficio.split(',')[0] === fechaActual){
      setAlerta({
        type: "error",
        keyWord: "fecha",
        message: `Ya generó un oficio hoy: Oficio Nro. M-UAE-FCA.V.CC-2026-0${numeroUltimoOficio}.O, si tiene dudas comuníquese con el Ing. Mario Ibarra`,
      });
      return;
    }

    const userData = {
      name: nombre.toString() ?? "",
      tramite: motivoAlt !== "" ? motivoAlt?.toString() : motivo?.toString(),
      periodo: periodoAlt !== "" ? periodoAlt?.toString() : periodo?.toString(),
      status: emailTutor!=="" ? userFromEmail(emailTutor) : "utilizado"
    };

    if (
      [
        nombre.toString(),
        motivoAlt !== "" ? motivoAlt?.toString() : motivo?.toString(),
        periodoAlt !== "" ? periodoAlt?.toString() : periodo?.toString(),
      ].includes("") 
    ) {

      
      setAlerta({
        type: "error",
        keyWord: "vacios",
        message: "Todos los campos son obligatorios",
      });

      console.log(tutor===true)
      console.log(emailTutor)

      setTimeout(() => {
        setAlerta({});
      }, 2000);
      return;
    }

    if(tutor && emailTutor==='') { 
      setShowTooltip2(!showTooltip2)

    setTimeout(() => {
      setShowTooltip2(false)
    }, 2000);
    return;
  
  }

    try {
      swal({
        title: "Desea Generar el Número de Oficio?",
        text: "¿Le falta SOLO el número de oficio para entregar la documentación? Si aún tiene pendientes NO genere el número y ocúpese de llenar primero la documentación de la gestión que le corresponda hacer (Paso 1, Paso 2, etc), válido por 72 horas a partir de su emisión!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(async (willDelete) => {
        if (willDelete) {
          setLoading(true);
          countdown();

          await axios
            .post(process.env.NEXT_PUBLIC_URL_OFICIO_BACKEND, userData)
            .then((res) => {
              setLetterNumber(res.data?.data.idApp);
              setLoading(false);
              localStorage.setItem(
                "nombre",
                JSON.stringify(nombre.toLowerCase())
              );
              localStorage.setItem(
                "fecha",
                JSON.stringify(new Date().toLocaleString())
              );
              localStorage.setItem(
                "numero",
                JSON.stringify(res.data?.data.idApp)
              );
            })
            .catch((error) => {
              console.log(error);
              setLoading(null);
              setAlerta({
                type: "error",
                keyWord: "bd",
                message: "Hubo un problema con el servidor",
              });
              setTimeForOut(80);
              setTimeout(() => {
                setAlerta({});
                localStorage.removeItem("usuario")
                setAuth({})
              }, 2000);
            });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  function copyToClipboard(text, el) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    if (el === 1) {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    } else if (el === 2) {
      setCopied2(true);
      setTimeout(() => {
        setCopied2(false);
      }, 1000);
    }
  }


   return (!loadPage && (
    auth?.nombre ? (
      <div className="min-h-[85vh] flex flex-col justify-center items-center px-4 bg-slate-50 dark:bg-gray-950 py-10">
        <div className="w-full max-w-md bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-100/50 dark:shadow-none flex flex-col items-center">
          <h1 className="text-2xl font-black text-center text-gray-800 dark:text-gray-100 mb-2">
            Solicitud de número de Oficio
          </h1>
          <p className="text-sm text-gray-400 text-center mb-6">Completa los campos para generar tu oficio</p>

          {alerta?.type && <Alerta msg={alerta?.message} />}

          {loading == null && (
            <form onSubmit={handleSubmit} className="w-full space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider" htmlFor="name">
                  Nombre del Solicitante
                </label>
                <input
                  id="name"
                  type="text"
                  className="mt-1 text-gray-400 dark:text-gray-500 block w-full px-4 py-3 bg-gray-100 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl cursor-not-allowed text-sm"
                  name="name"
                  value={nombre}
                  disabled
                />
                <p className="text-red-500 text-xs mt-1">{aviso}</p>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider" htmlFor="semestre">
                  Semestre que cursa
                </label>
                <select
                  id="semestre"
                  className="mt-1 text-gray-800 dark:text-gray-200 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-sm"
                  name="semestre"
                  defaultValue="--- SELECCIONE ---"
                  onChange={handleChangeSemestre}
                >
                  {semestreOptions.map((option) => (
                    <option key={option.name} value={option.name.toString()} disabled={option.value}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <div className="flex gap-2 items-center">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider" htmlFor="periodo">
                    Periodo aplica actividad
                  </label>
                  <button onClick={handleShowTooltip} type="button" className="text-gray-400 hover:text-indigo-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                  </button>
                </div>
                {showTooltip && (
                  <div className="absolute bg-gray-800 text-white py-2 px-3 rounded-lg text-xs z-10 pointer-events-none mt-1 shadow-lg max-w-[280px]">
                    El período al que aplica la actividad dependera si está arrastrando o adelantando. Ante dudas consulte al Responsable.
                  </div>
                )}
                <select
                  id="periodo"
                  className="mt-1 text-gray-800 dark:text-gray-200 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-sm"
                  name="periodo"
                  defaultValue="--- SELECCIONE ---"
                  onChange={handleChangePeriodo}
                >
                  {periodoOptions.map((option) => (
                    <option key={option.name} value={option.name.toString()} disabled={option.value}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>

              {periodo === "OTRO" && (
                <div>
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider" htmlFor="periodoAlt">
                    Especifique el período
                  </label>
                  <input
                    id="periodoAlt"
                    type="text"
                    className="mt-1 text-gray-800 dark:text-gray-200 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-sm"
                    placeholder="Periodo"
                    name="periodoAlt"
                    value={periodoAlt}
                    onChange={handleChangePeriodoAlt}
                  />
                </div>
              )}

              <div>
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider" htmlFor="tramite">
                  Motivo o Paso de Vinculación
                </label>
                <select
                  id="tramite"
                  className="mt-1 text-gray-800 dark:text-gray-200 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-sm"
                  name="tramite"
                  defaultValue="--- SELECCIONE ---"
                  onChange={handleChangeMotivo}
                >
                  {availabilityOptions.map((option) => (
                    <option key={option.name} value={option.name.toString()} disabled={option.value}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>

              {motivo === "OTRO" && (
                <div>
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider" htmlFor="motivoAlt">
                    Especifique el motivo
                  </label>
                  <input
                    id="motivoAlt"
                    type="text"
                    className="mt-1 text-gray-800 dark:text-gray-200 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-sm"
                    placeholder="Motivo del Oficio"
                    name="motivoAlt"
                    value={motivoAlt}
                    onChange={handleChangeMotivoAlt}
                    maxLength={30}
                  />
                </div>
              )}

              {tutor && (
                <div className="space-y-2 border-t border-gray-100 dark:border-gray-800 pt-3 mt-3">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider flex justify-between" htmlFor="tutor">
                    <span>Tutor Asignado</span>
                    {showTooltip2 && <span className="text-red-500 capitalize tracking-normal">Debes escoger un tutor</span>}
                  </label>
                  <select
                    id="tutor"
                    className="mt-1 text-gray-800 dark:text-gray-200 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-sm"
                    name="tutor"
                    defaultValue="--- SELECCIONE ---"
                    onChange={handleChangeEmail}
                  >
                    {tutorOptions.map((option) => (
                      <option key={option.name} value={option.name.toString()} disabled={option.value}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                  <div className="bg-blue-50 dark:bg-blue-950/40 p-3 rounded-xl border border-blue-100 dark:border-blue-900/50 text-xs text-blue-700 dark:text-blue-300 leading-relaxed">
                    Corrobore el tutor asignado por el Ing. Mario Ibarra antes de continuar.
                  </div>
                  {motivo.includes("PASO 2") && emailTutor && (
                    <div className="mt-4 flex flex-col items-center gap-2 bg-gray-50 dark:bg-gray-800/50 p-3 rounded-xl border border-gray-100 dark:border-gray-700">
                      <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Notificar al tutor por correo:</span>
                      <EmailLink
                        emailTutor={emailTutor}
                        nombre={nombre}
                        semestre={semestre}
                        onClick={() => setTutorNotificado(true)}
                      />
                      {!tutorNotificado && (
                        <span className="text-indigo-600 dark:text-indigo-400 text-xs text-center">Debes notificar al tutor antes de generar el número.</span>
                      )}
                    </div>
                  )}
                </div>
              )}

              <input
                type="submit"
                className={`w-full py-3 bg-indigo-600 p-2 text-white font-bold rounded-xl shadow-lg hover:shadow-xl active:scale-95 transition-all mt-4 text-sm cursor-pointer ${tutor && motivo.includes("PASO 2") && !tutorNotificado ? 'opacity-50 cursor-not-allowed' : ''}`}
                value="Generar Número de Oficio"
                disabled={tutor && motivo.includes("PASO 2") && !tutorNotificado}
              />
            </form>
          )}

          {loading ? (
            <div className="text-center py-6">
              <div className="flex justify-center mb-4">
                <Image width={60} height={60} alt="loader" src="/spinner.gif" className="dark:invert" />
              </div>
              <p className="font-bold text-gray-800 dark:text-gray-200">Generando oficio...</p>
              <p className="text-xs text-gray-500 mt-1">Tiempo estimado: <span className="text-red-500 font-bold">{timeForOut} s</span></p>
            </div>
          ) : (
            letterNumber && (
              <div className="w-full space-y-4">
                <div className="bg-emerald-50 dark:bg-emerald-950/30 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-900/40 text-center flex flex-col items-center">
                  <h3 className="text-emerald-800 dark:text-emerald-400 font-black text-lg">¡Oficio Generado!</h3>
                  <p className="text-emerald-600 text-xs mt-0.5">Cópialo para usarlo en tus plantillas</p>
                  
                  <button
                    onClick={() => copyToClipboard(`Oficio Nro. M-UAE-FCA.V.CC-2026-${formatNumber(parseInt(letterNumber))}.O`, 1)}
                    className="mt-4 px-4 py-2.5 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-bold text-xs rounded-xl border border-emerald-200 shadow-sm flex items-center gap-2"
                  >
                    <span>M-UAE-FCA.V.CC-2026-{formatNumber(parseInt(letterNumber))}.O</span>
                  </button>
                  {copied && <span className="text-[10px] text-emerald-600 mt-1">Copiado!</span>}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    ) : (
      <div className="min-h-[85vh] flex flex-col justify-center items-center px-4 bg-slate-50 dark:bg-gray-950">
        <div className="w-full max-w-md bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl text-center">
          <h1 className="text-2xl font-black mb-2">Acceso Denegado</h1>
          <p className="text-sm text-gray-500 mb-6">Debe iniciar sesión para solicitar un número de oficio</p>
          <Link href="/login" className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-xl text-sm">
            Iniciar Sesión
          </Link>
        </div>
      </div>
    ))
  );


}

export default OficioComponent;