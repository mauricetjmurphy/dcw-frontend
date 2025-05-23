export type ConfigProps = {
    locale: string;
};

export type CustomizationProps = {
    locale: string;
    onChangeLocale: (locale: string) => void;
    onReset: () => void;
};
