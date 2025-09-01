"use client";

import { useEffect, useState } from "react";

export default function TheRealProblem() {
    const [saved, setSaved] = useState<boolean>(false);
    const [actionMsg, setActionMsg] = useState<string>("");

    useEffect(() => {
        try {
            const stored = localStorage.getItem("theRealProblem:saved");
            if (stored === "1") setSaved(true);
        } catch {}
    }, []);

    const handleShare = async () => {
        try {
            const url = window.location.href;
            const shareData = {
                title: document.title || "Contenido",
                text: "Échale un vistazo a este contenido",
                url,
            };
            if (navigator.share) {
                await navigator.share(shareData as ShareData);
                setActionMsg("Compartido");
            } else if (navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(url);
                setActionMsg("Enlace copiado");
            } else {
                setActionMsg("No se pudo compartir");
            }
        } catch {
            setActionMsg("No se pudo compartir");
        } finally {
            setTimeout(() => setActionMsg(""), 2000);
        }
    };

    const handleSave = () => {
        const next = !saved;
        setSaved(next);
        try {
            localStorage.setItem("theRealProblem:saved", next ? "1" : "0");
        } catch {}
        setActionMsg(next ? "Guardado" : "Eliminado de guardados");
        setTimeout(() => setActionMsg(""), 1500);
    };

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between gap-2 md:gap-4 mb-6 rounded-lg border border-gray-200 bg-gray-50/60 px-3 py-2 md:px-4 md:py-3">
                <div className="flex items-center min-w-0">
                    <div className="w-9 h-9 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl mr-3 md:mr-4">
                        AP
                    </div>
                    <div className="min-w-0">
                        <div className="flex items-center space-x-2 mb-0.5">
                            <h2 className="truncate text-sm md:text-lg font-bold text-gray-900">Por Alexander Peck</h2>
                            <svg className="w-3 h-3 md:w-4 md:h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                        </div>
                        <p className="text-[11px] md:text-sm text-gray-500 leading-snug">Conversion Designer & Developer</p>
                    </div>
                </div>
                
                <div className="flex items-center space-x-2 md:space-x-3 shrink-0">
                    <button onClick={handleShare} aria-label="Compartir" title="Compartir" className="flex items-center space-x-2 bg-white border border-gray-200 hover:bg-gray-100 px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition-colors">
                        <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
                        </svg>
                        <span className="text-xs md:text-sm font-medium text-gray-700 hidden sm:inline">Compartir</span>
                    </button>
                    
                    <button onClick={handleSave} aria-label="Guardar" title="Guardar" className="flex items-center space-x-2 bg-white border border-gray-200 hover:bg-gray-100 px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition-colors">
                        <svg className="w-4 h-4 text-gray-700" fill={saved ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                        </svg>
                        <span className="text-xs md:text-sm font-medium text-gray-700 hidden sm:inline">{saved ? "Guardado" : "Guardar"}</span>
                    </button>
                    {actionMsg ? (
                        <span className="hidden md:inline-block text-sm text-gray-600 ml-1">{actionMsg}</span>
                    ) : null}
                </div>
            </div>



            <div className="text-readable text-lg text-gray-700 space-y-6 mb-12">
                <p>
                    <strong>Déjame adivinar tu situación:</strong> Tienes un producto o servicio increíble. 
                    Tus clientes están satisfechos. Sabes que tu negocio tiene potencial. Pero algo no funciona.
                </p>

                <p>
                    Inviertes en publicidad y el tráfico llega, pero las ventas no. Trabajas 12 horas diarias 
                    pero tus ingresos se mantienen estancados. Ves a tu competencia crecer mientras tú luchas 
                    por mantener la cabeza fuera del agua.
                </p>

                <div className="problem-highlight p-8 rounded-lg my-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">El problema NO es tu producto, ni tu experiencia, ni tu dedicación.</h3>
                    <p className="text-lg font-medium text-gray-800">
                        El problema es que estás compitiendo en el mercado digital del 2024 
                        con herramientas y estrategias del 2010.
                    </p>
                </div>

                <p>
                    Mientras tú envías emails uno por uno, tu competencia tiene sistemas automatizados trabajando 24/7. 
                    Mientras tú pierdes el 95% de tus visitantes por una web lenta, ellos convierten al 18% 
                    con funnels optimizados.
                </p>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-6 text-center text-gray-900">
                    ¿Te Identificas Con Alguna De Estas Situaciones?
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <span className="text-red-500 mr-3 mt-1 text-xl">•</span>
                            <span>Tu web tarda más de 5 segundos en cargar y pierdes visitantes constantemente</span>
                        </div>
                        <div className="flex items-start">
                                <span className="text-red-500 mr-3 mt-1 text-xl">•</span>
                            <span>Menos del 2% de tus visitantes se convierten en clientes</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-red-500 mr-3 mt-1 text-xl">•</span>
                            <span>Gastas €1,000+ mensuales en ads pero apenas consigues clientes</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-red-500 mr-3 mt-1 text-xl">•</span>
                            <span>Trabajas más de 50 horas semanales en tareas repetitivas</span>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <span className="text-red-500 mr-3 mt-1 text-xl">•</span>
                            <span>Haces todo manualmente: emails, seguimientos, facturas</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-red-500 mr-3 mt-1 text-xl">•</span>
                            <span>Tus ingresos dependen 100% de tu tiempo personal</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-red-500 mr-3 mt-1 text-xl">•</span>
                            <span>No puedes tomarte vacaciones sin que tu negocio se pare</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-red-500 mr-3 mt-1 text-xl">•</span>
                            <span>Sientes que trabajas MÁS pero ganas MENOS cada año</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    );
}