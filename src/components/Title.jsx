const Title = ({ title, subTitle, align, font }) => {
  return (
    <div
      className={`flex flex-col justify-center max-w-174 items-center text-center ${align === 'left' && 'md:items-start md:text-left'}`}
    >
      <h1 className={`text-4xl md:text-[40px] ${font || 'font-playfair'}`}>
        {title}
      </h1>
      <p className="text-[#6B7280]/90 text-base font-normal">{subTitle}</p>
    </div>
  );
};

export default Title;
