import { useLocale } from '../../hooks/useLocales';

export default function Hamburger({ className }) {
    const { state, dispatch } = useLocale();
    const changeLanguage = (lng) => {
        const action = {
            type: 'CHANGE_LOCALE',
            payload: {
                lng,
            },
        };
        dispatch(action);
    };

    return (
        <div className={`${className} hamburger pointer-events-none fixed right-0 top-0 z-[var(--z-hamburger)] h-[var(--height-header)] w-full text-white mix-blend-difference`}>
            <div className="wrapper h-full px-10">
                <div className="flex h-full items-center justify-end space-x-4">
                    <div className="text-[.75em] uppercase">Menu</div>
                    <div className="hamburder-button pointer-events-auto">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="pointer-events-auto flex items-center">
                        <select onChange={(e) => changeLanguage(e.target.value.toString())} defaultValue={state.locale} className="cursor-pointer bg-transparent text-[.75em] uppercase outline-none">
                            <option value="en">en</option>
                            <option value="vi">vi</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}
