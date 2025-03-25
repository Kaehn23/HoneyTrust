import Image from "next/image";

export type AppLogoProps = {
  size: number;
};

const AppLogo: React.FC<AppLogoProps> = ({ size }) => {
  return (
    <div>
      <Image src="/assets/logo.PNG" alt="Logo" width={size} height={size} />
    </div>
  );
};

export default AppLogo;
