import { useEffect, useState } from "react";

function AuthorShare() {
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
    );
}


export default AuthorShare;