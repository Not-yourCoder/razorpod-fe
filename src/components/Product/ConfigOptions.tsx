import { Settings, Wrench, Zap } from 'lucide-react';

const ConfigOptions = () => (
    <div className="flex items-center space-x-4 mb-6">
        <button className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200">
            <Settings className="w-5 h-5" />
        </button>
        <button className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200">
            <Wrench className="w-5 h-5" />
        </button>
        <button className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200">
            <Zap className="w-5 h-5" />
        </button>
    </div>
);

export default ConfigOptions;
