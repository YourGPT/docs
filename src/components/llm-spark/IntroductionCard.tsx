

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  link: string;
  bgColor: string;
}

const IntroductionCard = ({ icon, title, description, buttonText, link, bgColor }: CardProps) => {
  return (
    <div className='border border-gray-700 max-w-[351px] p-10'>
      <div className='flex items-center gap-2 text-2xl font-semibold text-white'>
        <div className={`p-2 border rounded-md`} style={{ backgroundColor: bgColor }}>
          {icon}
        </div>
        {title}
      </div>
      <p>{description}</p>
      <a href={link}>{buttonText}</a>
    </div>
  );
};

export default IntroductionCard;
