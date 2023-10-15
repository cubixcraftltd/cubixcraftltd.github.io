import { useRouter } from 'next/router';

import { AppConfig } from '@/utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const router = useRouter();
  const size = props.xl ? '120' : '60';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <img
        src={`${router.basePath}/assets/images/CubixCraft-logos_transparent.png`}
        width={size}
        height={size}
        alt=""
      />
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
