const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="h-1 w-full bg-gray-300 rounded-full">
      <div
        style={{ width: `${progress}%` }}
        className={`relative h-full rounded-full ${
          progress >= 70
            ? "bg-red-600"
            : progress >= 50
            ? "bg-amber-500"
            : "bg-green-600"
        }`}
      >
        <div className="-right-2 -top-2 absolute">⚫️</div>
      </div>
    </div>
  );
};

export default ProgressBar;
