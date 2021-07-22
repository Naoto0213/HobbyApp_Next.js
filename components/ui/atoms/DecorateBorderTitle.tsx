const DecorateBorderTitle = ({ children, textColor, borderColor }) => {
  return (
    // Border付きの見出し
    <div className="flex items-center justify-center my-8 sm:my-16 ">
      <h2
        className={`border-b text-3xl sm:text-4xl font-bold ${textColor} ${borderColor}`}
      >
        {children}
      </h2>
    </div>
  );
};

export default DecorateBorderTitle;
