"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useMyContext } from "../context/myContext";
import Alerta from "./Alerta";
import Link from "next/link";
import { formatNumber } from "@/utils/formatFunctions";

export default function AdminMemoComponent() {
  const { auth, loadPage } = useMyContext();
  const [memos, setMemos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [alerta, setAlerta] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  // Estado para Edición
  const [editingMemo, setEditingMemo] = useState(null);
  const [editForm, setEditForm] = useState({
    idApp: "",
    name: "",
    periodo: "",
    tramite: "",
    status: ""
  });
  const [savingEdit, setSavingEdit] = useState(false);

  // Estado para Eliminación
  const [deletingMemo, setDeletingMemo] = useState(null);
  const [deletingProcess, setDeletingProcess] = useState(false);

  const fetchMemos = async () => {
    setLoading(true);
    try {
      const backendUrl = process.env.NEXT_PUBLIC_URL_OFICIO_BACKEND || '/api/applications';
      const { data } = await axios.get(backendUrl);
      if (data?.data) {
        setMemos(data.data);
      }
    } catch (error) {
      console.error("FETCH_MEMOS_ERROR:", error);
      setAlerta({
        type: "error",
        message: "Hubo un problema al cargar los memorandos"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (auth?.nombre) {
      fetchMemos();
    }
  }, [auth]);

  const handleOpenEdit = (memo) => {
    setEditingMemo(memo);
    setEditForm({
      idApp: memo.idApp || "",
      name: memo.name || "",
      periodo: memo.periodo || "",
      tramite: memo.tramite || "",
      status: memo.status || "utilizado"
    });
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();
    if (!editingMemo) return;
    setSavingEdit(true);

    try {
      const backendUrl = process.env.NEXT_PUBLIC_URL_OFICIO_BACKEND || '/api/applications';
      const { data } = await axios.put(`${backendUrl}/${editingMemo.id}`, editForm);

      setAlerta({
        type: "success",
        message: data.msg || "Memorando actualizado correctamente"
      });

      setEditingMemo(null);
      fetchMemos();
    } catch (error) {
      console.error("SAVE_EDIT_ERROR:", error);
      setAlerta({
        type: "error",
        message: error.response?.data?.error || "Error al actualizar el memorando"
      });
    } finally {
      setSavingEdit(false);
      setTimeout(() => setAlerta({}), 4000);
    }
  };

  const handleConfirmDelete = async () => {
    if (!deletingMemo) return;
    setDeletingProcess(true);

    try {
      const backendUrl = process.env.NEXT_PUBLIC_URL_OFICIO_BACKEND || '/api/applications';
      await axios.delete(`${backendUrl}/${deletingMemo.id}`);

      setAlerta({
        type: "success",
        message: "Memorando eliminado correctamente"
      });

      setDeletingMemo(null);
      fetchMemos();
    } catch (error) {
      console.error("DELETE_MEMO_ERROR:", error);
      setAlerta({
        type: "error",
        message: error.response?.data?.error || "Error al eliminar el memorando"
      });
    } finally {
      setDeletingProcess(false);
      setTimeout(() => setAlerta({}), 4000);
    }
  };

  const filteredMemos = memos.filter((m) => {
    const term = searchTerm.toLowerCase();
    const memoCode = `UAE-FCAM.V.C-2026-${formatNumber(parseInt(m.idApp || 0))}-M`.toLowerCase();
    const name = (m.name || "").toLowerCase();
    const tramite = (m.tramite || "").toLowerCase();
    const periodo = (m.periodo || "").toLowerCase();

    return name.includes(term) || tramite.includes(term) || periodo.includes(term) || memoCode.includes(term);
  });

  return (!loadPage && (
    auth?.nombre ? (
      <div className="min-h-[85vh] p-4 sm:p-6 bg-slate-50 dark:bg-gray-950 w-full max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-black text-gray-800 dark:text-gray-100">
              Administración de Memorandos Generados
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Consulta, edita o elimina los números de memorando emitidos
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-bold px-3 py-1.5 rounded-xl border border-indigo-100 dark:border-indigo-900/40">
              Total: {memos.length}
            </span>
            <button
              onClick={fetchMemos}
              className="px-3 py-1.5 text-xs font-semibold bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl border border-gray-200 dark:border-gray-800 transition-all flex items-center gap-1.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <span>Recargar</span>
            </button>
          </div>
        </div>

        {alerta?.message && (
          <div className="mb-4">
            <Alerta msg={alerta?.message} />
          </div>
        )}

        {/* Buscador */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar por estudiante, trámite, periodo o código de memorando..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-10 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm"
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 absolute left-3 top-3.5 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
        </div>

        {/* Tabla de Resultados */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden">
          {loading ? (
            <div className="py-12 text-center text-gray-500">
              Cargando registros de memorandos...
            </div>
          ) : filteredMemos.length === 0 ? (
            <div className="py-12 text-center text-gray-500">
              No se encontraron memorandos registrados.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800 text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    <th className="py-3.5 px-4">Código Memorando</th>
                    <th className="py-3.5 px-4">Estudiante</th>
                    <th className="py-3.5 px-4">Motivo / Trámite</th>
                    <th className="py-3.5 px-4">Periodo</th>
                    <th className="py-3.5 px-4">Estado</th>
                    <th className="py-3.5 px-4">Fecha</th>
                    <th className="py-3.5 px-4 text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-xs">
                  {filteredMemos.map((memo) => {
                    const code = `UAE-FCAM.V.C-2026-${formatNumber(parseInt(memo.idApp || 0))}-M`;
                    const dateStr = memo.createdAt ? new Date(memo.createdAt).toLocaleDateString() : 'N/A';

                    return (
                      <tr key={memo.id} className="hover:bg-gray-50/60 dark:hover:bg-gray-800/40 transition-colors">
                        <td className="py-3 px-4 font-mono font-bold text-indigo-600 dark:text-indigo-400 whitespace-nowrap">
                          {code}
                        </td>
                        <td className="py-3 px-4 font-semibold text-gray-800 dark:text-gray-200">
                          {memo.name}
                        </td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-300">
                          {memo.tramite}
                        </td>
                        <td className="py-3 px-4 text-gray-500 dark:text-gray-400">
                          {memo.periodo}
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <span className="px-2.5 py-1 text-[10px] font-bold rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/40 uppercase">
                            {memo.status || 'utilizado'}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-400 whitespace-nowrap">
                          {dateStr}
                        </td>
                        <td className="py-3 px-4 text-center whitespace-nowrap">
                          <div className="flex justify-center items-center gap-2">
                            <button
                              onClick={() => handleOpenEdit(memo)}
                              className="p-1.5 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 rounded-lg transition-all"
                              title="Editar"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                              </svg>
                            </button>
                            <button
                              onClick={() => setDeletingMemo(memo)}
                              className="p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/50 rounded-lg transition-all"
                              title="Eliminar"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Modal de Edición */}
        {editingMemo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px]">
            <div className="bg-white dark:bg-gray-900 w-full max-w-md rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-2xl">
              <h3 className="text-lg font-black text-gray-800 dark:text-gray-100 mb-4">
                Editar Registro de Memorando
              </h3>
              <form onSubmit={handleSaveEdit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase">
                    Número Secuencial (idApp)
                  </label>
                  <input
                    type="number"
                    value={editForm.idApp}
                    onChange={(e) => setEditForm({ ...editForm, idApp: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase">
                    Nombre del Estudiante
                  </label>
                  <input
                    type="text"
                    value={editForm.name}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase">
                    Trámite / Motivo
                  </label>
                  <input
                    type="text"
                    value={editForm.tramite}
                    onChange={(e) => setEditForm({ ...editForm, tramite: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase">
                    Periodo
                  </label>
                  <input
                    type="text"
                    value={editForm.periodo}
                    onChange={(e) => setEditForm({ ...editForm, periodo: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase">
                    Estado
                  </label>
                  <input
                    type="text"
                    value={editForm.status}
                    onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm"
                  />
                </div>

                <div className="flex gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setEditingMemo(null)}
                    className="flex-1 py-2.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-bold text-xs rounded-xl"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={savingEdit}
                    className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md"
                  >
                    {savingEdit ? "Guardando..." : "Guardar Cambios"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Modal de Eliminación */}
        {deletingMemo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px]">
            <div className="bg-white dark:bg-gray-900 w-full max-w-sm rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-2xl">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-red-50 dark:bg-red-950/30 rounded-full flex items-center justify-center border border-red-200 dark:border-red-800/60">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-red-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 5.376C11.163 17.5 1.5 17 2.18 17h19.64c.68 0 .757.5.157.976l-9.82 11.25a.375.375 0 01-.634 0l-9.82-11.25zM12 15.75h.008v.008H12v-.008z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-gray-800 dark:text-gray-100 font-black text-center text-base mb-1.5">
                ¿Eliminar Memorando?
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs text-center leading-relaxed mb-6">
                Esta acción eliminará de forma permanente el registro del estudiante <span className="font-bold text-gray-800 dark:text-gray-200">{deletingMemo.name}</span> (Código: UAE-FCAM.V.C-2026-{formatNumber(parseInt(deletingMemo.idApp || 0))}-M).
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setDeletingMemo(null)}
                  className="flex-1 py-2.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-bold text-xs rounded-xl"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleConfirmDelete}
                  disabled={deletingProcess}
                  className="flex-1 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow-md"
                >
                  {deletingProcess ? "Eliminando..." : "Eliminar"}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    ) : (
      <div className="min-h-[85vh] flex flex-col justify-center items-center px-4 bg-slate-50 dark:bg-gray-950">
        <div className="w-full max-w-md bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl text-center">
          <h1 className="text-2xl font-black mb-2">Acceso Denegado</h1>
          <p className="text-sm text-gray-500 mb-6">Debe iniciar sesión para administrar los memorandos</p>
          <Link href="/login" className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold">
            Iniciar Sesión
          </Link>
        </div>
      </div>
    )
  ));
}
