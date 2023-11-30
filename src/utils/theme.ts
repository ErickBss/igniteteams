import tailwindConfig from 'tailwind.config';
import resolveConfig from 'tailwindcss/resolveConfig';
const config = resolveConfig(tailwindConfig);

export const colors = config.theme?.colors as any;
