import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
/**
 * Компонент для автоматической прокрутки страницы наверх при изменении маршрута
 */
export default function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        // Прокручиваем страницу наверх при изменении маршрута
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth', // Плавная прокрутка
        });
    }, [pathname]);
    return null;
}
