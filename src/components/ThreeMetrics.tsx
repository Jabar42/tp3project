function ThreeMetrics() {
    return (
        <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="text-3xl font-bold text-red-600 mb-2">500%</div>
                    <p className="text-gray-600 text-sm">Mejora máxima conseguida en un solo test A/B</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="text-3xl font-bold text-red-600 mb-2">+31%</div>
                    <p className="text-gray-600 text-sm">Promedio de mejora relativa en conversiones de nuestros clientes</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="text-3xl font-bold text-red-600 mb-2">12,000+ tests</div>
                    <p className="text-gray-600 text-sm">Experimentos analizados para perfeccionar nuestra metodología</p>
                </div>
            </div>
            );
}

export default ThreeMetrics;