export default function Status(){
    return(
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 rounded-full border border-green-200">
            <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-green-800">Available for work</span>
        </div>
    );
}