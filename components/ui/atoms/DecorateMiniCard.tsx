import Link from "next/Link";

type Props = {
  label: string;
  bgColor: string;
  textColor: string;
  link: string;
};

const DecorateMiniCard = ({ label, bgColor, textColor, link }: Props) => {
  return (
    <>
      <Link href={link}>
        <a>
          <div
            className={`${bgColor} mx-12 py-4 w-48 text-center hover:opacity-90`}
          >
            <p className={`${textColor} font-bold`}>{label}</p>
          </div>
        </a>
      </Link>
    </>
  );
};

export default DecorateMiniCard;
