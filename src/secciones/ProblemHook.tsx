export default function ProblemHook() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
                ⚠️ PROBLEMA CRÍTICO DETECTADO
            </div>
            
            <h1 className="headline-font text-5xl md:text-6xl font-bold mb-8 text-gray-900 leading-tight">
                Nuestra Metodología Científica Para 
                <span className="text-red-600">Convertir Visitantes</span>
                 en Compradores.
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-readable">
                No diseñamos páginas bonitas; ingeniamos máquinas de conversión basadas en datos, principios de persuasión y pruebas rigurosas. Descubre el proceso que aumenta el valor promedio de tus pedidos.
                <strong>este mensaje puede cambiar tu vida.</strong>
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="text-3xl font-bold text-red-600 mb-2">500%</div>
                    <p className="text-gray-600 text-sm">Mejora máxima conseguida en un solo test A/B</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="text-3xl font-bold text-red-600 mb-2">+32%</div>
                    <p className="text-gray-600 text-sm">Promedio de mejora relativa en conversiones de nuestros clientes</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="text-3xl font-bold text-red-600 mb-2">12,000+ tests</div>
                    <p className="text-gray-600 text-sm">Experimentos analizados para perfeccionar nuestra metodología</p>
                </div>
            </div>

            <p className="text-lg text-gray-700 font-medium">
                Sigue leyendo para descubrir cómo 127 emprendedores han solucionado esto 
                y multiplicado sus ingresos por 4 en menos de 90 días...
            </p>
            </div>
        </div>
    </section>
    );  
}