export default function Header() {
    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                    TP3
                </div>
                <div>
                    <h1 className="font-semibold text-gray-900">The Perfect Product Page</h1>
                    <p className="text-sm text-gray-600">Magia soportada con datos</p>
                </div>
            </div>
            <button className="gradient-cta text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all">
                Ver la Solución
            </button>
                </div>
            </div>
        </header>
    );
}